"use client"

import React from "react"
import Button from "../ui/Button"
import heroImage from "../../app/assets/profile/hero.jpeg"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card"

export default function Hero() {
  return (
    <section className="relative rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center">
      {/* Content */}
      <div className="relative z-10 py-12 md:py-20 px-6 lg:px-12 md:w-1/2">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary">
            Dr. Preethi Ramadoss, PhD
          </h1>

          <p className="mt-3 text-xl text-slate-700">
            Scientist. Inventor. R&D Consultant.
          </p>

          <p className="mt-6 text-lg text-slate-600">
            <b>14+ years</b> experience in helping organizations develop, evaluate and advance sustainable
            biomaterials, wearable biosensors and next-generation healthcare
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#expertise" variant="primary">
              Explore My Expertise
            </Button>

            <Button href="/collaborate" variant="outline">
              Collaborate on R&D
            </Button>

            <Button href="/innovations" variant="outline">
              Explore Patented Technologies
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Image Card */}
      <div className="md:w-1/2 p-4 md:p-8">
        <Card className="overflow-hidden p-0">
          <CardHeader className="p-6">
            <CardTitle className="sr-only">Dr. Preethi Ramadoss</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <img
              src={heroImage.src}
              alt="Dr. Preethi Ramadoss"
              className="w-full h-auto object-cover"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </CardContent>
          <CardFooter className="flex-col items-start gap-1 p-6 pt-0">
            <p className="font-semibold text-primary">Dr. Preethi Ramadoss</p>
            <p className="text-sm text-slate-500">Scientist. Inventor. R&D Consultant.</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
