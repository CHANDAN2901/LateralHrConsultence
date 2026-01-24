import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
            Let's Build Your<br />Global Team.
          </h2>
          <p className="text-gray-600 text-lg max-w-xs">
            Submit your details and one of our experts will be in touch.
          </p>
        </div>

        {/* Main Content - Map and Form */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left side - Map */}
          <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.712890990706!2d72.99711!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c104514a4e2d%3A0x4f05c2e33a7c8c37!2sVashi%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Get in touch with us</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-blue-50/50 border-0 h-12 rounded-lg placeholder:text-gray-500"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-blue-50/50 border-0 h-12 rounded-lg placeholder:text-gray-500"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-blue-50/50 border-0 h-12 rounded-lg placeholder:text-gray-500"
                />
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      className="h-12 bg-blue-50/50 border-0 rounded-lg pl-3 pr-8 text-gray-900 appearance-none focus:ring-0 cursor-pointer min-w-[80px]"
                      defaultValue="+91"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸/🇨🇦 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+852">🇭🇰 +852</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+31">🇳🇱 +31</option>
                      <option value="+46">🇸🇪 +46</option>
                      <option value="+41">🇨🇭 +41</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+974">🇶🇦 +974</option>
                      <option value="+968">🇴🇲 +968</option>
                      <option value="+965">🇰🇼 +965</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+27">🇿🇦 +27</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <Input
                    type="tel"
                    placeholder="Contact number"
                    className="bg-blue-50/50 border-0 h-12 rounded-lg placeholder:text-gray-500 flex-1"
                  />
                </div>
              </div>

              <Input
                placeholder="Location"
                className="bg-blue-50/50 border-0 h-12 rounded-lg placeholder:text-gray-500"
              />

              <Textarea
                placeholder="Give a little brief about your requirement"
                rows={5}
                className="bg-blue-50/50 border-0 rounded-lg placeholder:text-gray-500 resize-none"
              />

              <Button className="bg-white hover:bg-gray-100 text-black border border-gray-300 rounded-full w-[150px] h-12 pl-6 pr-1 text-base flex items-center justify-between">
                Submit
                <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location India */}
          <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="font-semibold text-sm leading-relaxed">
                Vashi, Navi Mumbai,<br />Maharashtra 400703
              </p>
            </div>
          </div>

          {/* Location USA */}
          <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="font-semibold text-sm leading-relaxed">
                USA - 30 N Gould St.,<br />Ste. 4000, Sheridan
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-black rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <p className="font-semibold text-sm text-white">
                chirag@lateralhr.in
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Contact</p>
              <p className="font-semibold text-sm">+91 9967782367</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
