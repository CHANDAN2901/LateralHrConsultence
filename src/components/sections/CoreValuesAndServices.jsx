import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CoreValuesAndServices() {
  const values = [
    {
      iconPath: "/integrity.png",
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings"
    },
    {
      iconPath: "/excellence.png",
      title: "Excellence",
      description: "We strive for the highest standards in service delivery and client satisfaction"
    },
    {
      iconPath: "/partnershiip.png",
      title: "Partnership",
      description: "We believe in building long-term relationships based on mutual success"
    }
  ]

  const services = [
    {
      iconPath: "/EOR.png",
      title: "Employer of Record – EOR",
      description: "Hire talent in India without a local entity. We manage compliance, payroll onboarding and exit"
    },
    {
      iconPath: "/Global.png",
      title: "Global Hiring",
      description: "Hire in India and hire from anywhere without any hassle. We handle hiring, compliance, contracts, and payroll."
    },
    {
      iconPath: "/hrStrategy.png",
      title: "HR Strategy & Policy Development",
      description: "Build frameworks and policies that grow with your business."
    }
  ]

  return (
    <section
      id="services"
      className="py-20 md:py-32 relative text-white"
      style={{
        backgroundImage: `url('/coreValueBg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/80"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Values Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-transparent border-white/30 text-white backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <img src={value.iconPath} alt={value.title} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-300 text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Services Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-5xl font-bold mb-2">
                Our Core Services
              </h2>
              <p className="text-gray-300 text-lg">
                Comprehensive HR solutions for global hiring and workforce management
              </p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-[182px] h-12 px-6 pl-6 pr-1 py-3 text-base flex items-center justify-between gap-2.5">
              Contact Us
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
            </Button>
          </div>

          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white text-black hover:shadow-lg transition-shadow ">
                <CardContent className="p-4 flex items-center gap-6 h-full">
                  <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-gray-200 flex items-center justify-center p-4">
                    <img src={service.iconPath} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-4xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-800 text-[18px] leading-snug">{service.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="ghost" className="p-0 h-auto text-black hover:bg-transparent">
                      <span className="text-base font-semibold mr-3">Learn more</span>
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black">
                        <ArrowRight className="h-6 w-6 text-white" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
