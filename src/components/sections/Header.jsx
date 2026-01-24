import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, ArrowRight, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Our Services", href: "/#services" },
    { name: "Our Team", href: "/#team" },
    { name: "Reviews", href: "/#reviews" },
  ]

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg px-4 sm:px-6 relative">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/headerLogo.jpg" alt="Lateral HR Consulting" className="h-10 sm:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium hover:text-gray-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/#contact">
                <Button className="bg-black hover:bg-gray-900 text-white rounded-full w-[182px] h-12 px-6 pl-6 pr-1 py-3 text-base flex items-center justify-between gap-2.5">
                  Contact Us
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="pt-2 border-t border-gray-100">
                <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-black hover:bg-gray-900 text-white rounded-full h-12 text-base flex items-center justify-center gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
