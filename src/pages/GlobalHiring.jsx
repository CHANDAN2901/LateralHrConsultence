import { Link } from 'react-router-dom';

export default function GlobalHiring() {
  return (
    <div className="max-w-3xl mx-auto pt-32 pb-12 px-4">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">Global Hiring</h1>
      <h2 className="text-xl font-semibold mb-2">Build Teams Anywhere, Without Borders</h2>
      <p className="mb-4">Accessing global talent is no longer a challenge—finding the right talent is. Lateral HR’s Global Hiring services help companies source, evaluate, and hire high-quality talent from any geography.<br/>In this line of service, we focus on talent acquisition, enabling you to build global teams without compromising on quality, speed, or fit.</p>
      <h3 className="font-semibold mt-6 mb-2">How Global Hiring Works</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>You define the role, location, and hiring requirements</li>
        <li>Lateral HR sources and screens candidates globally</li>
        <li>We manage interviews, assessments, and coordination</li>
        <li>You hire the selected candidate</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">What Lateral HR Manages</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Global talent sourcing across multiple regions</li>
        <li>Candidate screening and shortlisting</li>
        <li>Interview coordination and candidate evaluation</li>
        <li>Salary benchmarking and market insights</li>
        <li>Offer negotiation support</li>
        <li>Hiring process coordination end-to-end</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">What You Manage</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Employment contracts and onboarding</li>
        <li>Payroll, taxes, and statutory compliance</li>
        <li>Work authorization and local labour law compliance</li>
        <li>Day-to-day management and performance</li>
      </ul>
      <p className="mb-4">These all transactions can also be taken care by EoR team.</p>
      <h3 className="font-semibold mt-6 mb-2">Who Is This Ideal For?</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Companies with existing legal entities in target countries</li>
        <li>Businesses hiring remote or international talent directly</li>
        <li>Startups and enterprises seeking specialized global skills</li>
        <li>Organizations wanting recruitment expertise without EoR</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">Why Lateral HR for Global Hiring</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>5+ years of global recruitment experience</li>
        <li>Strong international talent networks</li>
        <li>Market-aligned hiring insights</li>
        <li>Speed-focused and quality-driven execution</li>
        <li>Founder-led involvement on critical hires</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">Outcome</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Hire globally with confidence.</li>
        <li>Build strong teams on your payroll.</li>
        <li>Focus on growth while we deliver the right talent.</li>
      </ul>
    </div>
  );
}
