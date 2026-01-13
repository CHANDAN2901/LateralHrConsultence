import { Button } from "@/components/ui/button"
import { Menu, ArrowRight } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/headerLogo.jpg" alt="Lateral HR Consulting" className="h-10 sm:h-12" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a href="#home" className="text-base font-medium hover:text-gray-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-base font-medium hover:text-gray-600 transition-colors">
                About Us
              </a>
              <a href="#services" className="text-base font-medium hover:text-gray-600 transition-colors">
                Our Services
              </a>
              <a href="#team" className="text-base font-medium hover:text-gray-600 transition-colors">
                Our Team
              </a>
              <a href="#reviews" className="text-base font-medium hover:text-gray-600 transition-colors">
                Reviews
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-black hover:bg-gray-900 text-white rounded-full w-[182px] h-12 px-6 pl-6 pr-1 py-3 text-base flex items-center justify-between gap-2.5">
                Contact Us
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white">
                  <ArrowRight className="h-5 w-5 text-black" />
                </span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
