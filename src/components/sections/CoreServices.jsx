import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Globe, Briefcase, ArrowRight } from "lucide-react"

export default function CoreServices() {
  const services = [
    {
      icon: FileText,
      title: "Employer of Record - EOR",
      description: "We take on the administrative burdens of hiring. We manage compliance, payroll, and benefits so you can focus on growing your business."
    },
    {
      icon: Globe,
      title: "Global Hiring",
      description: "Expand your team globally without setting up local entities. We handle hiring across borders, making global expansion seamless and hassle-free."
    },
    {
      icon: Briefcase,
      title: "HR Strategy & Policy Development",
      description: "Build strong HR frameworks with our expert guidance. We help develop policies and strategies aligned with your business goals."
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Our Core Services
            </h2>
            <p className="text-gray-600">
              Comprehensive HR solutions for global hiring and workforce management.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-full w-[182px] h-12 px-6 pl-6 pr-1 py-3 text-base items-center justify-between gap-2.5">
            View All
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
              <ArrowRight className="h-5 w-5 text-white" />
            </span>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-primary-900" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="link" className="p-0 h-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
