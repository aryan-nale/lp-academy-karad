import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Video, Users, ShieldCheck, Zap, CheckCircle, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import AceLogo from "../components/AceLogo";

const facilities = [
  { icon: <BookOpen size={28} />, tone: "yellow", title: "Classrooms", body: "Well-lit, ventilated classrooms designed for focused learning and interactive teaching. [CONFIRM: exact count and capacity]" },
  { icon: <ShieldCheck size={28} />, tone: "sky", title: "Test Series", body: "Regular chapter-wise and full-syllabus mock tests for board exams and entrance exams (JEE, MHT-CET, NEET)." },
  { icon: <Users size={28} />, tone: "mint", title: "Doubt Solving", body: "Dedicated doubt-solving sessions with faculty after regular classes. No question goes unanswered." },
  { icon: <Zap size={28} />, tone: "lilac", title: "Study Material", body: "Curated notes, question banks and previous-year papers for all programs. [CONFIRM: digital or printed?]" },
  { icon: <CheckCircle size={28} />, tone: "yellow", title: "Boys Hostel", body: "Hostel facility for boys — 11th-12th students only. Rs 70,000 per year. [CONFIRM: food included?] [CONFIRM: exact address]" },
  { icon: <Video size={28} />, tone: "red", title: "Girls Hostel", body: "Separate hostel facility for girls — 11th-12th students only. Rs 70,000 per year. [CONFIRM: food included?] [CONFIRM: exact address]" },
];

export default function Facilities() {
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
          <div className="director-tag" style={{marginBottom:'12px'}}>What We Offer</div>
          <h1 style={{fontSize:'clamp(2rem,5vw,3rem)', marginBottom:'12px'}}>Facilities at LP Academy</h1>
          <p style={{fontSize:'1.1rem', color:'var(--ink-soft)', marginBottom:'56px', maxWidth:'700px'}}>
            Everything a student needs — from classrooms and study material to doubt sessions and hostel accommodation.
          </p>
        </motion.div>

        <div className="features-grid">
          {facilities.map((f, i) => (
            <motion.div key={f.title} className={`feature-card tone-${f.tone}`}
              initial={{opacity:0, y:40, rotate: i%2?3:-3}} whileInView={{opacity:1, y:0, rotate:0}} viewport={{once:true, margin:'-60px'}}
              transition={{type:'spring', stiffness:140, damping:16, delay:(i%3)*0.08}}>
              <div className="feature-icon-wrap">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </motion.div>
          ))}
        </div>

        <div style={{background:'var(--ink)', color:'#fff', borderRadius:'var(--r-lg)', padding:'40px', border:'var(--line)', boxShadow:'var(--pop-lg)', marginTop:'60px'}}>
          <h2 style={{color:'var(--yellow)', marginBottom:'16px'}}>Hostel Information</h2>
          <p style={{lineHeight:1.7, color:'rgba(255,255,255,0.85)', marginBottom:'16px'}}>
            LP Academy provides separate hostel facilities for boys and girls — available for 11th-12th students only.
            Fee: Rs 70,000 per year. [CONFIRM: food included?]
          </p>
          <p style={{lineHeight:1.7, color:'rgba(255,255,255,0.75)'}}>
            For hostel enquiries, contact us on WhatsApp or call 8975756530.
          </p>
          <div style={{marginTop:'24px'}}>
            <a href="https://wa.me/918975756530" target="_blank" rel="noreferrer"
              style={{display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 24px', background:'var(--mint)', color:'var(--ink)', fontWeight:700, borderRadius:'999px', border:'2.5px solid #fff', boxShadow:'3px 3px 0 #fff', textDecoration:'none'}}>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <AceLogo size={44} tone="paper" />
            <p>LP Academy (Ligade-Patil Junior College of Science), Karad.</p>
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
