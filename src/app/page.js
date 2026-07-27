"use client";

import { useState } from "react";

/* =========================================================================
   ICONS — Inline SVG line icons
   ========================================================================= */

const iconBase = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function GlobeIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
    </svg>
  );
}
function BookIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5v-13Z" />
    </svg>
  );
}
function BuildingIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-4h4v4" />
    </svg>
  );
}
function NetworkIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M12 7.2 6.3 16M12 7.2 17.7 16M7.2 18h9.6" />
    </svg>
  );
}
function MedalIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <circle cx="12" cy="14" r="6" />
      <path d="M9 8.5 6 3M15 8.5l3-5.5M9.5 13.7l1.7 1.8 3.3-3.6" />
    </svg>
  );
}
function TeacherIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 10.8v4.4c0 1.6 2.2 3.3 5 3.3s5-1.7 5-3.3v-4.4" />
    </svg>
  );
}
function ScaleIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M12 3v18M7 6h10M4 10l3-4 3 4-3 3-3-3ZM17 10l3-4 3 4-3 3-3-3Z" />
      <path d="M6 21h12" />
    </svg>
  );
}
function HandshakeIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M2 12l4-4 4 3 3-3 4 4-3 3-4-3-3 3-1-1" />
      <path d="M13 14l3 3 4-4-2-2" />
    </svg>
  );
}
function LandmarkIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M4 10 12 4l8 6M4 10h16M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18" />
    </svg>
  );
}
function CuisineIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M7 3v6a2 2 0 0 0 4 0V3M9 9v12M17 3c-1.5 0-2.5 1.6-2.5 4s1 4 2.5 7v7" />
    </svg>
  );
}
function FriendsIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="16" cy="9" r="2" />
      <path d="M4 19v-1.2A3.8 3.8 0 0 1 7.8 14h2.4A3.8 3.8 0 0 1 14 17.8V19M14.5 19v-.9a3.2 3.2 0 0 1 2.6-3.1c1.9-.4 3.9.6 4.4 2.5" />
    </svg>
  );
}
function CertificateIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1.2" />
      <path d="M7 8h10M7 11h6" />
      <path d="M9 16v4l3-1.5L15 20v-4" />
    </svg>
  );
}
function SiteVisitIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6M4 21h16" />
    </svg>
  );
}
function CrossCultureIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
    </svg>
  );
}
function CheckIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
      <path
        d="M4.5 8.2 6.8 10.5 11.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PhoneIcon(props) {
  return (
    <svg {...iconBase} width="18" height="18" {...props}>
      <path d="M5 4h3l1.5 4-2 1.3a10 10 0 0 0 4.7 4.7L13.6 12l4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 4 6.6 1.5 1.5 0 0 1 5 4Z" />
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg {...iconBase} width="18" height="18" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}
function WebIcon(props) {
  return (
    <svg {...iconBase} width="18" height="18" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
    </svg>
  );
}

/* =========================================================================
   CONTENT DATA
   ========================================================================= */

const heroFeatures = [
  { icon: GlobeIcon, label: "Global Exposure" },
  { icon: BookIcon, label: "World-Class Learning" },
  { icon: BuildingIcon, label: "Industry Experience" },
  { icon: NetworkIcon, label: "Global Network" },
];

const aboutStats = [
  { icon: TeacherIcon, number: "150+", label: "Faculty & Researchers" },
  { icon: GlobeIcon, number: "60+", label: "Countries Represented" },
  { icon: MedalIcon, number: "80+", label: "Years of Excellence" },
];

const campusPoints = [
  { icon: BuildingIcon, label: "World-Class Campus" },
  { icon: BookIcon, label: "Modern Learning Facilities" },
  { icon: FriendsIcon, label: "Vibrant Student Life" },
];

const campusImages = [
  {
    src: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=600&q=80",
    alt: "Street view in Milan",
  },
  {
    src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80",
    alt: "Modern campus interior",
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    alt: "Milan skyline sunset",
  },
];

const curriculumItems = [
  "Global Real Estate Markets & Trends",
  "Real Estate Finance & Investment",
  "Development & Project Management",
  "Sustainability & Green Building",
  "Smart Cities & Urban Development",
  "Real Estate Law, Policy & Regulations",
  "Innovation, Technology & PropTech",
  "Leadership & Strategic Decision Making",
];

const visitImages = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    alt: "High rise modern corporate tower",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
    alt: "Green terrace residential architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    alt: "Modern commercial interior site visit",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=400&q=80",
    alt: "Contemporary mixed-use urban layout",
  },
];

const studentLifePoints = [
  { icon: GlobeIcon, label: "Cultural Immersion" },
  { icon: LandmarkIcon, label: "Historical Landmarks" },
  { icon: CuisineIcon, label: "Italian Cuisine Experience" },
  { icon: FriendsIcon, label: "Global Friendships & Networking" },
];

const studentLifeImages = [
  {
    src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=400&q=80",
    alt: "Italian canal streetscape",
  },
  {
    src: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&w=400&q=80",
    alt: "Historic ornate architecture interior",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80",
    alt: "Authentic Italian dining",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80",
    alt: "Group of international students",
  },
];

const highlights = [
  {
    icon: CertificateIcon,
    title: "International Certification",
    text: "from POLIMI Graduate School of Management",
  },
  {
    icon: TeacherIcon,
    title: "Classroom Learning",
    text: "by Renowned International Faculty",
  },
  {
    icon: GlobeIcon,
    title: "Global Perspectives",
    text: "on Real Estate Development, Investment, Finance, Sustainability & Innovation",
  },
  {
    icon: SiteVisitIcon,
    title: "Industry & Site Visits",
    text: "to Landmark Real Estate Developments and Infrastructure Projects",
  },
  {
    icon: NetworkIcon,
    title: "Networking Opportunities",
    text: "with Global Professionals and Participants",
  },
  {
    icon: ScaleIcon,
    title: "Exposure to European",
    text: "Real Estate Practices, Regulations & Emerging Trends",
  },
  {
    icon: CrossCultureIcon,
    title: "Cross-cultural Learning",
    text: "and Leadership Development",
  },
  {
    icon: HandshakeIcon,
    title: "Build International",
    text: "Collaborations and Business Relationships",
  },
];

const faqs = [
  "Who can apply for this program?",
  "What is the duration of the program?",
  "What does the program fee include?",
  "Will accommodation be provided?",
  "Is prior international experience required?",
];

const processSteps = [
  "Submit Application",
  "Screening & Shortlisting",
  "Confirmation & Payment",
  "Pre-Departure Guidance",
  "Global Immersion Experience",
];

const companyLinks = ["About", "Courses", "Mentors", "Registration", "Privacy Policy", "INSPIRE"];
const quickLinks = [
  "Contact Us",
  "Gallery",
  "News",
  "FAQ's",
  "Terms and Conditions",
  "Customer Review",
  "Employee Review",
];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/* =========================================================================
   PAGE COMPONENT
   ========================================================================= */

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    batch: "Dec'26",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your enquiry for ${formData.batch} batch has been received.`);
    setFormData({ name: "", phone: "", email: "", batch: "Dec'26" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="page-wrapper">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <header className="hero">
        <div className="hero-overlay" />
        <div className="container hero-container">
          {/* Left Content */}
          <div className="hero-left-content">
            <p className="hero-kicker">
              IREED Campus Immersion
              <br />
              Program at Association with
            </p>

            {/* Brand Logo Row */}
            <div className="hero-brand-row">
              <img
                src="/polomi-logo.png"
                alt="POLIMI Graduate School of Management"
                className="hero-logo-img"
              />
            </div>

            <h1 className="hero-headline">Building Global Real Estate Leaders</h1>

            <p className="hero-sub">
              An exclusive international learning experience for students, professionals, and real
              estate associations to gain global exposure, international best practices, and
              industry insights in Milan, Italy.
            </p>

            <ul className="hero-features">
              {heroFeatures.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon className="hero-feature-icon" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Compact Form Card */}
          <div className="hero-form-card">
            <h3>Apply Now</h3>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="hero-name">Name</label>
                <input
                  type="text"
                  id="hero-name"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hero-phone">Phone</label>
                <input
                  type="tel"
                  id="hero-phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hero-email">Email</label>
                <input
                  type="email"
                  id="hero-email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hero-batch">Interested for</label>
                <select
                  id="hero-batch"
                  name="batch"
                  value={formData.batch}
                  onChange={handleFormChange}
                  required
                >
                  <option value="Dec'26">Dec &rsquo;26</option>
                  <option value="Apr'27">Apr &rsquo;27</option>
                </select>
              </div>

              <button type="submit" className="hero-submit-btn">
                Enquire
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* ---------------- SECTION 2: ABOUT ---------------- */}
      <section className="section about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">
              POLIMI Graduate School
              <br />
              of Management
            </h2>
            <p className="about-copy">
              POLIMI Graduate School of Management is the management school of Politecnico di
              Milano, one of Europe&rsquo;s top technical universities. It is internationally
              recognized for its academic excellence, innovation, and strong connection with
              industry and research.
            </p>

            {/* Stats in Single Horizontal Line */}
            <ul className="about-stats">
              {aboutStats.map(({ icon: Icon, number, label }) => (
                <li key={label}>
                  <span className="about-stat-icon">
                    <Icon width={22} height={22} />
                  </span>
                  <div>
                    <strong>{number}</strong>
                    <span>{label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
              alt="POLIMI campus modern facility"
            />
          </div>
        </div>
      </section>

      {/* ---------------- CAMPUS EXPERIENCE ---------------- */}
      <section className="section-tight campus">
        <div className="container">
          <p className="eyebrow">Location</p>
          <h2 className="section-title">Campus Experience at Milan</h2>
          <p className="section-lead">
            Learn in the heart of Milan &mdash; a global center for design, innovation, business
            and culture.
          </p>

          <div className="campus-image-row">
            {campusImages.map((img) => (
              <div key={img.src} className="campus-image-card">
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>

          <ul className="campus-points">
            {campusPoints.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon className="campus-point-icon" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- CURRICULUM & SITE VISITS ---------------- */}
      <section className="section">
        <div className="container curriculum-grid">
          <div>
            <h2 className="section-title">Program Curriculum &amp; Industry Visits</h2>
            <p className="section-lead">
              A specially curated academic and industry integrated program covering key areas:
            </p>

            <ul className="curriculum-checklist">
              {curriculumItems.map((item) => (
                <li key={item}>
                  <CheckIcon className="curriculum-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="curriculum-duomo" aria-hidden="true">
            <svg
              viewBox="0 0 100 200"
              fill="none"
              stroke="#0b2c52"
              strokeWidth="1"
              opacity="0.15"
              width="100"
            >
              <path d="M50 10v180M30 40h40M20 80h60M10 130h80M50 10L10 190h80L50 10Z" />
            </svg>
          </div>

          <div className="curriculum-visits">
            <h3 className="curriculum-visits-title">Industry &amp; Site Visits</h3>
            <p className="curriculum-visits-lead">
              Explore iconic real estate projects, smart city initiatives, sustainable
              developments and infrastructure marvels across Italy and Europe.
            </p>
            <div className="curriculum-visit-grid">
              {visitImages.map((img) => (
                <img key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STUDENT LIFE ---------------- */}
      <section className="section student-life">
        <div className="container">
          <h2 className="section-title">Student Life &amp; Cultural Experience</h2>
          <p className="section-lead">
            Experience the rich culture, history, art, cuisine and lifestyle of Italy. A perfect
            blend of learning, exploration and personal growth.
          </p>

          <ul className="student-life-points">
            {studentLifePoints.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon className="student-life-icon" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="student-life-image-grid">
            {studentLifeImages.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROGRAM HIGHLIGHTS ---------------- */}
      <section className="highlights-band">
        <div className="container">
          <h2 className="highlights-title">Program Highlights</h2>
          <div className="highlights-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="highlight-item">
                <span className="highlight-icon-wrap">
                  <Icon width={26} height={26} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ / PROCESS / ENQUIRE (EQUAL BUTTON ALIGNMENT) ---------------- */}
      <section className="fpe-strip">
        <div className="fpe-faq">
          <h3 className="fpe-heading">Frequently Asked Questions</h3>
          <ul className="fpe-faq-list">
            {faqs.map((q, i) => (
              <li key={q}>
                <button
                  className="fpe-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{openFaq === i ? "−" : "+"}</span>
                  {q}
                </button>
              </li>
            ))}
          </ul>
          <button className="btn btn-navy fpe-view-all">View All FAQs</button>
        </div>

        <div className="fpe-process">
          <h3 className="fpe-heading">Application Process</h3>
          <ol className="fpe-steps">
            {processSteps.map((step, i) => (
              <li key={step}>
                <span className="fpe-step-icon">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <button className="btn btn-navy fpe-apply-btn">Apply Now</button>
        </div>

        <div className="fpe-enquire">
          <h3 className="fpe-enquire-heading">Enquire Now</h3>
          <p>Take the next step in your global real estate journey.</p>
          <ul className="fpe-contact">
            <li>
              <PhoneIcon /> +91 90906 04013
            </li>
            <li>
              <MailIcon /> global@ireedindia.com
            </li>
            <li>
              <WebIcon /> www.ireedindia.com
            </li>
          </ul>
          <button className="btn fpe-contact-btn">Contact Us</button>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      {/* <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3 className="footer-logo">IREED</h3>
            <p className="footer-address">
              Address: Office Suite 8 &amp; 9, 3rd Floor, Ninex City Mart, Sohna Road, Near Radisson
              Hotel, Sector 49, Gurugram, Haryana 122018
            </p>
            <div className="footer-map-wrap">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80"
                alt="Location overview map"
              />
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contacts</h4>
            <p className="footer-subscribe-label">Enter your email address to register</p>
            <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" aria-label="Email address" />
              <button type="submit">Subscribe →</button>
            </form>

            <div className="footer-social" aria-label="Social media links">
              {["in", "ig", "fb", "yt", "tw", "pin"].map((s) => (
                <a key={s} href="#" aria-label={s} className="footer-social-dot" />
              ))}
            </div>

            <div className="footer-badges">
              <div className="footer-jobs-badge">IREED JOBS</div>
              <div className="footer-store-badge">Google Play</div>
              <div className="footer-store-badge">App Store</div>
            </div>
          </div>
        </div>

        <div className="footer-az-bar">
          <p>Search Developers by Location Alphabetically</p>
          <ul>
            {alphabet.map((letter) => (
              <li key={letter}>
                <a href="#">{letter}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer> */}

      {/* Floating Utilities */}
      <div className="floating-actions">
        <a href="#" className="whatsapp-float" aria-label="WhatsApp Us">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001l-1.416 5.17 5.291-1.387c1.467.8 3.123 1.22 4.778 1.22h.005c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.175-2.925-7.063C17.189 3.037 14.682 2 12.012 2zm0 16.516h-.004c-1.493 0-2.957-.401-4.234-1.159l-.304-.18-3.148.825.84-3.067-.198-.314c-.833-1.326-1.273-2.868-1.273-4.453 0-4.646 3.78-8.425 8.428-8.425 2.25 0 4.366.877 5.957 2.469 1.591 1.592 2.468 3.708 2.467 5.958 0 4.647-3.781 8.426-8.427 8.426z" />
          </svg>
        </a>
        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to Top">
          ▲
        </button>
      </div>

      {/* =====================================================================
          STYLES
         ===================================================================== */}
      <style jsx global>{`
        :root {
          --navy-deep: #071c38;
          --navy: #0b2c52;
          --navy-mid: #123a68;
          --bright-blue: #0066cc;
          --gold: #c8963e;
          --gold-light: #e0b467;
          --cream: #f7f5f1;
          --white: #ffffff;
          --ink: #16263c;
          --muted: #5c6b7c;
          --line: #e6e2da;

          /* Exact Serif font for headings */
          --font-heading: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          --font-body: "Inter", system-ui, sans-serif;

          --container: 1180px;
          --radius: 10px;
          --shadow-card: 0 10px 30px rgba(11, 44, 82, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        body {
          font-family: var(--font-body);
          color: var(--ink);
          background: var(--white);
          -webkit-font-smoothing: antialiased;
          line-height: 1.55;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: var(--font-heading);
          margin: 0;
          color: var(--navy);
          line-height: 1.2;
        }

        p {
          margin: 0;
        }

        ul,
        ol {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          max-width: 100%;
        }

        button {
          font-family: var(--font-body);
          cursor: pointer;
        }

        /* Container Shared Grid Base */
        .container {
          max-width: var(--container);
          margin: 0 auto;
          padding: 0 24px;
        }

        .section {
          padding: 64px 0;
        }

        .section-tight {
          padding: 48px 0;
        }

        .eyebrow {
          color: var(--gold);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-size: 13px;
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--navy);
        }

        .section-lead {
          color: var(--muted);
          font-size: 15.5px;
          max-width: 640px;
          margin-top: 10px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 26px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14.5px;
          border: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
        }
        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-navy {
          background: var(--navy);
          color: var(--white);
        }
        .btn-navy:hover {
          background: var(--navy-mid);
        }

        /* ---------------- SECTION 1 HERO ---------------- */
        .hero {
          position: relative;
          min-height: 460px;
          display: flex;
          align-items: center;
          background: linear-gradient(120deg, var(--navy-deep) 38%, rgba(7, 28, 56, 0.35) 78%),
            url("https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1600&q=80")
              center/cover no-repeat;
          color: var(--white);
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(7, 28, 56, 0.94) 0%,
            rgba(7, 28, 56, 0.65) 55%,
            rgba(7, 28, 56, 0.15) 100%
          );
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 310px;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 1;
          padding-top: 42px;
          padding-bottom: 42px;
          width: 100%;
        }
        .hero-left-content {
          text-align: left;
        }
        .hero-kicker {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 19px;
          line-height: 1.35;
          margin-bottom: -6px; /* pulled tighter — logo now overlaps kicker's line spacing */
          color: var(--gold-light);
        }

        /* ---------------- LOGO + HEADLINE ALIGNMENT ----------------
           The logo PNG has built-in transparent padding on its left
           edge, so a negative left margin pulls the visible mark
           flush with the text above/below it. Adjust the margin-left
           value below if your logo asset changes. */
        .hero-brand-row {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
          margin-top: -6px; /* pulls logo closer to kicker text above */
          margin-bottom: -8px; /* pulls headline closer to logo below */
          margin-left: -42px; /* closes transparent left padding in logo asset */
        }
        .hero-logo-img {
          height: 112px;
          width: auto;
          max-width: 460px;
          object-fit: contain;
          object-position: left center;
        }

        .hero-headline {
          color: var(--white);
          font-size: 32px;
          font-weight: 700;
          margin-top: -18px; /* closes remaining gap from logo's built-in vertical padding */
          margin-bottom: 16px;
          text-align: left;
        }
        .hero-sub {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.88);
          max-width: 580px;
          margin-bottom: 26px;
          text-align: left;
          line-height: 1.55;
        }
        .hero-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 22px;
        }
        .hero-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
        }
        .hero-feature-icon {
          color: var(--gold-light);
        }

        /* Sleek Right Form Card */
        .hero-form-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 10px;
          padding: 20px 22px;
          color: var(--ink);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        .hero-form-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 14px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 10px;
        }
        .form-group label {
          font-size: 11px;
          font-weight: 700;
          color: var(--navy-mid);
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #d0d5dd;
          border-radius: 5px;
          font-size: 12.5px;
          font-family: var(--font-body);
          color: var(--ink);
          background: #ffffff;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .form-group input:focus,
        .form-group select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 2px rgba(200, 150, 62, 0.2);
        }
        .hero-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--gold), #b07f2d);
          color: var(--white);
          border: none;
          padding: 9px 14px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 6px;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .hero-submit-btn:hover {
          opacity: 0.95;
          transform: translateY(-1px);
        }

        /* ---------------- ABOUT (STATS IN SINGLE HORIZONTAL ROW) ---------------- */
        .about-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .about-copy {
          margin-top: 16px;
          color: var(--muted);
          font-size: 15px;
          max-width: 480px;
        }
        .about-stats {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          gap: 28px;
          margin-top: 34px;
        }
        .about-stats li {
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
        }
        .about-stats li div {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }
        .about-stats strong {
          font-family: var(--font-heading);
          font-size: 20px;
          color: var(--navy);
        }
        .about-stats span {
          font-size: 12px;
          color: var(--muted);
        }
        .about-stat-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--cream);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .about-image-wrap img {
          border-radius: var(--radius);
          box-shadow: var(--shadow-card);
          width: 100%;
          height: 320px;
          object-fit: cover;
        }

        /* ---------------- CAMPUS ---------------- */
        .campus {
          background: var(--cream);
        }
        .campus-image-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 30px;
        }
        .campus-image-card img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          border-radius: var(--radius);
          box-shadow: var(--shadow-card);
        }
        .campus-points {
          display: flex;
          gap: 40px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .campus-points li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--navy);
        }
        .campus-point-icon {
          color: var(--gold);
        }

        /* ---------------- CURRICULUM ---------------- */
        .curriculum-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.5fr 1.1fr;
          gap: 30px;
          align-items: start;
        }
        .curriculum-checklist {
          margin-top: 22px;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .curriculum-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          color: var(--ink);
        }
        .curriculum-check {
          color: var(--gold);
          margin-top: 3px;
          flex-shrink: 0;
        }
        .curriculum-duomo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 40px;
        }
        .curriculum-visits-title {
          font-size: 19px;
          font-weight: 700;
          color: var(--navy);
        }
        .curriculum-visits-lead {
          margin-top: 10px;
          color: var(--muted);
          font-size: 14px;
        }
        .curriculum-visit-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .curriculum-visit-grid img {
          width: 100%;
          height: 130px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: var(--shadow-card);
        }

        /* ---------------- STUDENT LIFE ---------------- */
        .student-life {
          background: var(--cream);
        }
        .student-life-points {
          display: flex;
          gap: 34px;
          flex-wrap: wrap;
          margin-top: 26px;
        }
        .student-life-points li {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--navy);
        }
        .student-life-icon {
          color: var(--gold);
        }
        .student-life-image-grid {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .student-life-image-grid img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          border-radius: var(--radius);
          box-shadow: var(--shadow-card);
        }

        /* ---------------- HIGHLIGHTS BAND ---------------- */
        .highlights-band {
          background: var(--navy-deep);
          padding: 56px 0;
        }
        .highlights-title {
          color: var(--white);
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 40px;
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 36px 30px;
        }
        .highlight-item {
          display: flex;
          gap: 14px;
        }
        .highlight-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1.5px solid rgba(200, 150, 62, 0.5);
          color: var(--gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .highlight-item strong {
          display: block;
          color: var(--gold-light);
          font-family: var(--font-heading);
          font-size: 14.5px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .highlight-item p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 13px;
          line-height: 1.5;
        }

        /* ---------------- FAQ / PROCESS / ENQUIRE (EQUAL BOTTOM BUTTON ALIGNMENT) ---------------- */
        .fpe-strip {
          display: grid;
          grid-template-columns: 1.15fr 1.15fr 0.9fr;
          align-items: stretch;
        }
        .fpe-heading {
          font-size: 17px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 18px;
        }
        .fpe-faq {
          background: var(--white);
          padding: 40px 34px;
          display: flex;
          flex-direction: column;
        }
        .fpe-faq-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 20px;
        }
        .fpe-faq-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          border-bottom: 1px solid var(--line);
          padding: 11px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13.5px;
          color: var(--ink);
        }
        .fpe-faq-btn span {
          color: var(--gold);
          font-weight: 700;
          font-size: 16px;
          width: 16px;
        }
        .fpe-view-all {
          padding: 10px 22px;
          font-size: 13px;
          margin-top: auto;
          align-self: flex-start;
        }
        .fpe-process {
          background: var(--cream);
          padding: 40px 34px;
          border-left: 1px solid var(--line);
          border-right: 1px solid var(--line);
          display: flex;
          flex-direction: column;
        }
        .fpe-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 26px;
        }
        .fpe-steps li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--navy);
        }
        .fpe-step-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--white);
          border: 1.5px solid var(--gold);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12.5px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .fpe-apply-btn {
          padding: 10px 22px;
          font-size: 13px;
          margin-top: auto;
          align-self: flex-start;
        }
        .fpe-enquire {
          background: linear-gradient(135deg, var(--gold), #b07f2d);
          color: var(--white);
          padding: 40px 34px;
          display: flex;
          flex-direction: column;
        }
        .fpe-enquire-heading {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .fpe-enquire p {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 22px;
        }
        .fpe-contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .fpe-contact li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          font-weight: 600;
        }
        .fpe-contact-btn {
          background: var(--navy-deep);
          color: var(--white);
          padding: 10px 22px;
          font-size: 13px;
          margin-top: auto;
          align-self: flex-start;
        }

        /* ---------------- FOOTER ---------------- */
        .footer {
          background: #005bb5;
          color: rgba(255, 255, 255, 0.9);
          padding-top: 56px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.9fr 1.1fr;
          gap: 40px;
          padding-bottom: 44px;
        }
        .footer-logo {
          color: var(--white);
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .footer-address {
          font-size: 13px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .footer-map-wrap img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 6px;
        }
        .footer h4 {
          color: var(--white);
          font-size: 15px;
          margin-bottom: 18px;
        }
        .footer ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer ul a {
          font-size: 13.5px;
        }
        .footer-subscribe-label {
          font-size: 13px;
          margin-bottom: 12px;
        }
        .footer-subscribe-form {
          display: flex;
          margin-bottom: 22px;
        }
        .footer-subscribe-form input {
          flex: 1;
          border: none;
          border-radius: 4px 0 0 4px;
          padding: 10px 12px;
          font-size: 13px;
        }
        .footer-subscribe-form button {
          border: none;
          background: var(--navy-deep);
          color: var(--white);
          padding: 0 16px;
          border-radius: 0 4px 4px 0;
          font-size: 13px;
          font-weight: 600;
        }
        .footer-social {
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
        }
        .footer-social-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: inline-block;
        }
        .footer-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .footer-jobs-badge,
        .footer-store-badge {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 6px;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 600;
          color: var(--white);
        }
        .footer-az-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 20px 0 26px;
          text-align: center;
        }
        .footer-az-bar p {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 14px;
        }
        .footer-az-bar ul {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-az-bar a {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          font-size: 12px;
        }

        /* Floating Actions */
        .floating-actions {
          position: fixed;
          bottom: 20px;
          left: 20px;
          right: 20px;
          display: flex;
          justify-content: space-between;
          pointer-events: none;
          z-index: 100;
        }
        .whatsapp-float,
        .back-to-top {
          pointer-events: auto;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .whatsapp-float {
          background-color: #25d366;
        }
        .back-to-top {
          background-color: #0066cc;
          color: white;
          border: none;
          font-size: 12px;
        }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .hero-form-card {
            max-width: 360px;
            margin: 0 auto;
          }
          .about-stats {
            flex-wrap: wrap;
            gap: 18px;
          }
          .curriculum-grid,
          .fpe-strip,
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .curriculum-duomo {
            display: none;
          }
          .fpe-view-all,
          .fpe-apply-btn,
          .fpe-contact-btn {
            margin-top: 16px;
          }
        }

        @media (max-width: 760px) {
          .about-grid,
          .campus-image-row,
          .student-life-image-grid {
            grid-template-columns: 1fr;
          }
          .hero-headline {
            font-size: 26px;
          }
          .hero-logo-img {
            height: 72px;
          }
        }
      `}</style>
    </main>
  );
}