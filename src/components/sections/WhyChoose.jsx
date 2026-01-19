import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhyChoose() {
  const reasons = [
    {
      title: "Legally Compliant Hiring",
      description: "Full compliance with Indian and international labour"
    },
    {
      title: "Cross-Border Expertise",
      description: "Specialized knowledge in global HR operations"
    },
    {
      title: "End-to-End Solutions",
      description: "From recruiting to onboarding to payroll management"
    },
    {
      title: "Personalized Approach",
      description: "Tailored consulting for your specific needs"
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left side - Content taking 1/2 space */}
          <div className="flex-grow lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-8 text-center lg:text-left">
              Why Choose Lateral HR?
            </h2>
            <div className="space-y-6 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <Check className="h-5 w-5 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-xl">{reason.title}</h3>
                    <p className="text-gray-600 text-base">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Button className="bg-transparent text-black border-2 border-black hover:bg-gray-50 rounded-full w-[240px] h-12 px-6 pl-6 pr-1 py-3 text-base font-semibold flex items-center justify-between gap-2.5">
                Learn more about us
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right side - Image taking 1/2 space */}
          <div className="flex-shrink-0 lg:w-1/2">
            <div className="w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
              <img
                src="/section2Image.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
