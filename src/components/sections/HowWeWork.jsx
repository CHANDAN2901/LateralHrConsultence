export default function HowWeWork() {
  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "We understand your specific needs, business goals, and hiring requirements through a detailed consultation."
    },
    {
      number: "2",
      title: "Customized Solution",
      description: "We design a tailored approach based on your requirements, whether it's EOR, global hiring, or HR strategy."
    },
    {
      number: "3",
      title: "Execution & Support",
      description: "Our team handles all aspects of implementation, from paperwork to payroll, keeping you informed at every step."
    },
    {
      number: "4",
      title: "Ongoing Management",
      description: "We provide continuous support, ensuring compliance and addressing any needs as your team grows."
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12">
          How We Work
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Image taking 1/3 space */}
          <div className="flex-shrink-0 lg:w-1/3">
            <div className="w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
              <img
                src="/section3Image.jpg"
                alt="Professional team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content taking 2/3 space */}
          <div className="flex-grow lg:w-2/3">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xl font-bold text-black">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2 text-xl">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
