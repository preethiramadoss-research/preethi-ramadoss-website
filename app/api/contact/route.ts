import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      organization,
      email,
      inquiry,
      message,
    } = body;

    // Validation
    if (!name || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and message are required.",
        },
        { status: 400 }
      );
    }

    // Environment variables
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO;

    // Check SMTP configuration
    if (!host || !user || !pass || !to) {
      console.error("Missing SMTP configuration:", {
        host: !!host,
        user: !!user,
        pass: !!pass,
        to: !!to,
      });

      return NextResponse.json(
        {
          success: false,
          message: "SMTP is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const subject = inquiry
      ? `New Inquiry: ${inquiry}`
      : "New Contact Form Submission";

    const brand = {
      bg: "#f3f6f9",
      brand: "#0b1220",
      accent: "#0fa8a3",
      gold: "#b8873e",
      muted: "#6b7280",
      white: "#ffffff",
    };

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
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.brand}; font-weight:600;">${name}</td>
                </tr>
                ${organization ? `
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Organization</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.brand};">${organization}</td>
                </tr>` : ''}
                ${email ? `
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Email</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.brand};">${email}</td>
                </tr>` : ''}
                ${inquiry ? `
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Inquiry Type</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f3f4f6; font-size:13px; color:${brand.brand};">
                    <span style="display:inline-block; padding:2px 10px; border-radius:9999px; background-color:${brand.brand}; color:${brand.white}; font-size:12px; font-weight:600;">${inquiry}</span>
                  </td>
                </tr>` : ''}
                <tr>
                  <td style="padding:10px 0; font-size:13px; color:${brand.muted}; width:140px; vertical-align:top;">Message</td>
                  <td style="padding:10px 0; font-size:13px; color:${brand.brand}; white-space:pre-wrap;">${message}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:${brand.bg}; padding:16px 24px; text-align:center; border-top:1px solid #e5e7eb;">
              <p style="margin:0; font-size:12px; color:${brand.muted};">This message was sent from the Dr. Preethi Ramadoss website contact form.</p>
              <p style="margin:8px 0 0; font-size:12px; color:${brand.muted};">Received on ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const text = `
New contact form submission

Name: ${name}
Organization: ${organization || "N/A"}
Email: ${email}
Inquiry Type: ${inquiry || "N/A"}

Message:
${message}
`.trim();

    const info = await transporter.sendMail({
      from: `"Website Contact" <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}