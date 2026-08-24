import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  containsBadWords,
  isSpamPattern,
  sanitizeHtml,
  isDisposableEmail,
  checkRateLimit,
} from "@/lib/formSecurity";

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  return forwarded ? forwarded.split(",")[0]?.trim() || "unknown" : "unknown"
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || ""
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid content type." },
        { status: 400 }
      )
    }

    const ip = getClientIp(request)
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const {
      name,
      organization,
      email,
      inquiry,
      message,
      honeypot,
      _time,
    } = body as Record<string, unknown>

    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Message received." }
      )
    }

    const stringFields: Record<string, string> = {}
    for (const [key, value] of Object.entries({ name, organization, email, inquiry, message })) {
      if (typeof value === "string") {
        stringFields[key] = sanitizeHtml(value.trim())
      }
    }

    const { name: cleanName, organization: cleanOrg, email: cleanEmail, inquiry: cleanInquiry, message: cleanMessage } = stringFields

    if (!cleanName || !cleanMessage) {
      return NextResponse.json(
        { success: false, message: "Name and message are required." },
        { status: 400 }
      )
    }

    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { success: false, message: "Name must be between 2 and 100 characters." },
        { status: 400 }
      )
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Message must be between 10 and 2000 characters." },
        { status: 400 }
      )
    }

    if (cleanEmail && (isDisposableEmail(cleanEmail) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    const fullText = [cleanName, cleanOrg, cleanEmail, cleanInquiry, cleanMessage].filter(Boolean).join(" ")

    if (containsBadWords(fullText)) {
      return NextResponse.json(
        { success: false, message: "Your message contains inappropriate content." },
        { status: 400 }
      )
    }

    // Spam pattern check disabled due to false positives on legitimate messages.
    // Re-enable after tuning patterns if needed.
    // if (isSpamPattern(fullText)) {
    //   return NextResponse.json(
    //     { success: false, message: "Your message appears to be spam." },
    //     { status: 400 }
    //   )
    // }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || "587")
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.CONTACT_TO

    if (!host || !user || !pass || !to) {
      console.error("Missing SMTP configuration")
      return NextResponse.json(
        { success: false, message: "SMTP is not configured correctly." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const subject = cleanInquiry
      ? `New Inquiry: ${cleanInquiry}`
      : "New Contact Form Submission"

    const brand = {
      bg: "#f3f6f9",
      brand: "#0b1220",
      accent: "#0fa8a3",
      gold: "#b8873e",
      muted: "#6b7280",
      white: "#ffffff",
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0; padding:0; background-color:${brand.bg}; font-family:Arial,Helvetica,sans-serif; color:${brand.brand};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${brand.bg}; padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:${brand.white}; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
          <tr>
            <td style="background-color:${brand.brand}; padding:20px 24px; text-align:center;">
              <h1 style="margin:0; font-size:18px; font-weight:600; color:${brand.white}; letter-spacing:0.3px;">Dr. Preethi Ramadoss, PhD</h1>
              <p style="margin:6px 0 0; font-size:12px; color:${brand.white}; opacity:0.85;">Biomaterials & Biosensor R&D Consultant</p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px;">
              <h2 style="margin:0 0 16px; font-size:16px; font-weight:600; color:${brand.brand};">${subject}</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Name</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.brand}; font-weight:600;">${cleanName}</td>
                </tr>
                ${cleanOrg ? `
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Organization</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.brand};">${cleanOrg}</td>
                </tr>` : ''}
                ${cleanEmail ? `
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Email</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.brand};">${cleanEmail}</td>
                </tr>` : ''}
                ${cleanInquiry ? `
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Inquiry Type</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.brand};">
                    <span style="display:inline-block; padding:2px 10px; border-radius:9999px; background-color:${brand.brand}; color:${brand.white}; font-size:12px; font-weight:600;">${cleanInquiry}</span>
                  </td>
                </tr>` : ''}
                <tr>
                  <td style="padding:10px 0; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Message</td>
                  <td style="padding:10px 0; font-size:13px; color:${brand.brand}; white-space:pre-wrap;">${cleanMessage}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:${brand.bg}; padding:16px 24px; text-align:center; border-top:1px solid #e5e7eb;">
              <p style="margin:0; font-size:12px; color:${brand.muted};">This message was sent from the Dr. Preethi Ramadoss website contact form.</p>
              <p style="margin:8px 0 0; font-size:12px; color:${brand.muted};">Received on ${new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    const text = `
New contact form submission

Name: ${cleanName}
Organization: ${cleanOrg || "N/A"}
Email: ${cleanEmail || "N/A"}
Inquiry Type: ${cleanInquiry || "N/A"}

Message:
${cleanMessage}
    `.trim()

    const info = await transporter.sendMail({
      from: `"Website Contact" <${user}>`,
      to,
      replyTo: cleanEmail,
      subject,
      text,
      html,
    })

    console.log("Email sent successfully:", info.messageId)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    })
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error)

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
        error: errorMessage,
      },
      { status: 500 }
    )
  }
}
