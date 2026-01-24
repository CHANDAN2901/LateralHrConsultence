import { Link } from 'react-router-dom';

export default function EoRServices() {
  return (
    <div className="max-w-3xl mx-auto pt-32 pb-12 px-4">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">EoR Services</h1>
      <h2 className="text-xl font-semibold mb-2">Employer of Record (EoR) – India Expansion Made Simple</h2>
      <p className="mb-4">Expanding into India offers access to world-class talent, but navigating local employment laws, payroll regulations, and compliance can be complex. Lateral HR’s Employer of Record (EoR) services enable global companies to hire, manage, and scale teams in India—without setting up a local legal entity.<br/>We act as the legal employer in India, while you retain full control over your employees’ roles, performance, and day-to-day operations.</p>
      <h3 className="font-semibold mt-6 mb-2">How Our EoR Model Works</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>We identify and manage the talent (if you have identified the talent then share it to us)</li>
        <li>Lateral HR becomes the legal employer in India</li>
        <li>Employees work exclusively for your company</li>
        <li>We handle all compliance, payroll, and HR administration</li>
      </ul>
      <p className="mb-4">This ensures speed, compliance, and zero regulatory exposure.</p>
      <h3 className="font-semibold mt-6 mb-2">What Lateral HR Manages</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Employment contracts compliant with Indian labour laws</li>
        <li>Payroll processing and salary disbursements</li>
        <li>Statutory compliances (PF, ESI, Professional Tax, TDS, Gratuity, Leave)</li>
        <li>Onboarding, documentation, and exits</li>
        <li>HR administration and employee lifecycle management</li>
        <li>Compliance monitoring and regulatory risk mitigation</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">What You Control</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Role definition and hiring decisions</li>
        <li>Day-to-day management and reporting</li>
        <li>Performance management and KPIs</li>
        <li>Work schedules and deliverables</li>
        <li>Culture, tools, and internal processes</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">Who Is This Ideal For?</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>International companies hiring their first employee in India</li>
        <li>Businesses testing the Indian market before entity setup</li>
        <li>Startups and scaleups building distributed teams</li>
        <li>Enterprises expanding India operations quickly and compliantly</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">Why Choose Lateral HR</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>15+ years of HR and talent leadership experience</li>
        <li>Proven execution with international clients</li>
        <li>Deep understanding of Indian labour compliance</li>
        <li>Fast onboarding and scalable hiring support</li>
        <li>Enterprise-grade processes with founder-led accountability</li>
      </ul>
      <h3 className="font-semibold mt-6 mb-2">Outcome</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Hire in India within weeks—not months.</li>
        <li>Stay compliant without complexity.</li>
        <li>Focus on growth while we manage employment risk.</li>
      </ul>
    </div>
  );
}
