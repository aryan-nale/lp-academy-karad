import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import AceLogo from "../components/AceLogo";

const faculty = [
  {
    name: "Prof. Bajirao Patil",
    role: "Chairman",
    chips: ["Mechanical Engineer", "Physics Teacher", "Chairman"],
    bio: "Prof. Bajirao Patil co-founded LP Academy with a vision to bring quality entrance exam coaching to Karad. As a mechanical engineer and Physics teacher, he brings both academic rigour and practical insight to every class.",
    badge: "Chairman & Co-Founder",
  },
  {
    name: "Prof. Vijay Ligade",
    role: "Vice Chairman",
    chips: ["Mechanical Engineer", "Physics Teacher", "Vice Chairman"],
    bio: "Prof. Vijay Ligade leads academic planning at LP Academy. His expertise in Physics and his background in mechanical engineering enable him to explain complex concepts with clarity and precision.",
    badge: "Vice Chairman & Co-Founder",
  },
  {
    name: "[CONFIRM: faculty name]",
    role: "[CONFIRM: subject and qualification]",
    chips: ["[CONFIRM: subject]", "[CONFIRM: qualification]"],
    bio: "[CONFIRM: faculty bio and background]",
    badge: "[CONFIRM: designation]",
  },
];

export default function Teachers() {
  return (
    <div className="home-page">
      <nav className="top-nav">
        <Link to="/" className="brand" aria-label="LP Academy home">
          <AceLogo size={34} />
        </Link>
        <div className="menu desktop-only">
          <Link to="/" className="menu-link">Home</Link>
          <Link to="/courses" className="menu-link">Courses</Link>
          <Link to="/results" className="menu-link">Results</Link>
          <Link to="/about" className="menu-link">About</Link>
          <Link to="/teachers" className="menu-link">Teachers</Link>
          <Link to="/facilities" className="menu-link">Facilities</Link>
          <Link to="/contact" className="menu-link">Contact</Link>
        </div>
        <Link to="/" className="courses-back-link" style={{justifySelf:'end'}}>
          <ArrowLeft size={16} /><span>Home</span>
        </Link>
      </nav>

      <main style={{maxWidth:'1100px', margin:'0 auto', padding:'120px 24px 80px'}}>
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.55}}>
          <div className="director-tag" style={{marginBottom:'12px'}}>Our Faculty</div>
          <h1 style={{fontSize:'clamp(2rem,5vw,3rem)', marginBottom:'12px'}}>Meet Our Teachers</h1>
          <p style={{fontSize:'1.1rem', color:'var(--ink-soft)', marginBottom:'56px', maxWidth:'700px'}}>
            LP Academy is led by experienced educators — mechanical engineers who are dedicated Physics teachers — committed to guiding every student to success.
          </p>
        </motion.div>

        <div style={{display:'flex', flexDirection:'column', gap:'56px'}}>
          {faculty.map((f, i) => (
            <motion.section key={f.name} className="director-section"
              initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.12, duration:0.5}}>
              <div className="director-image-col">
                <div className="director-stack">
                  <div className="photo-card-back" />
                  {/* REPLACE IMAGE */}
                  <img src="/logo.png" alt={f.name + " - LP Academy"} />
                  <div className="verified-badge">
                    <div><Award size={20} /></div>
                    <div>
                      <small>LP Academy</small>
                      <strong>{f.badge}</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="director-content">
                <div className="director-tag">{f.role}</div>
                <h2>{f.name}</h2>
                <div className="chips">{f.chips.map(c => <span key={c}>{c}</span>)}</div>
                <p className="quote">"{f.bio}"</p>
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <AceLogo size={44} tone="paper" />
            <p>LP Academy (Ligade-Patil Junior College of Science), Karad — quality coaching for 8th-10th and 11th-12th.</p>
            <a href="https://wa.me/918975756530" target="_blank" rel="noreferrer" className="whatsapp">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/results">Results</Link>
            <Link to="/about">About</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/contact">Contact</Link>
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
          <div><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
        </div>
      </footer>
    </div>
  );
}
