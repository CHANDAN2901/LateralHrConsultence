import { useState, useEffect } from "react"

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState(1) // Default to second member (Rahul)
  const [showContent, setShowContent] = useState(true)

  const teamMembers = [
    {
      name: "Ananya Mehta",
      role: "Founder and Global Talent Specialist",
      quote: "Building global teams isn't just about filling positions — it's about understanding cultures, navigating complexities, and creating lasting partnerships that drive real business growth.",
      description: "With over 15 years of experience in international HR consulting, Ananya founded Lateral HR to bridge the gap between global companies and India's exceptional talent pool.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      name: "Rahul Verma",
      role: "Employer of Record (EOR) Specialist",
      quote: "When compliance, payroll, and contracts are handled correctly, companies can expand into new markets without fear or friction. My role is to ensure that every hire is compliant, transparent, and smooth — so global teams can focus on growth instead of regulations.",
      description: "Specializes in setting up compliant employment structures, managing contracts, and ensuring smooth onboarding for global companies hiring in India.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Sarah Collins",
      role: "Head of Client Relations",
      quote: "Every client has unique needs and challenges. My job is to listen, understand, and deliver solutions that exceed expectations while building relationships that last.",
      description: "Sarah leads our client success initiatives, ensuring seamless communication and satisfaction across all engagements with a focus on long-term partnerships.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
    },
    {
      name: "Kunal Shah",
      role: "Lead Talent Acquisition Specialist",
      quote: "The right talent can transform a company. I'm passionate about connecting exceptional professionals with opportunities that match their skills and aspirations.",
      description: "Kunal brings expertise in identifying and attracting top-tier talent across technology, finance, and leadership roles for international clients expanding in India.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    }
  ]

  const handleMemberHover = (index) => {
    if (index !== hoveredMember) {
      setShowContent(false)
      setHoveredMember(index)
      // Delay showing content until card has expanded
      setTimeout(() => {
        setShowContent(true)
      }, 300)
    }
  }

  return (
    <section id="team" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Meet the People Behind Global Hiring
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            A team of HR, compliance, and talent experts enabling seamless cross-border employment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch h-[500px]">
          {teamMembers.map((member, index) => {
            const isSelected = hoveredMember === index
            
            return (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ease-in-out overflow-hidden rounded-2xl h-full ${
                  isSelected 
                    ? 'lg:flex-[2] flex flex-col lg:flex-row' 
                    : 'lg:flex-[0.8] hover:lg:flex-[0.9]'
                }`}
                onMouseEnter={() => handleMemberHover(index)}
              >
                {/* Image Container */}
                <div 
                  className={`relative overflow-hidden transition-all duration-500 rounded-2xl h-full ${
                    isSelected 
                      ? 'lg:w-[280px] flex-shrink-0 lg:rounded-r-none' 
                      : 'w-full'
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover object-top transition-all duration-500 ${
                      isSelected ? '' : 'grayscale hover:grayscale-[50%]'
                    }`}
                  />
                  
                  {/* Name overlay for non-selected members */}
                  {!isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
                      <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                    </div>
                  )}
                </div>

                {/* Expanded Content for Selected Member */}
                {isSelected && (
                  <div className="bg-neutral-900 text-white p-6 lg:p-8 flex flex-col justify-center lg:flex-1 rounded-2xl lg:rounded-l-none overflow-hidden">
                    <div className={`transition-all duration-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <blockquote className="text-base lg:text-lg leading-relaxed mb-6 line-clamp-6">
                        "{member.quote}"
                      </blockquote>
                      <div>
                        <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                        <p className="text-gray-300 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Description below for selected member */}
        <div className="mt-8 max-w-3xl">
          <h4 className="font-semibold text-lg mb-2">{teamMembers[hoveredMember].role}</h4>
          <p className="text-gray-600 leading-relaxed">
            {teamMembers[hoveredMember].description}
          </p>
        </div>
      </div>
    </section>
  )
}
