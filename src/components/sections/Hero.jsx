import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          {/* Left side - Image with fixed dimensions */}
          <div className="order-2 lg:order-1 flex-shrink-0">
            <div className="w-full lg:w-[600px] h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
              <img
                src="/section1Image.jpg"
                alt="Professional working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content with Background taking remaining space */}
          <div className="order-1 lg:order-2 flex-grow flex items-stretch">
            <div
              className="relative text-white p-8 md:p-12 lg:p-16 rounded-3xl w-full overflow-hidden bg-black"
            >
              {/* Background pattern image */}
              <div className="absolute inset-0">
                <img 
                  src="/heroSectionBg.png" 
                  alt="" 
                  className="w-full h-full object-cover opacity-50"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-bold mb-6">
                  From India to the World, We Build Global Teams
                </h1>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-xl">
                  Simplify international hiring with our Employer of Record (EOR), Global Hiring,
                  and HR Strategy services. We make cross-border employment legal, easy, and
                  efficient.
                </p>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-[182px] h-12 px-6 pl-6 pr-1 py-3 text-base font-semibold flex items-center justify-between gap-2.5">
                  Consult Now
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
                    <Briefcase className="h-5 w-5 text-white" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
