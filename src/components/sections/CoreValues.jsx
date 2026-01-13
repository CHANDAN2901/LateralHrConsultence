import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Target } from "lucide-react"

export default function CoreValues() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering exceptional service and results in every engagement with our clients and partners."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and ethical conduct in all our business dealings and client relationships."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace new ideas and continuously evolve our approaches to help you stay ahead in the dynamic global marketplace."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-primary-900 border-primary-800 text-white">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary-800 flex items-center justify-center">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
