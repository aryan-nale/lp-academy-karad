import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  GraduationCap,
  UserCircle,
  Clock,
  Star,
  ArrowRight,
  BookOpen,
  Video,
  Users,
  CheckCircle,
  Zap,
  ShieldCheck,
  Award,
  BookCheck,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import AceLogo from "../components/AceLogo";
import "./Home.css";

const features = [
  {
    icon: <BookOpen className="feature-icon" />,
    tone: "yellow",
    title: "Experienced Leadership",
    description:
      "Led by Prof. Bajirao Patil and Prof. Vijay Ligade — both mechanical engineers and dedicated Physics teachers.",
  },
  {
    icon: <Video className="feature-icon" />,
    tone: "red",
    title: "Proven Results",
    description:
      "Our students have cleared JEE Advanced, NEET and MHT-CET. We are proud of every achiever from Karad and Satara.",
  },
  {
    icon: <ShieldCheck className="feature-icon" />,
    tone: "sky",
    title: "Hostel Facility",
    description:
      "Separate boys and girls hostel for 11th-12th students at Rs 70,000 per year. [CONFIRM: food included?]",
  },
  {
    icon: <Zap className="feature-icon" />,
    tone: "lilac",
    title: "Regular Test Series",
    description:
      "Frequent mock tests and assessments to track progress and prepare students for board and entrance exams.",
  },
  {
    icon: <Users className="feature-icon" />,
    tone: "mint",
    title: "Doubt Solving Sessions",
    description:
      "Dedicated sessions with expert faculty to clear every academic hurdle — no question goes unanswered.",
  },
  {
    icon: <CheckCircle className="feature-icon" />,
    tone: "yellow",
    title: "Personalized Attention",
    description:
      "Small batch sizes ensure every student gets focused mentoring from our educators.",
  },
];

const ticker = [
  "Foundation (8th-10th) · State Board",
  "JEE Coaching (11th-12th)",
  "MHT-CET Coaching (11th-12th)",
  "NEET Coaching (11th-12th)",
  "Hostel for Boys & Girls (11th-12th)",
  "Admissions Open for 2026-27",
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const onClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (!href) return;
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    };
    anchors.forEach((a) => a.addEventListener("click", onClick));
    return () => anchors.forEach((a) => a.removeEventListener("click", onClick));
  }, []);

  // The two hero cards are "dealt" onto the table on load.
  const deal = (i) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 160, rotate: i === 0 ? -24 : 24, scale: 0.85 },
          animate: { opacity: 1, y: 0, rotate: i === 0 ? -3 : 2.5, scale: 1 },
          transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.75 + i * 0.15 },
        };

  return (
    <div className="home-page">
      <nav className="top-nav">
        <Link to="/" className="brand" aria-label="LP Academy home">
          <AceLogo size={34} />
        </Link>

        <div className="menu desktop-only">
          <Link to="/" className="menu-link">Home</Link>

          <div className="menu-dropdown">
            <button className="menu-link dropdown-btn">
              Courses <ChevronDown size={16} />
            </button>
            <div className="courses-panel">
              <div className="courses-highlight">
                <GraduationCap className="courses-highlight-icon" />
                <h4>Excellence in Education</h4>
                <p>Maharashtra State Board coaching and entrance exam preparation.</p>
              </div>
              <div className="courses-list">
                <div className="course-item-mini">
                  <h5>Foundation (8th-10th)</h5>
                  <p>Maths & Science, State Board.</p>
                </div>
                <div className="course-item-mini">
                  <h5>JEE / MHT-CET / NEET (11th-12th)</h5>
                  <p>Entrance exam preparation.</p>
                </div>
                <div className="course-item-mini">
                  <h5>Hostel Available</h5>
                  <p>Boys & girls, 11th-12th only.</p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/results" className="menu-link">Results</Link>
          <Link to="/about" className="menu-link">About</Link>
          <Link to="/teachers" className="menu-link">Teachers</Link>
          <Link to="/facilities" className="menu-link">Facilities</Link>
          <Link to="/contact" className="menu-link">Contact</Link>
        </div>

        <div className="login-dropdown">
          <button className="login-btn">
            Login <ChevronDown size={16} />
          </button>
          <div className="login-panel">
            <Link to="/login?role=student" className="login-option">
              <GraduationCap size={16} /> Student Login
            </Link>
            <Link to="/login?role=teacher" className="login-option">
              <UserCircle size={16} /> Teacher Login
            </Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <motion.div
            className="hero-badge"
            initial={reduceMotion ? false : { scale: 0, rotate: -40 }}
            animate={{ scale: 1, rotate: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.55 }}
          >
            Admissions Open for 2026-27
          </motion.div>
          <h1>
            Building Foundations. <span className="hero-word">Cracking Entrances.</span>
          </h1>
          <p>
            Maharashtra State Board coaching for 8th-10th and JEE, MHT-CET and NEET for 11th-12th.
          </p>
        </div>

        <div className="hero-cards">
          <motion.div className="hero-card card-yellow" {...deal(0)}>
            <span className="card-index" aria-hidden="true">L<br />♠</span>
            <Clock className="card-watermark" />
            <div className="card-topline">Current Programs</div>
            <h3>Our Courses</h3>
            <div className="hero-course-list">
              <div className="hero-course-item">Foundation (8th-10th)</div>
              <div className="hero-course-item">JEE (11th-12th)</div>
              <div className="hero-course-item">MHT-CET (11th-12th)</div>
              <div className="hero-course-item">NEET (11th-12th)</div>
            </div>
            <ul className="hero-points">
              <li>Maharashtra State Board</li>
              <li>Exam-Oriented Notes</li>
              <li>Regular Test Series</li>
              <li>Doubt Solving Sessions</li>
              <li>Hostel Available</li>
            </ul>
          </motion.div>

          <motion.div className="hero-card card-red" {...deal(1)}>
            <span className="card-index" aria-hidden="true">P<br />♥</span>
            <Star className="card-watermark" />
            <div className="card-topline">Admissions Open</div>
            <h3>Join LP Academy</h3>
            <p className="launch-copy">
              New batches open for 2026-27. Get personal counselling and guidance from our experienced faculty.
            </p>
            <ul className="hero-points">
              <li>Expert Physics faculty</li>
              <li>Proven JEE / NEET / MHT-CET results</li>
              <li>Separate hostel for boys & girls</li>
            </ul>
            <div className="launch-tags">
              <span>Admissions Open</span>
              <span>Counselling Available</span>
            </div>
          </motion.div>
        </div>

        <Link to="/courses" className="explore-more">
          View Courses
          <ArrowRight size={18} />
        </Link>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>{t}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="why-section">
        <div className="section-head">
          <h2>
            Why Choose LP Academy?
          </h2>
          <p>
            We combine strong concept-building with focused exam preparation, led by experienced mechanical engineers turned educators.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={`feature-card tone-${f.tone}`}
              initial={reduceMotion ? false : { opacity: 0, y: 40, rotate: i % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 140, damping: 16, delay: (i % 3) * 0.08 }}
            >
              <div className="feature-icon-wrap">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="director" className="director-section">
        <div className="director-image-col">
          <div className="director-stack">
            <div className="photo-card-back" />
            {/* REPLACE IMAGE */}
            <img src="/logo.png" alt="LP Academy, Karad" />
            <div className="verified-badge">
              <div><Award size={20} /></div>
              <div>
                <small>Maharashtra State Board</small>
                <strong>Karad, Satara</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="director-content">
          <div className="director-tag">Meet Our Leadership</div>
          <h2>Prof. Bajirao Patil</h2>
          <div className="chips">
            <span>Chairman</span>
            <span>Mechanical Engineer</span>
            <span>Physics Teacher</span>
          </div>
          <p className="quote">
            "At LP Academy, we build the foundation first. With the right concepts and consistent practice, every student can crack JEE, NEET and MHT-CET. Our mission is to bring quality education to Karad and the Satara district."
          </p>
          <div className="director-points">
            <div>
              <BookCheck size={22} />
              <div>
                <h4>Strong Concept Building</h4>
                <p>Deep conceptual clarity in Physics, Chemistry, Maths and Biology.</p>
              </div>
            </div>
            <div>
              <MessageCircle size={22} />
              <div>
                <h4>Doubt Solving</h4>
                <p>Dedicated sessions for every query — no student left behind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vice-chairman" className="director-section">
        <div className="director-image-col">
          <div className="director-stack">
            <div className="photo-card-back" />
            {/* REPLACE IMAGE */}
            <img src="/logo.png" alt="LP Academy, Karad" />
            <div className="verified-badge">
              <div><Award size={20} /></div>
              <div>
                <small>Maharashtra State Board</small>
                <strong>Karad, Satara</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="director-content">
          <div className="director-tag">Meet Our Leadership</div>
          <h2>Prof. Vijay Ligade</h2>
          <div className="chips">
            <span>Vice Chairman</span>
            <span>Mechanical Engineer</span>
            <span>Physics Teacher</span>
          </div>
          <p className="quote">
            "Our focus is on making every student's potential visible through rigorous practice and personal attention. LP Academy is built on the belief that quality coaching should be accessible in Karad."
          </p>
          <div className="director-points">
            <div>
              <BookCheck size={22} />
              <div>
                <h4>Strong Concept Building</h4>
                <p>Deep conceptual clarity in Physics, Chemistry, Maths and Biology.</p>
              </div>
            </div>
            <div>
              <MessageCircle size={22} />
              <div>
                <h4>Doubt Solving</h4>
                <p>Dedicated sessions for every query — no student left behind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <AceLogo size={44} tone="paper" />
            <p>
              LP Academy (Ligade-Patil Junior College of Science), Karad — quality coaching for 8th-10th (Foundation) and 11th-12th (JEE, MHT-CET, NEET), with hostel facility.
            </p>
            <a href="https://wa.me/918975756530" target="_blank" rel="noreferrer" className="whatsapp">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/results">Results</Link>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p><MapPin size={16} /> Behind JK Petrol Pump, Karad</p>
            <p><MapPin size={16} /> Vidyanagar, Karad, Dist. Satara 415 124</p>
            <p><Phone size={16} /> <a href="tel:+918975756530" style={{color:'inherit'}}>8975756530</a></p>
            <p><Mail size={16} /> [CONFIRM: email]</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 LP Academy, Karad. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
