import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, ChevronDown, Award, BookCheck, MessageCircle, MapPin, Phone, Mail, MessageCircle as WA } from "lucide-react";
import AceLogo from "../components/AceLogo";

export default function About() {
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
        <motion.div
          initial={{opacity:0, y:24}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.55, ease:'easeOut'}}
        >
          <div className="director-tag" style={{marginBottom:'12px'}}>About Us</div>
          <h1 style={{fontSize:'clamp(2rem,5vw,3rem)', marginBottom:'24px', lineHeight:1.15}}>
            LP Academy, Karad
          </h1>
          <p style={{fontSize:'1.15rem', maxWidth:'780px', lineHeight:1.7, color:'var(--ink-soft)', marginBottom:'48px'}}>
            LP Academy — Ligade-Patil Junior College of Science — is a coaching institution based in Karad, Dist. Satara,
            Maharashtra. We offer Maharashtra State Board coaching for students from 8th to 12th standard, with
            specialised entrance exam preparation for JEE, MHT-CET and NEET.
          </p>
        </motion.div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'24px', marginBottom:'60px'}}>
          {[
            {tone:'yellow', title:'Our Mission', body:'To provide quality, affordable education to students in Karad and the Satara district — helping them build strong foundations and crack competitive entrance exams.'},
            {tone:'sky', title:'Maharashtra State Board', body:'All our programs are aligned with the Maharashtra State Board syllabus. We help students excel in board exams while simultaneously preparing for JEE, MHT-CET and NEET.'},
            {tone:'mint', title:'Hostel Facility', body:'Separate boys and girls hostel for 11th-12th students at Rs 70,000 per year. [CONFIRM: food included?]'},
          ].map((c,i) => (
            <motion.div key={c.title} className={`feature-card tone-${c.tone}`}
              initial={{opacity:0, y:36}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1, duration:0.5}}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </motion.div>
          ))}
        </div>

        <section id="director" className="director-section" style={{marginBottom:'60px'}}>
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
            <div className="director-tag">Chairman</div>
            <h2>Prof. Bajirao Patil</h2>
            <div className="chips">
              <span>Chairman</span>
              <span>Mechanical Engineer</span>
              <span>Physics Teacher</span>
            </div>
            <p className="quote">
              "At LP Academy, we build the foundation first. With the right concepts and consistent practice,
              every student can crack JEE, NEET and MHT-CET. Our mission is to bring quality education to
              Karad and the Satara district."
            </p>
            <div className="director-points">
              <div>
                <BookCheck size={22} />
                <div><h4>Concept Building</h4><p>Deep conceptual clarity in Physics, Chemistry, Maths and Biology.</p></div>
              </div>
              <div>
                <MessageCircle size={22} />
                <div><h4>Doubt Solving</h4><p>Dedicated sessions for every query — no student left behind.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="director-section" style={{marginBottom:'60px'}}>
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
            <div className="director-tag">Vice Chairman</div>
            <h2>Prof. Vijay Ligade</h2>
            <div className="chips">
              <span>Vice Chairman</span>
              <span>Mechanical Engineer</span>
              <span>Physics Teacher</span>
            </div>
            <p className="quote">
              "Our focus is on making every student's potential visible through rigorous practice and personal
              attention. LP Academy is built on the belief that quality coaching should be accessible in Karad."
            </p>
            <div className="director-points">
              <div>
                <BookCheck size={22} />
                <div><h4>Results</h4><p>JEE Advanced, NEET and MHT-CET achievers every year.</p></div>
              </div>
              <div>
                <MessageCircle size={22} />
                <div><h4>Personal Attention</h4><p>Small batches and focused mentoring for every student.</p></div>
              </div>
            </div>
          </div>
        </section>

        <div style={{background:'var(--ink)', color:'#fff', borderRadius:'var(--r-lg)', padding:'40px', border:'var(--line)', boxShadow:'var(--pop-lg)', marginBottom:'40px'}}>
          <h2 style={{color:'var(--yellow)', marginBottom:'16px'}}>Our Record</h2>
          <p style={{lineHeight:1.7, fontSize:'1.05rem', color:'rgba(255,255,255,0.85)'}}>
            LP Academy students have secured admissions in top medical and engineering colleges through NEET,
            JEE Advanced and MHT-CET. Our 2025-26 batch produced NEET toppers, JEE Advanced qualifiers and
            99+ percentile scorers in MHT-CET from Satara district. [CONFIRM: founding year, total student count, awards]
          </p>
          <div style={{marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link to="/results" style={{display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 24px', background:'var(--yellow)', color:'var(--ink)', fontWeight:700, borderRadius:'999px', border:'2.5px solid #fff', boxShadow:'3px 3px 0 #fff', textDecoration:'none'}}>
              View Results
            </Link>
            <a href="https://wa.me/918975756530" target="_blank" rel="noreferrer" style={{display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 24px', background:'var(--mint)', color:'var(--ink)', fontWeight:700, borderRadius:'999px', border:'2.5px solid #fff', boxShadow:'3px 3px 0 #fff', textDecoration:'none'}}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <AceLogo size={44} tone="paper" />
            <p>LP Academy (Ligade-Patil Junior College of Science), Karad — quality coaching for 8th-10th (Foundation) and 11th-12th (JEE, MHT-CET, NEET), with hostel facility.</p>
            <a href="https://wa.me/918975756530" target="_blank" rel="noreferrer" className="whatsapp">
              <WA size={18} /> WhatsApp Us
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
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
