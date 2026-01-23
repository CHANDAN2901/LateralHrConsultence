import { useState, useEffect } from "react"

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState(0) // Default to first member (Chirag)
  const [showContent, setShowContent] = useState(true)

  const teamMembers = [
    {
      name: "Chirag Thakker",
      role: "Founder",
      quote: "Enabling global organizations to enter and scale in India through compliant Employer of Record (EOR) solutions, ensuring seamless hiring, payroll, statutory compliance, and risk mitigation without the need for a local entity.",
      description: "Chirag Thakker is the Founder of Lateral HR Consulting, bringing over 15 years of experience in Talent Acquisition and HR leadership across multiple industries and international markets. In parallel, Chirag works closely with family offices and angel investors to deploy capital into early-stage companies and leads strategic initiatives such as The Pitch Den, a curated founder–investor platform.",
      image: "/teams/chirag.jpeg"
    },
    {
      name: "Dhanashree Paste",
      role: "Chief of Staff",
      quote: "Facilitating client requirements, strengthening talent pipelines, and ensuring seamless workforce deployment for international companies expanding into India.",
      description: "Dhanashree Paste is the Chief of Staff at Lateral HR Consulting, working closely with the Founder to drive strategic execution, operational alignment, and delivery excellence across Employer of Record (EOR) engagements. With a background in building industry-academia connections and verified talent ecosystems through her work with GrindUp, Dhanashree brings a strong understanding of workforce readiness.",
      image: "/teams/dhanashree.jpg"
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

        {/* Team Grid - Scrollable on all screens */}
        <div className="flex flex-row gap-4 items-stretch h-[500px] lg:h-[500px] overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory lg:snap-none">
          {teamMembers.map((member, index) => {
            const isSelected = hoveredMember === index

            return (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ease-in-out overflow-hidden rounded-2xl h-full flex-shrink-0 lg:flex-shrink snap-center ${isSelected
                  ? 'w-[85vw] sm:w-[70vw] lg:w-auto lg:flex-[2] flex flex-col lg:flex-row'
                  : 'w-[45vw] sm:w-[35vw] lg:w-auto lg:flex-[0.8] hover:lg:flex-[0.9]'
                  }`}
                onClick={() => handleMemberHover(index)}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden transition-all duration-500 rounded-2xl h-full ${isSelected
                    ? 'lg:w-[280px] flex-shrink-0 lg:rounded-r-none'
                    : 'w-full'
                    }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover object-top transition-all duration-500 ${isSelected ? '' : 'grayscale hover:grayscale-[50%]'
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
                  <div className="hidden lg:flex bg-neutral-900 text-white p-6 lg:p-8 flex-col justify-center lg:flex-1 rounded-2xl lg:rounded-l-none overflow-hidden">
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
