import { useState } from "react"
import { Plus } from "lucide-react"

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const faqs = [
    {
      question: "What is an Employer of Record (EOR)?",
      answer: "Employer of Record (EOR) services enable international companies to legally hire and manage employees in India without setting up a local entity. The EOR acts as the official employer, handling compliance, payroll, taxes, contracts, and statutory benefits. This allows companies to focus on business expansion while ensuring risk-free and compliant workforce management."
    },
    {
      question: "Do employees work for Lateral HR or for us?",
      answer: "Employees work exclusively for you on a day-to-day basis and are fully integrated into your team, reporting to your managers and following your processes. Lateral HR acts only as the legal Employer of Record in India, handling employment contracts, payroll, statutory compliance, and HR administration, while you retain complete operational control."
    },
    {
      question: "Why do I need an EOR to hire in India?",
      answer: "Hiring in India requires compliance with multiple labour laws, payroll regulations, tax filings, and statutory benefits. An Employer of Record (EOR) enables you to hire legally and compliantly without setting up an Indian entity, reducing regulatory risk, cost, and time. It allows you to enter the Indian market quickly while we manage all employment, payroll, and compliance responsibilities on your behalf."
    },
    {
      question: "Can we control employee roles, performance, and working hours?",
      answer: "Yes. You retain 100% operational control over job roles, KPIs, working hours, and performance management. The EOR does not interfere in daily operations."
    },
    {
      question: "Is our IP and confidentiality protected?",
      answer: "Yes. Employees sign confidentiality and IP protection clauses aligned with your business requirements, ensuring your data and intellectual property remain secure."
    },
    {
      question: "What responsibilities does Lateral HR handle as an EOR?",
      answer: "Lateral HR manages employment contracts, payroll processing, tax deductions, statutory benefits, labour law compliance, employee onboarding, exits, and HR administration."
    },
    {
      question: "Can we hire full-time employees and contractors through EOR?",
      answer: "Yes. We support full-time employees and contractual hires, ensuring the correct employment structure based on compliance and business requirements."
    },
    {
      question: "Is EOR suitable for long-term hiring or only short-term expansion?",
      answer: "EOR works well for both short-term market testing and long-term team expansion. Many companies use EOR as a stepping stone before setting up a local entity."
    },
    {
      question: "What happens if we later set up our own legal entity in India?",
      answer: "Employees can be smoothly transitioned from the EOR structure to your own Indian entity with minimal disruption and full compliance."
    },
    {
      question: "How quickly can we hire through EOR?",
      answer: "Typically 7–14 days, depending on role complexity and documentation readiness and speed of client's feedback."
    }
  ]

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5)

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <>
      {/* FAQ Section */}
      <section id="reviews" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col ${showAll ? 'gap-8' : 'lg:flex-row gap-10'} items-start`}>
            {/* Left side - Content */}
            <div className={`flex-1 ${showAll ? 'w-full' : 'lg:max-w-1/2'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-base mb-8">
                Common questions about our services
              </p>

              {/* Custom Accordion */}
              <div className={showAll ? "grid md:grid-cols-2 gap-4" : "space-y-3"}>
                {displayedFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-sm md:text-base pr-4">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openItem === index ? 'rotate-45' : ''}`}>
                        <Plus className="w-4 h-4 text-white" />
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <p className="px-4 pb-4 text-gray-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              {faqs.length > 5 && (
                <div className="mt-8">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-black font-semibold hover:text-gray-600 transition-colors flex items-center gap-2"
                  >
                    {showAll ? "Show Less Questions" : "View All Questions"}
                    <Plus className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-45' : ''}`} />
                  </button>
                </div>
              )}
            </div>

            {/* Right side - Image */}
            <div className="flex-1 w-full lg:w-auto sticky top-24 self-start">
              <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
                <img
                  src="/section4Image.jpg"
                  alt="FAQ support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
