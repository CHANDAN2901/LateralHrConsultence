import { Link } from 'react-router-dom';

export default function HRStrategyPolicy() {
  return (
    <div className="max-w-3xl mx-auto pt-32 pb-12 px-4">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">HR Strategy & Policy Development</h1>
      <h2 className="text-xl font-semibold mb-2">Build Scalable, Compliant HR Foundations</h2>
      <p className="mb-4">As organizations grow, HR cannot remain transactional : it must be strategic, compliant, and scalable. Lateral HR’s HR Strategy & Policy Development services help companies design robust HR frameworks that support growth, performance, and compliance across geographies.<br/>We work closely with leadership to build HR systems that align people, processes, and business objectives.</p>
      <h3 className="font-semibold mt-6 mb-2">How We Work</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Understand your business model, growth stage, and workforce structure</li>
        <li>Assess existing HR processes and compliance readiness</li>
        <li>Design customized HR strategies and policies</li>
        <li>Support implementation and leadership alignment</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">What We Deliver</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>HR strategy aligned to business and growth plans</li>
        <li>Organization structure and role frameworks</li>
        <li>Employee policies and handbooks</li>
        <li>Performance management frameworks</li>
        <li>Compensation and benefits structuring</li>
        <li>Compliance-ready HR processes</li>
        <li>Hiring, onboarding, and exit policies</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">Who Is This Ideal For?</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Startups and scaleups building HR from scratch</li>
        <li>Companies formalizing HR as they grow</li>
        <li>Global companies setting up India HR frameworks</li>
        <li>Organizations preparing for audits, funding, or scale</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">Why Lateral HR</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>15+ years of hands-on HR leadership experience</li>
        <li>Deep understanding of Indian labour compliance</li>
        <li>Practical, business-first HR design (not theory-heavy)</li>
        <li>Founder-led execution and strategic involvement</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">Outcome</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Clear HR structure.</li>
        <li>Stronger compliance.</li>
        <li>People systems that scale with your business.</li>
      </ul>
    </div>
  );
}
