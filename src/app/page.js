"use client";

import { useState, useEffect } from "react";

/* =========================================================================
   NOTE ON DEPENDENCIES
   -------------------------------------------------------------------------
   No external slider library is used (swiper removed to avoid version/
   peer-dependency conflicts with this project's Next/React versions).
   The carousel below is plain React + CSS.

   Bootstrap is loaded via CDN <link> tags below. If this page lives inside
   the Next.js App Router, it's cleaner to move those tags into
   app/layout.jsx <head>, but they're kept here too so this file works
   standalone and can be dropped in as-is.
   ========================================================================= */

/* Lightweight autoplay image carousel (no external deps) */
function ImageCarousel({ images, intervalMs = 3500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="ireed-carousel">
      <div className="ireed-carousel-viewport">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`ireed-carousel-slide${i === index ? " active" : ""}`}
          />
        ))}

        {images.length > 1 && (
          <>
            <button className="ireed-carousel-arrow prev" onClick={goPrev} aria-label="Previous image">
              ‹
            </button>
            <button className="ireed-carousel-arrow next" onClick={goNext} aria-label="Next image">
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="ireed-carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`ireed-carousel-dot${i === index ? " active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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

const YOUTUBE_VIDEO_ID = "alvzexlZqIo";

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
  { src: "/campus2.jpeg", alt: "Street view in Milan" },
  { src: "/campus.jpeg", alt: "Modern campus interior" },
  { src: "/campus3.jpeg", alt: "Milan skyline sunset" },
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
  { src: "/italy9.jpeg", alt: "High rise modern corporate tower" },
  { src: "/italy10.jpg", alt: "Green terrace residential architecture" },
  { src: "/italy.jpg", alt: "Modern commercial interior site visit" },
  { src: "/italy3.jpeg", alt: "Contemporary mixed-use urban layout" },
];

const studentLifePoints = [
  { icon: GlobeIcon, label: "Cultural Immersion" },
  { icon: LandmarkIcon, label: "Historical Landmarks" },
  { icon: CuisineIcon, label: "Italian Cuisine Experience" },
  { icon: FriendsIcon, label: "Global Friendships & Networking" },
];

const studentLifeImages = [
  { src: "/italy.jpg", alt: "Italian canal streetscape" },
  { src: "/italy2.jpeg", alt: "Historic ornate architecture interior" },
  { src: "/italy3.jpeg", alt: "Authentic Italian dining" },
  { src: "/italy4.jpeg", alt: "Group of international students" },
];

const highlights = [
  {
    icon: CertificateIcon,
    title: "International Certification",
    text: "from POLIMI Graduate School of Management (Italy)",
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

/* =========================================================================
   PAGE COMPONENT
   ========================================================================= */

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
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
      {/* Bootstrap (CDN) — move to app/layout.jsx <head> for a cleaner setup */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ---------------- SECTION 1: HERO ---------------- */}
      <header className="hero">
        <div className="hero-overlay" />
        <div className="container hero-container">
          <div className="row align-items-center gy-4 w-100">
            <div className="col-12 col-lg-8 hero-left-content fade-up">
              <p className="hero-kicker">Campus Immersion Program at Milan, Italy</p>

              <div className="hero-brand-row">
                <img
                  src="/polomi-logo.png"
                  alt="POLIMI Graduate School of Management (Italy)"
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
                {heroFeatures.map(({ icon: Icon, label }, i) => (
                  <li key={label} className="fade-up" style={{ animationDelay: `${0.15 * i}s` }}>
                    <Icon className="hero-feature-icon" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-lg-4">
              <div className="hero-form-card fade-up" style={{ animationDelay: "0.2s" }}>
                <h3>Apply Now</h3>

                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="hero-name">Name</label>
                    <input
                      type="text"
                      id="hero-name"
                      name="name"
                      className="form-control"
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
                      className="form-control"
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
                      className="form-control"
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
                      className="form-select"
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
          </div>
        </div>
      </header>

      {/* ---------------- SECTION 2: ABOUT ---------------- */}
      <section className="section about">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-6">
              <p className="eyebrow">About</p>
              <h2 className="section-title">
                POLIMI Graduate School
                <br />
                of Management (Italy)
              </h2>
              <p className="about-copy">
                POLIMI Graduate School of Management (Italy) is the management school of Politecnico
                di Milano, one of Europe&rsquo;s top technical universities. It is internationally
                recognized for its academic excellence, innovation, and strong connection with
                industry and research.
              </p>

              <div className="row row-cols-1 row-cols-sm-3 g-3 about-stats-row">
                {aboutStats.map(({ icon: Icon, number, label }) => (
                  <div className="col" key={label}>
                    <div className="hover-card stat-card h-100">
                      <span className="hover-card-icon">
                        <Icon width={22} height={22} />
                      </span>
                       <span className="hover-card-icon1 ">
                      <strong>{number}</strong>
                      </span>
                      <span className="stat-label">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="about-video-wrap">
                {videoPlaying ? (
                  <iframe
                    className="about-video"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=0&rel=0`}
                    title="POLIMI Graduate School of Management video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="about-video-thumb"
                    onClick={() => setVideoPlaying(true)}
                    aria-label="Play POLIMI Graduate School of Management video"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                      alt="POLIMI Graduate School of Management video thumbnail"
                      loading="lazy"
                    />
                    <span className="about-video-play" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CAMPUS EXPERIENCE ---------------- */}
      <section className="section-tight campus">
        <div className="container">
          <p className="eyebrow">Location</p>
          <h2 className="section-title">Campus Experience at Milan (Italy)</h2>
          <p className="section-lead">
            Learn in the heart of Milan &mdash; a global center for design, innovation, business and culture.
          </p>

          <div className="mt-4">
            <ImageCarousel images={campusImages} />
          </div>

          <div className="row row-cols-1 row-cols-sm-3 g-3 mt-2">
            {campusPoints.map(({ icon: Icon, label }) => (
              <div className="col" key={label}>
                <div className="hover-card point-card h-100">
                  <Icon className="hover-card-icon-inline" />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CURRICULUM & SITE VISITS ---------------- */}
      <section className="section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-12 col-lg-6">
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

            <div className="col-12 col-lg-6">
              <h3 className="curriculum-visits-title">Industry &amp; Site Visits</h3>
              <p className="curriculum-visits-lead">
                Explore iconic real estate projects, smart city initiatives, sustainable
                developments and infrastructure marvels across Italy and Europe.
              </p>
              <div className="mt-4">
                <ImageCarousel images={visitImages} />
              </div>
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <div className="col" key={title}>
                <div
                  className="hover-card highlight-card h-100 fade-up"
                  style={{ animationDelay: `${0.08 * i}s` }}
                >
                  <span className="hover-card-icon">
                    <Icon width={26} height={26} />
                  </span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ / PROCESS / ENQUIRE ---------------- */}
      <section className="fpe-strip">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-lg-5 fpe-faq">
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

            <div className="col-12 col-lg-4 fpe-process">
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

            <div className="col-12 col-lg-3 fpe-enquire">
              <h3 className="fpe-enquire-heading">Enquire Now</h3>
              <p>Take the next step in your global real estate journey.</p>
              <ul className="fpe-contact">
                <li>
                  <PhoneIcon /> +91 90906 04013
                </li>
                <li>
                  <MailIcon /> Info@ireedindia.com
                </li>
                <li>
                  <WebIcon /> www.ireedindia.com
                </li>
              </ul>
              <button className="btn fpe-contact-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

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
          INLINE GLOBAL STYLES
         ===================================================================== */}
      <style>{`
        :root {
          --c-dark: #2a3290;      /* deep indigo navy */
          --c-primary: #004bad;  /* bright blue */
          --c-white: #ffffff;
          --c-cream: #f4f6fc;
          --c-ink: #161a3e;
          --c-muted: #5c637d;
          --c-line: #e3e6f3;

          --font-heading: "Playfair Display", ui-serif, Georgia, serif;
          --font-body: "Poppins", system-ui, sans-serif;

          --container: 1180px;
          --radius: 14px;
          --shadow-card: 0 10px 30px rgba(42, 50, 144, 0.12);
          --grad-dark: linear-gradient(135deg, var(--c-dark), var(--c-primary));
        }

        * { box-sizing: border-box; }
        html, body { padding: 0; margin: 0; }

        body {
          font-family: var(--font-body);
          color: var(--c-ink);
          background: var(--c-white);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          line-height: 1.55;
        }

        h1, h2, h3, h4 {
          font-family: var(--font-heading);
          margin: 0;
          color: var(--c-dark);
          line-height: 1.2;
        }
        p { margin: 0; }
        ul, ol { margin: 0; padding: 0; list-style: none; }
        a { color: inherit; text-decoration: none; }
        img { display: block; max-width: 100%; }
        button { font-family: var(--font-body); cursor: pointer; }

        .section { padding: 64px 0; }
        .section-tight { padding: 48px 0; }

        .eyebrow {
          color: var(--c-primary);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 13px;
        }
        .section-title { font-size: 28px; font-weight: 700; color: var(--c-dark); }
        .section-lead { color: var(--c-muted); font-size: 14.5px; max-width: 640px; margin-top: 10px; }

        .btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 26px; border-radius: 8px; font-weight: 600; font-size: 14.5px;
          border: none; transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(0,75,173,0.28); }
        .btn-navy { background: var(--grad-dark); color: var(--c-white); }

        /* ---------------- Scroll-in animation ---------------- */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .hover-card { animation: none !important; transition: none !important; }
        }

        /* ---------------- Universal hover card ---------------- */
        .hover-card {
          background: var(--c-white);
          border: 1px solid var(--c-line);
          border-radius: var(--radius);
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: var(--shadow-card);
          transition: transform 0.35s cubic-bezier(.2,.8,.2,1), background 0.35s ease, color 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          cursor: default;
        }
        .hover-card:hover {
          background: var(--grad-dark);
          color: var(--c-white);
          transform: scale(1.06) translateY(-4px);
          box-shadow: 0 20px 40px rgba(42,50,144,0.35);
          border-color: transparent;
        }
        .hover-card:hover .hover-card-icon,
        .hover-card:hover .hover-card-icon-inline,
        .hover-card:hover strong,
        .hover-card:hover span,
        .hover-card:hover p { color: var(--c-white) !important; }

        .hover-card-icon {
          width: 46px; height: 46px; border-radius: 50%;
          background: var(--c-cream); color: var(--c-primary);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.35s ease, color 0.35s ease;
        }
        .hover-card-icon1 {
             margin-top: -50px;
    margin-left: 57px;
        }
        .hover-card:hover .hover-card-icon { background: rgba(255,255,255,0.18); color: var(--c-white); }

        .hover-card-icon-inline { color: var(--c-primary); width: 26px; height: 26px; transition: color 0.35s ease; }

        .stat-card { align-items: flex-start; text-align: left; }
        .stat-card strong { font-family: var(--font-heading); font-size: 24px; color: var(--c-dark); transition: color 0.35s ease; }
        .stat-label { font-size: 12.5px; color: var(--c-muted); transition: color 0.35s ease; }

        .point-card {
          flex-direction: row; align-items: center; gap: 12px;
          font-weight: 600; font-size: 13.5px; color: var(--c-dark);
          padding: 16px 18px;
        }

        .highlight-card { text-align: left; }
        .highlight-card strong { font-size: 15px; font-weight: 700; color: var(--c-dark); transition: color 0.35s ease; }
        .highlight-card p { font-size: 13px; color: var(--c-muted); line-height: 1.5; transition: color 0.35s ease; }
        {/* .highlight-card:hover p { color: rgba(255,255,255,0.9) !important; } */}

        /* ---------------- HERO ---------------- */
        .hero {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          background: linear-gradient(120deg, rgba(22,26,62,0.35) 78%), url("/campus2.jpeg") center/cover no-repeat;
          color: var(--c-white);
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(55deg, rgba(42,50,144,0.94) 0%, rgba(0, 75, 173, 0.40) 40%, rgba(0,75,173,0.15) 70%);
        }
        .hero-container { position: relative; z-index: 1; padding-top: 48px; padding-bottom: 48px; }
        .hero-kicker {
          font-family: var(--font-heading); font-weight: 600; font-size: 18px; line-height: 1.35;
          margin-bottom: 10px; color: #cfe0ff;
        }
        .hero-brand-row { display: flex; align-items: center; margin-bottom: 8px; }
        .hero-logo-img { height: 100px; width: auto; max-width: 380px; object-fit: contain; object-position: left center; }
        .hero-headline { color: var(--c-white); font-size: 34px; font-weight: 700; margin-bottom: 16px; }
        .hero-sub { font-size: 14.5px; color: rgba(255,255,255,0.9); max-width: 580px; margin-bottom: 26px; }

        .hero-features { display: flex; flex-wrap: wrap; gap: 22px; }
        .hero-features li { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; }
        .hero-feature-icon { color: #cfe0ff; }

        .hero-form-card {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(8px);
          border-radius: 14px;
          padding: 22px 24px;
          color: var(--c-ink);
          box-shadow: 0 16px 40px rgba(0,0,0,0.32);
        }
        .hero-form-card h3 {
          font-size: 16px; font-weight: 700; color: var(--c-dark); margin-bottom: 14px;
          text-align: center; text-transform: uppercase; letter-spacing: 0.03em;
        }
        .form-group { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }
        .form-group label { font-size: 11px; font-weight: 700; color: var(--c-primary); text-transform: uppercase; letter-spacing: 0.02em; }
        .form-group .form-control, .form-group .form-select {
          font-size: 13px; border-radius: 6px; border: 1px solid #d0d5dd;
        }
        .form-group .form-control:focus, .form-group .form-select:focus {
          border-color: var(--c-primary); box-shadow: 0 0 0 3px rgba(0,75,173,0.18);
        }
        .hero-submit-btn {
          width: 100%; background: var(--grad-dark); color: var(--c-white); border: none;
          padding: 11px 14px; border-radius: 8px; font-size: 13.5px; font-weight: 700;
          margin-top: 6px; transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-submit-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(0,75,173,0.4); }

        /* ---------------- ABOUT ---------------- */
        .about-copy { margin-top: 16px; color: var(--c-muted); font-size: 18px; max-width: 480px; }
        .about-stats-row { margin-top: -7px; }

        .about-video-wrap {
          position: relative; width: 100%; aspect-ratio: 16/9; border-radius: var(--radius);
          overflow: hidden; box-shadow: var(--shadow-card);
        }
        .about-video { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
        .about-video-thumb { position: absolute; inset: 0; width: 100%; height: 100%; padding: 0; border: 0; background: #000; }
        .about-video-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .about-video-play {
          position: absolute; top: 50%; left: 50%; width: 66px; height: 66px; transform: translate(-50%,-50%);
          border-radius: 50%; background: rgba(0,0,0,0.65); display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .about-video-play::before { content: ""; border-left: 22px solid #fff; border-top: 14px solid transparent; border-bottom: 14px solid transparent; margin-left: 5px; }
        .about-video-thumb:hover .about-video-play { background: var(--c-primary); transform: translate(-50%,-50%) scale(1.1); }

        /* ---------------- CAMPUS ---------------- */
        .campus { background: var(--c-cream); }

        /* ---------------- CUSTOM IMAGE CAROUSEL (no external deps) ---------------- */
        .ireed-carousel-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 7;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          background: var(--c-cream);
        }
        .ireed-carousel-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          justify-content: center;
          transform: scale(1.04);
          transition: opacity 0.8s ease, transform 6s ease;
          z-index: 0;
        }
        .ireed-carousel-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
        }
        .ireed-carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.85);
          color: var(--c-dark);
          font-size: 22px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: background 0.2s ease, transform 0.2s ease, color 0.2s ease;
        }
        .ireed-carousel-arrow:hover { background: var(--grad-dark); color: var(--c-white); transform: translateY(-50%) scale(1.1); }
        .ireed-carousel-arrow.prev { left: 14px; }
        .ireed-carousel-arrow.next { right: 14px; }
        .ireed-carousel-dots { display: flex; justify-content: center; gap: 8px; margin-top: 14px; }
        .ireed-carousel-dot {
          width: 9px; height: 9px; border-radius: 50%; border: none; background: var(--c-line); padding: 0;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .ireed-carousel-dot.active { background: var(--grad-dark); transform: scale(1.3); }

        /* ---------------- CURRICULUM ---------------- */
        .curriculum-checklist { margin-top: 22px; display: flex; flex-direction: column; gap: 13px; }
        .curriculum-checklist li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--c-ink); }
        .curriculum-check { color: var(--c-primary); margin-top: 3px; flex-shrink: 0; }
        .curriculum-visits-title { font-size: 19px; font-weight: 700; color: var(--c-dark); }
        .curriculum-visits-lead { margin-top: 10px; color: var(--c-muted); font-size: 14px; }

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
        .highlights-band { background: var(--c-dark); padding: 60px 0; }
        .highlights-title { color: var(--c-white); text-align: center; font-size: 26px; font-weight: 700; margin-bottom: 40px; }
        .highlights-band .hover-card { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.15); }
        .highlights-band .hover-card strong { color: var(--c-white); }
        .highlights-band .hover-card p { color: rgba(255,255,255,0.7); }
        .highlights-band .hover-card .hover-card-icon { background: rgba(255,255,255,0.12); color: #cfe0ff; }
        .highlights-band .hover-card:hover { background: var(--c-white); color: var(--c-dark); }
        .highlights-band .hover-card:hover strong,
        .highlights-band .hover-card:hover p,
        .highlights-band .hover-card:hover .hover-card-icon { color: var(--c-dark) !important; background: var(--c-cream); }

        /* ---------------- FAQ / PROCESS / ENQUIRE ---------------- */
        .fpe-heading { font-size: 17px; font-weight: 700; color: var(--c-dark); margin-bottom: 18px; }
        .fpe-faq, .fpe-process, .fpe-enquire { padding: 40px 34px; display: flex; flex-direction: column;    justify-content: space-between; height: 453px; }
        .fpe-faq { background: var(--c-white); }
        .fpe-faq-list { display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px; }
        .fpe-faq-btn {
          width: 100%; text-align: left; background: none; border: none; border-bottom: 1px solid var(--c-line);
          padding: 12px 0; display: flex; align-items: center; gap: 12px; font-size: 13.5px; color: var(--c-ink);
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .fpe-faq-btn:hover { color: var(--c-primary); padding-left: 6px; }
        .fpe-faq-btn span { color: var(--c-primary); font-weight: 700; font-size: 16px; width: 16px; }
        .fpe-view-all, .fpe-apply-btn { padding: 10px 22px; font-size: 13px; margin-top: auto; align-self: flex-start; }

        .fpe-process { background: var(--c-cream); }
        .fpe-steps { display: flex; flex-direction: column; gap: 16px; margin-bottom: 26px; }
        .fpe-steps li { display: flex; align-items: center; gap: 12px; font-size: 13.5px; font-weight: 600; color: var(--c-dark); }
        .fpe-step-icon {
          width: 30px; height: 30px; border-radius: 50%; background: var(--c-white); border: 1.5px solid var(--c-primary);
          color: var(--c-primary); display: flex; align-items: center; justify-content: center; font-size: 12.5px; font-weight: 700; flex-shrink: 0;
        }

        .fpe-enquire { background: var(--grad-dark); color: var(--c-white); }
        .fpe-enquire-heading { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
        .fpe-enquire p { font-size: 13.5px; color: rgba(255,255,255,0.92); margin-bottom: 22px; }
        .fpe-contact { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
        .fpe-contact li { display: flex; align-items: center; gap: 10px; font-size: 13.5px; font-weight: 600; }
        .fpe-contact-btn { background: rgba(0,0,0,0.25); color: var(--c-white); padding: 10px 22px; font-size: 13px; margin-top: auto; align-self: flex-start; }
        .fpe-contact-btn:hover { background: rgba(0,0,0,0.4); }

        /* ---------------- FLOATING ACTIONS ---------------- */
        .floating-actions { position: fixed; bottom: 20px; left: 20px; right: 20px; display: flex; justify-content: space-between; pointer-events: none; z-index: 100; }
        .whatsapp-float, .back-to-top {
          pointer-events: auto; width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25); border: none; transition: transform 0.2s ease;
        }
        .whatsapp-float:hover, .back-to-top:hover { transform: scale(1.1); }
        .whatsapp-float { background-color: #25d366; }
        .back-to-top { background: var(--grad-dark); color: white; font-size: 12px; }

        /* ---------------- RESPONSIVE ---------------- */
        @media (max-width: 991px) {
          .hero-headline { font-size: 28px; }
          .highlights-title { font-size: 22px; }
        }
        @media (max-width: 767px) {
          .section { padding: 44px 0; }
          .section-tight { padding: 36px 0; }
          .hero { min-height: auto; }
          .hero-logo-img { height: 64px; }
          .hero-headline { font-size: 25px; }
          .hero-sub { font-size: 14px; }
          .section-title { font-size: 23px; }
          .fpe-faq, .fpe-process, .fpe-enquire { padding: 28px 22px; }
          .ireed-carousel-viewport { aspect-ratio: 4 / 3; }
          .ireed-carousel-arrow { width: 34px; height: 34px; font-size: 18px; }
        }
        @media (max-width: 480px) {
          .hero-headline { font-size: 22px; }
          .hero-logo-img { height: 52px; }
          .form-group .form-control, .form-group .form-select { font-size: 16px; padding: 11px 12px; }
          .hero-submit-btn { padding: 13px 14px; font-size: 14.5px; }
        }
      `}</style>
    </main>
  );
}