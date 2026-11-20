import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import AceLogo from "../components/AceLogo";

export default function Contact() {
  const [form, setForm] = useState({ name: "", studentClass: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) { setError("Please enter your name."); return; }
    if (!form.message.trim()) { setError("Please enter a message."); return; }
    setError("");
    const text = `Name: ${form.name}\nClass: ${form.studentClass}\nMessage: ${form.message}`;
    window.open("https://wa.me/918975756530?text=" + encodeURIComponent(text), "_blank");
  };

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
          <div className="director-tag" style={{marginBottom:'12px'}}>Get in Touch</div>
          <h1 style={{fontSize:'clamp(2rem,5vw,3rem)', marginBottom:'12px'}}>Contact LP Academy</h1>
          <p style={{fontSize:'1.1rem', color:'var(--ink-soft)', marginBottom:'56px', maxWidth:'700px'}}>
            Reach out to us for admissions, hostel enquiries, or any questions about our programs.
          </p>
        </motion.div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'40px', alignItems:'start'}}>
          <div>
            <div className="feature-card tone-yellow" style={{marginBottom:'24px'}}>
              <h3>Address</h3>
              <p style={{display:'flex', gap:'8px', alignItems:'flex-start', marginBottom:'8px'}}>
                <MapPin size={18} style={{flexShrink:0, marginTop:'2px'}} />
                Behind JK Petrol Pump, Karad
              </p>
              <p style={{display:'flex', gap:'8px', alignItems:'flex-start'}}>
                <MapPin size={18} style={{flexShrink:0, marginTop:'2px'}} />
                Vidyanagar, Karad, Dist. Satara 415 124
              </p>
            </div>
            <div className="feature-card tone-sky" style={{marginBottom:'24px'}}>
              <h3>Phone & WhatsApp</h3>
              <p><a href="tel:+918975756530" style={{color:'inherit', fontWeight:700}}>8975756530</a></p>
              <a href="https://wa.me/918975756530" target="_blank" rel="noreferrer"
                style={{display:'inline-flex', alignItems:'center', gap:'8px', marginTop:'12px', padding:'10px 20px', background:'var(--mint)', color:'var(--ink)', fontWeight:700, borderRadius:'999px', border:'2.5px solid var(--ink)', boxShadow:'3px 3px 0 var(--ink)', textDecoration:'none'}}>
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
            <div className="feature-card tone-mint">
              <h3>Email</h3>
              <p>[CONFIRM: email]</p>
            </div>
          </div>

          <motion.form onSubmit={handleSubmit}
            style={{background:'var(--card)', border:'var(--line)', borderRadius:'var(--r-lg)', padding:'32px', boxShadow:'var(--pop-lg)'}}
            initial={{opacity:0, x:24}} animate={{opacity:1, x:0}} transition={{delay:0.2, duration:0.5}}>
            <h2 style={{marginBottom:'24px', fontSize:'1.5rem'}}>Send us a Message</h2>
            {error && <div style={{background:'#fff0f0', border:'2px solid var(--red)', borderRadius:'var(--r-sm)', padding:'10px 14px', marginBottom:'16px', color:'var(--red)', fontWeight:600}}>{error}</div>}
            <div className="input-group" style={{marginBottom:'16px'}}>
              <label>Your Name *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your full name" style={{width:'100%', padding:'10px 14px', border:'2px solid var(--ink)', borderRadius:'var(--r-sm)', fontSize:'1rem', fontFamily:'inherit'}} />
            </div>
            <div className="input-group" style={{marginBottom:'16px'}}>
              <label>Class / Standard</label>
              <input type="text" name="studentClass" value={form.studentClass} onChange={handleChange} placeholder="e.g. 11th NEET" style={{width:'100%', padding:'10px 14px', border:'2px solid var(--ink)', borderRadius:'var(--r-sm)', fontSize:'1rem', fontFamily:'inherit'}} />
            </div>
            <div className="input-group" style={{marginBottom:'24px'}}>
              <label>Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Your enquiry or question..." style={{width:'100%', padding:'10px 14px', border:'2px solid var(--ink)', borderRadius:'var(--r-sm)', fontSize:'1rem', fontFamily:'inherit', resize:'vertical'}} />
            </div>
            <button type="submit" className="login-submit-btn" style={{width:'100%'}}>
              Send via WhatsApp
            </button>
            <p style={{textAlign:'center', marginTop:'12px', fontSize:'0.9rem', color:'var(--ink-soft)'}}>This will open WhatsApp with your message pre-filled.</p>
          </motion.form>
        </div>

        <div style={{marginTop:'48px', border:'2.5px solid var(--ink)', borderRadius:'var(--r-lg)', overflow:'hidden', boxShadow:'var(--pop)'}}>
          {/* REPLACE IMAGE — Map placeholder for Karad, Dist. Satara */}
          <div style={{background:'var(--paper-2)', height:'320px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'12px'}}>
            <MapPin size={48} style={{color:'var(--red)'}} />
            <p style={{fontWeight:700, fontSize:'1.1rem'}}>LP Academy, Karad</p>
            <p style={{color:'var(--ink-soft)'}}>Vidyanagar, Karad, Dist. Satara 415 124</p>
            <a href="https://maps.google.com/?q=Karad+Dist+Satara+Maharashtra" target="_blank" rel="noreferrer"
              style={{padding:'10px 20px', background:'var(--yellow)', color:'var(--ink)', fontWeight:700, borderRadius:'999px', border:'2.5px solid var(--ink)', boxShadow:'3px 3px 0 var(--ink)', textDecoration:'none'}}>
              Open in Google Maps
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
