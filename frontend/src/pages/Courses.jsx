import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, BadgePercent, BookOpenCheck } from "lucide-react";
import AceLogo from "../components/AceLogo";
import "./Courses.css";

const enrollmentMessage =
  "Please contact LP Academy on WhatsApp or call 8975756530 to enquire about admission.";

const courses = [
  {
    title: "Foundation — Classes 8th to 10th",
    fee: "Rs 40,000 / year",
    subjects: "Maths & Science",
    board: "Maharashtra State Board",
    description: "Strong conceptual foundation in Maths and Science with thorough State Board exam preparation.",
    chips: ["State Board", "Classes 8th-10th", "Maths & Science"],
    highlight: "Rs 40,000 per year",
  },
  {
    title: "JEE — Classes 11th & 12th",
    fee: "Rs 80,000 / year",
    subjects: "Physics, Chemistry, Maths",
    board: "Maharashtra State Board + JEE",
    description: "Comprehensive JEE (Mains and Advanced) preparation with Physics, Chemistry and Maths, aligned with State Board syllabus.",
    chips: ["JEE Mains & Advanced", "Classes 11th-12th", "PCM"],
    highlight: "Rs 80,000 per year",
  },
  {
    title: "MHT-CET — Classes 11th & 12th",
    fee: "Rs 80,000 / year",
    subjects: "Physics, Chemistry, Maths / Biology",
    board: "Maharashtra State Board",
    description: "MHT-CET preparation with PCM and PCB tracks, fully aligned with the Maharashtra State Board syllabus.",
    chips: ["MHT-CET", "Classes 11th-12th", "PCM & PCB"],
    highlight: "Rs 80,000 per year",
  },
  {
    title: "NEET — Classes 11th & 12th",
    fee: "Rs 80,000 / year",
    subjects: "Physics, Chemistry, Biology",
    board: "Maharashtra State Board + NEET",
    description: "NEET preparation with focused Biology, Physics and Chemistry coaching aligned with State Board syllabus.",
    chips: ["NEET UG", "Classes 11th-12th", "PCB"],
    highlight: "Rs 80,000 per year",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Courses() {
  return (
    <div className="courses-page">
      <div className="courses-bg-glow courses-bg-glow-left" />
      <div className="courses-bg-glow courses-bg-glow-right" />

      <header className="courses-header">
        <Link to="/" className="courses-back-link">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        <Link to="/" className="courses-brand"><AceLogo size={30} showSub={false} /></Link>
      </header>

      <main className="courses-main">
        <motion.section
          className="courses-hero"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="courses-pill">
            <Sparkles size={14} />
            LP Academy Courses
          </p>
          <h1>Course Fees &amp; Programs</h1>
          <p>
            All programs follow the Maharashtra State Board syllabus. For enquiries, contact us on WhatsApp.
          </p>
        </motion.section>

        <motion.section
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course, i) => (
            <motion.article key={course.title} className={`course-card tone-${i % 4}`} variants={cardVariants}>
              <div className="course-card-top">
                <h2>{course.title}</h2>
                <div className="discount-badge">
                  <BadgePercent size={15} />
                  <span>{course.highlight}</span>
                </div>
              </div>

              <div className="course-pricing">
                <p className="price-primary">{course.fee}</p>
                <p className="price-secondary">{course.subjects}</p>
                <p className="price-six">{course.board}</p>
              </div>

              <div className="course-note">
                <BookOpenCheck size={16} />
                <span>{course.description}</span>
              </div>

              <div className="course-chips">
                {course.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>

              <motion.button
                type="button"
                className="enroll-btn"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/918975756530', '_blank')}
              >
                Enquire on WhatsApp
              </motion.button>
            </motion.article>
          ))}
        </motion.section>

        <section style={{maxWidth:'800px', margin:'60px auto 0', padding:'0 24px'}}>
          <h2 style={{marginBottom:'24px', fontSize:'1.6rem'}}>Fee Summary</h2>
          <table style={{width:'100%', borderCollapse:'collapse', border:'2.5px solid #1c1433', borderRadius:'16px', overflow:'hidden', background:'#fff'}}>
            <thead>
              <tr style={{background:'#ffd60a'}}>
                <th style={{padding:'14px 18px', textAlign:'left', borderBottom:'2.5px solid #1c1433'}}>Program</th>
                <th style={{padding:'14px 18px', textAlign:'left', borderBottom:'2.5px solid #1c1433'}}>Classes</th>
                <th style={{padding:'14px 18px', textAlign:'left', borderBottom:'2.5px solid #1c1433'}}>Fee per Year</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom:'2px solid #ebe4ff'}}>
                <td style={{padding:'13px 18px', fontWeight:700}}>Foundation</td>
                <td style={{padding:'13px 18px'}}>8th – 10th</td>
                <td style={{padding:'13px 18px', color:'#0c9b6a', fontWeight:700}}>Rs 40,000</td>
              </tr>
              <tr style={{borderBottom:'2px solid #ebe4ff'}}>
                <td style={{padding:'13px 18px', fontWeight:700}}>JEE / MHT-CET / NEET</td>
                <td style={{padding:'13px 18px'}}>11th – 12th</td>
                <td style={{padding:'13px 18px', color:'#0c9b6a', fontWeight:700}}>Rs 80,000</td>
              </tr>
              <tr>
                <td style={{padding:'13px 18px', fontWeight:700}}>Hostel (Boys &amp; Girls — separate)</td>
                <td style={{padding:'13px 18px'}}>11th – 12th only</td>
                <td style={{padding:'13px 18px', color:'#0c9b6a', fontWeight:700}}>Rs 70,000 [CONFIRM: food included?]</td>
              </tr>
            </tbody>
          </table>
          <div style={{textAlign:'center', marginTop:'32px'}}>
            <a href="https://wa.me/918975756530" target="_blank" rel="noreferrer"
              style={{display:'inline-flex', alignItems:'center', gap:'8px', padding:'14px 28px', background:'#2ee6a6', color:'#1c1433', fontWeight:700, fontSize:'1rem', borderRadius:'999px', border:'2.5px solid #1c1433', boxShadow:'4px 4px 0 #1c1433', textDecoration:'none'}}>
              Enquire on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
