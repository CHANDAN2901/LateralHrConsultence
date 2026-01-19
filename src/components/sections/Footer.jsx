import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      {/* CTA Section */}
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Left side - Content */}
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Ready to Build Your<br />Global Team?
              </h2>
              <p className="text-gray-400 text-base">
                Let's discuss how we can help you hire, manage, and grow your international workforce.
              </p>
            </div>

            {/* Right side - Button */}
            <div>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-black rounded-full w-[260px] h-12 pl-6 pr-1 text-base font-medium flex items-center justify-between"
              >
                Partner with us Today
                <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left side - Logo and description */}
          <div className="lg:max-w-xl">
            {/* Logos */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/headerLogo.jpg"
                alt="Lateral HR Consulting"
                className="h-12 object-contain"
              />
              <a
                href="https://www.refrens.com/free-online-invoicing-software"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/refrenLogo.jpg"
                  alt="Powered by Refrens"
                  className="h-12 object-contain"
                />
              </a>
            </div>

            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              We enable global companies to hire, employ, and manage teams in India without setting up a local entity. We handle payroll, labour law compliance, contracts, statutory benefits, and employee exits end to end.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Links */}
          <div className="flex gap-20 lg:gap-32">
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#services" className="hover:text-black transition-colors">Our Services</a></li>
                <li><a href="#services" className="hover:text-black transition-colors">EOR Services</a></li>
                <li><a href="#home" className="hover:text-black transition-colors">Global Hiring</a></li>
                <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms of services</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © Copyright Lateral HR. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
