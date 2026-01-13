export default function GlobalReach() {
  const countries = [
    { name: "United States", flag: "/US.png" },
    { name: "United Kingdom", flag: "/UK.png" },
    { name: "Singapore", flag: "/singapore.png" },
    { name: "Vietnam", flag: "/vietnam.png" },
    { name: "Australia", flag: "/AUS.png" },
    { name: "Thailand", flag: "/Thai.png" },
    { name: "New Zealand", flag: "/NZ.png" },
    { name: "Malaysia", flag: "/malaysia.png" },
  ]

  return (
    <section className="py-20 md:py-32 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/shadedBg.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left side - Title and description */}
          <div className="lg:max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Global Reach, Local<br />Expertise
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We've successfully hired and placed local talent across multiple countries, ensuring compliance and cultural fit.
            </p>
          </div>

          {/* Right side - Country flags grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-white">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
