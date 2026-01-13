import { useState } from "react"
import { Plus } from "lucide-react"

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null)

  const faqs = [
    {
      question: "Do employees work directly for us?",
      answer: "Yes, when using our EOR services, employees are legally employed by us but work exclusively for your company. We handle all employment compliance, payroll, and benefits administration."
    },
    {
      question: "How do we ensure compliance?",
      answer: "We have legal experts and local partnerships in every country we operate in. We stay updated with local labor laws, tax regulations, and employment standards to ensure full compliance."
    },
    {
      question: "What is the typical timeline for hiring through your services?",
      answer: "The timeline varies based on role complexity and location. Typically, we can source qualified candidates within 2-4 weeks and complete the entire hiring process within 6-8 weeks."
    },
    {
      question: "Can you help with both local and international hiring?",
      answer: "Absolutely! We specialize in both local hiring within your country and international hiring across borders. Our global network allows us to find the best talent wherever they are."
    }
  ]

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <>
      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left side - Content */}
            <div className="flex-1 lg:max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-base mb-8">
                Common questions about our services
              </p>

              {/* Custom Accordion */}
              <div className="space-y-3">
                {faqs.map((faq, index) => (
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
                      className={`overflow-hidden transition-all duration-300 ${
                        openItem === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="px-4 pb-4 text-gray-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 w-full lg:w-auto">
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
