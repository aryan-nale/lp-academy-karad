import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import AceLogo from "../components/AceLogo";

export default function Results() {
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
          <div className="director-tag" style={{marginBottom:'12px'}}>Achievements</div>
          <h1 style={{fontSize:'clamp(2rem,5vw,3rem)', marginBottom:'12px'}}>Our Results</h1>
          <p style={{fontSize:'1.05rem', color:'var(--ink-soft)', marginBottom:'8px', maxWidth:'780px', lineHeight:1.7}}>
            Results as published by LP Academy. [CONFIRM: student consent]
          </p>
          <p style={{fontSize:'0.95rem', color:'var(--ink-soft)', marginBottom:'48px'}}>
            [CONFIRM: spellings of Akshay Gutar, Thakur Rajage, Pahadkar Pranav, Bhosale Kirtiwant, Aditya Chavan]
            &nbsp;|&nbsp; [CONFIRM: partially obscured NEET CAP-II entries]
          </p>
        </motion.div>

        {/* NEET 2026 */}
        <motion.section initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
          style={{marginBottom:'60px'}}>
          <div style={{background:'var(--ink)', color:'#fff', borderRadius:'var(--r-lg) var(--r-lg) 0 0', padding:'20px 28px', border:'2.5px solid var(--ink)'}}>
            <h2 style={{margin:0, color:'var(--yellow)', fontSize:'1.5rem'}}>NEET 2026</h2>
            <p style={{margin:'4px 0 0', color:'rgba(255,255,255,0.75)', fontSize:'0.95rem'}}>Topper: Swarali Patil — 608/720 (Biology 355/360)</p>
          </div>
          <div style={{overflowX:'auto', border:'2.5px solid var(--ink)', borderTop:'none', borderRadius:'0 0 var(--r-lg) var(--r-lg)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', background:'var(--card)'}}>
              <thead>
                <tr style={{background:'var(--paper-2)'}}>
                  <th style={{padding:'12px 18px', textAlign:'left', borderBottom:'2px solid var(--ink)'}}>Student</th>
                  <th style={{padding:'12px 18px', textAlign:'left', borderBottom:'2px solid var(--ink)'}}>Score (out of 720)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {name:'Swarali Patil', score:'608 (Topper)'},
                  {name:'Shubham Jagtap', score:'580'},
                  {name:'Gaurav Bhosale', score:'564'},
                  {name:'Priyanka Umardand', score:'564'},
                  {name:'Shivkumar Mane', score:'561'},
                  {name:'Aditya Patil', score:'553'},
                  {name:'Revati Bhosale', score:'542'},
                  {name:'Revati Jadhav', score:'540'},
                  {name:'Bhakti Bhoite', score:'526'},
                  {name:'Ananya Deshmukhe', score:'523'},
                  {name:'Yogesh Ingole', score:'518'},
                ].map((s,i) => (
                  <tr key={s.name} style={{borderBottom:'1px solid var(--paper-2)', background: i===0 ? 'rgba(255,214,10,0.12)' : 'transparent'}}>
                    <td style={{padding:'12px 18px', fontWeight: i===0 ? 700 : 400}}>{s.name}{i===0 && <span style={{marginLeft:'8px', background:'var(--yellow)', color:'var(--ink)', fontSize:'0.75rem', padding:'2px 8px', borderRadius:'999px', fontWeight:700}}>Topper</span>}</td>
                    <td style={{padding:'12px 18px'}}>{s.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* JEE Advanced 2026 */}
        <motion.section initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
          style={{marginBottom:'60px'}}>
          <div style={{background:'var(--red)', color:'#fff', borderRadius:'var(--r-lg) var(--r-lg) 0 0', padding:'20px 28px', border:'2.5px solid var(--ink)'}}>
            <h2 style={{margin:0, fontSize:'1.5rem'}}>JEE Advanced 2026</h2>
            <p style={{margin:'4px 0 0', color:'rgba(255,255,255,0.85)', fontSize:'0.95rem'}}>Star Achievers of LP Academy</p>
          </div>
          <div style={{overflowX:'auto', border:'2.5px solid var(--ink)', borderTop:'none', borderRadius:'0 0 var(--r-lg) var(--r-lg)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', background:'var(--card)'}}>
              <thead>
                <tr style={{background:'var(--paper-2)'}}>
                  <th style={{padding:'12px 18px', textAlign:'left', borderBottom:'2px solid var(--ink)'}}>Student</th>
                  <th style={{padding:'12px 18px', textAlign:'left', borderBottom:'2px solid var(--ink)'}}>AIR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {name:'Sanjana Dhas', air:'2068'},
                  {name:'Rahul Godase', air:'2898'},
                  {name:'Sayali Lendave', air:'26717'},
                ].map((s,i) => (
                  <tr key={s.name} style={{borderBottom:'1px solid var(--paper-2)'}}>
                    <td style={{padding:'12px 18px'}}>{s.name}</td>
                    <td style={{padding:'12px 18px', fontWeight:700}}>AIR {s.air}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* MHT-CET 2025 */}
        <motion.section initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
          style={{marginBottom:'60px'}}>
          <div style={{background:'var(--mint-deep)', color:'#fff', borderRadius:'var(--r-lg) var(--r-lg) 0 0', padding:'20px 28px', border:'2.5px solid var(--ink)'}}>
            <h2 style={{margin:0, fontSize:'1.5rem'}}>MHT-CET 2025</h2>
            <p style={{margin:'4px 0 0', color:'rgba(255,255,255,0.85)', fontSize:'0.95rem'}}>Satara District</p>
          </div>
          <div style={{overflowX:'auto', border:'2.5px solid var(--ink)', borderTop:'none', borderRadius:'0 0 var(--r-lg) var(--r-lg)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', background:'var(--card)'}}>
              <thead>
                <tr style={{background:'var(--paper-2)'}}>
                  <th style={{padding:'12px 18px', textAlign:'left', borderBottom:'2px solid var(--ink)'}}>Student</th>
                  <th style={{padding:'12px 18px', textAlign:'left', borderBottom:'2px solid var(--ink)'}}>Percentile</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {name:'Sahil Lade', p:'99.99'},
                  {name:'Manasi Falake', p:'99.99'},
                  {name:'Kadam Shreyash', p:'99.95'},
                  {name:'Pathan Aafan', p:'99.87'},
                  {name:'Akshay Gutar', p:'99.76'},
                  {name:'Thakur Rajage', p:'99.66'},
                  {name:'Pahadkar Pranav', p:'99.35'},
                  {name:'Chougule Uma', p:'99.14'},
                  {name:'Atharv Jadhav', p:'99.14'},
                  {name:'Aaman Diwan', p:'99.04'},
                  {name:'Tawar Sakshi', p:'98.98'},
                  {name:'Bhosale Kirtiwant', p:'98.98'},
                  {name:'Chavan Vedant', p:'98.91'},
                  {name:'Dharme Monika', p:'98.78'},
                  {name:'Sanjana Dhas', p:'98.66'},
                  {name:'Abhimanyu Ghadage', p:'98.57'},
                  {name:'Shraddha Chavan', p:'98.50'},
                  {name:'Suyash Mohite', p:'98.47'},
                  {name:'Jadhav Yash', p:'98.36'},
                  {name:'Aditya Chavan', p:'98.29'},
                  {name:'Patil Jagruti', p:'98.26'},
                  {name:'Patil Tanmay', p:'98.19'},
                  {name:'Gayatri Sawant', p:'98.19'},
                  {name:'Bhosale Prithviraj', p:'98.17'},
                  {name:'Chougale Shivam', p:'98.01'},
                  {name:'Patil Rohan', p:'98.00'},
                ].map((s,i) => (
                  <tr key={s.name+s.p} style={{borderBottom:'1px solid var(--paper-2)', background: i<2 ? 'rgba(255,214,10,0.10)' : 'transparent'}}>
                    <td style={{padding:'12px 18px', fontWeight: i<3 ? 700 : 400}}>{s.name}</td>
                    <td style={{padding:'12px 18px', fontWeight:600, color: parseFloat(s.p)>=99.9 ? '#0c9b6a' : 'inherit'}}>{s.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* NEET 2025 CAP-II MBBS Allotments */}
        <motion.section initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
          style={{marginBottom:'60px'}}>
          <div style={{background:'var(--lilac)', color:'var(--ink)', borderRadius:'var(--r-lg) var(--r-lg) 0 0', padding:'20px 28px', border:'2.5px solid var(--ink)'}}>
            <h2 style={{margin:0, fontSize:'1.5rem'}}>NEET 2025 — CAP-II MBBS Allotments</h2>
            <p style={{margin:'4px 0 0', fontSize:'0.95rem'}}>Government Medical College admissions</p>
          </div>
          <div style={{overflowX:'auto', border:'2.5px solid var(--ink)', borderTop:'none', borderRadius:'0 0 var(--r-lg) var(--r-lg)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', background:'var(--card)'}}>
              <thead>
                <tr style={{background:'var(--paper-2)'}}>
                  <th style={{padding:'12px 18px', textAlign:'left', borderBottom:'2px solid var(--ink)'}}>Student</th>
                  <th style={{padding:'12px 18px', textAlign:'left', borderBottom:'2px solid var(--ink)'}}>College Allotted</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {name:'Amruta Khatake', college:'GSMC Mumbai'},
                  {name:'Ashish Gavade', college:'BJMC Pune'},
                  {name:'Gauri Godase', college:'GMC Mumbai'},
                  {name:'Navanath Bajbale', college:'Tilak MC Mumbai'},
                  {name:'Viraj Kalolikar', college:'VM MC Solapur'},
                  {name:'Pradnya Gole', college:'GMC Miraj'},
                  {name:'Anagha Pimpare', college:'GMC Ratnagiri'},
                  {name:'Anjali Kumbhar', college:'GMC Ambarnath'},
                  {name:'Suraj Kale', college:'GMC Alibaug'},
                  {name:'Anushka Khilare', college:'GMC Ratnagiri'},
                  {name:'Janhavi Ghodake', college:'GMC Ratnagiri'},
                  {name:'Sayali Thorat', college:'Ashwini MC Solapur'},
                  {name:'Nikita Pisal', college:'Walawalkar MC Ratnagiri'},
                ].map((s,i) => (
                  <tr key={s.name} style={{borderBottom:'1px solid var(--paper-2)'}}>
                    <td style={{padding:'12px 18px'}}>{s.name}</td>
                    <td style={{padding:'12px 18px', fontWeight:600}}>{s.college}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <div style={{background:'var(--paper-2)', borderRadius:'var(--r-md)', padding:'24px', border:'var(--line)', textAlign:'center', marginBottom:'24px'}}>
          <p style={{margin:0, fontSize:'0.9rem', color:'var(--ink-soft)'}}>
            Results as published by LP Academy. [CONFIRM: student consent] &nbsp;|&nbsp; Spellings confirmed where possible. [CONFIRM: partially obscured entries]
          </p>
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
