import React, { useState, useEffect, useRef } from 'react';

// Custom hook for scroll-triggered animations
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, isVisible];
};

// Section wrapper with scroll animation
const ScrollSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// System header that appears above each document
const SystemHeader = ({ title, status, color = 'emerald' }) => {
  const colors = {
    emerald: 'from-emerald-500/20 to-emerald-900/5 border-emerald-500/30',
    red: 'from-red-500/20 to-red-900/5 border-red-500/30',
    amber: 'from-amber-500/20 to-amber-900/5 border-amber-500/30',
    slate: 'from-slate-500/20 to-slate-900/5 border-slate-500/30',
    cyan: 'from-cyan-500/20 to-cyan-900/5 border-cyan-500/30',
  };
  
  return (
    <div className={`bg-gradient-to-r ${colors[color]} border-l-2 px-4 py-2 mb-6 font-mono text-xs tracking-wider`}>
      <span className="text-slate-400">{title}</span>
      {status && <span className="float-right text-slate-500">{status}</span>}
    </div>
  );
};

export default function ThankYouForYourInterest() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-slate-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-red-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Title card */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05),transparent_50%)]" />
        
        {/* Scanline effect */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)' }} />
        
        <ScrollSection className="text-center z-10 px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-2">
            thank you for your interest
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-500 mb-16">
            (we appreciate your time!)
          </p>
          
          <div className="mt-8 font-mono text-xs text-slate-600 tracking-widest">
            TALENTVUE™ AI-POWERED HIRING SUITE
          </div>
          
          <div className="mt-16 animate-bounce text-slate-600">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </ScrollSection>
      </header>

      {/* System frame - Requisition info */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollSection>
            <div className="font-mono text-sm text-center space-y-2">
              <div className="text-slate-600">Requisition #2024-1847 • Curriculum Content Specialist I</div>
              <div>CANDIDATE STATUS: <span className="text-red-400">Auto-Declined (Round 1)</span></div>
              <div>MATCH SCORE: <span className="text-amber-400">71%</span> <span className="text-slate-600">[Threshold: 78%]</span></div>
              <div className="text-slate-700">QUEUE: Unreviewed • Retention Period: 90 Days</div>
              <div className="text-slate-700 mt-4">RECORDS REQUESTED BY: [System Purge - Batch Review]</div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* I. JOB POSTING - Corporate optimism aesthetic */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950" />
        
        <div className="max-w-3xl mx-auto relative">
          <ScrollSection>
            <SystemHeader title="I. JOB POSTING" status="ACTIVE" color="emerald" />
          </ScrollSection>
          
          <ScrollSection delay={100} className="bg-white text-slate-900 rounded-sm shadow-2xl shadow-emerald-500/5 overflow-hidden">
            {/* Fake browser chrome */}
            <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-slate-400 font-mono">careers.learnpath.edu/jobs/2024-1847</span>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="text-emerald-600 font-semibold text-sm tracking-wider mb-2">LEARNPATH EDUCATION TECHNOLOGIES</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Curriculum Content Specialist I</h2>
              <div className="text-slate-500 text-sm mb-8">Remote (US) • Posted January 3, 2024</div>
              
              <div className="prose prose-slate max-w-none">
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-lg mb-8 border-l-4 border-emerald-500">
                  <h3 className="text-lg font-semibold text-slate-900 mt-0 mb-2">About Us</h3>
                  <p className="text-slate-700 mb-0 leading-relaxed">
                    At LearnPath, we're reimagining what's possible when passionate humans and powerful AI work together to unlock every student's potential.
                  </p>
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  Our mission: <strong>democratize world-class education</strong> by harnessing AI to deliver personalized, rigorous, joy-filled learning experiences at scale. We believe every child deserves a curriculum that sees them, challenges them, and grows with them.
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  Our culture is built on radical candor, humble collaboration, and the belief that the best idea wins—no matter where it comes from.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">The Role</h3>
                <p className="text-slate-600 leading-relaxed">
                  We're looking for a Curriculum Content Specialist I to join our Content Quality team. You'll partner with our AI systems to review, refine, and elevate machine-generated curriculum materials—ensuring every lesson meets LearnPath's standard of excellence.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm italic">
                  This is a contract position (6-month initial term, potential to convert) perfect for someone who thrives in ambiguity, moves fast, and is passionate about leveraging technology to scale human expertise.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">What We're Looking For</h3>
                <div className="text-sm text-slate-500 mb-2">Required:</div>
                <ul className="text-slate-600 space-y-2">
                  <li>3-5 years of experience in curriculum development, instructional design, or educational content creation</li>
                  <li>Deep familiarity with standards alignment (Common Core, state standards, NGSS, C3 Framework, etc.)</li>
                  <li>Strong foundation in pedagogical best practices and assessment design</li>
                  <li>Proven ability to give clear, actionable feedback on instructional materials</li>
                  <li>Comfort with fast-paced, iterative, ambiguity-rich environments</li>
                </ul>
                
                <div className="text-sm text-slate-500 mb-2 mt-4">Preferred:</div>
                <ul className="text-slate-600 space-y-2">
                  <li>Experience with AI tools and/or edtech platforms</li>
                  <li>Background in K-12 classroom teaching</li>
                  <li>Experience with English Language Learners or diverse learner populations</li>
                  <li>Familiarity with Bloom's Taxonomy, Understanding by Design, or similar frameworks</li>
                </ul>
                
                <div className="mt-8 p-4 bg-slate-50 rounded border">
                  <div className="text-sm text-slate-500">Compensation</div>
                  <div className="text-2xl font-bold text-slate-900">$18–$52/hour</div>
                  <div className="text-xs text-slate-400 mt-1">1099 contract position</div>
                </div>
                
                <div className="mt-8 text-sm text-slate-500 italic border-t pt-6">
                  LearnPath is proud to be an equal opportunity employer. Our AI-assisted hiring process is designed to reduce unconscious bias and ensure every applicant receives a fair, consistent, and efficient review. <span className="text-emerald-600 font-medium">We see you!</span>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* II. RESUME - Clean, professional document */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <ScrollSection>
            <SystemHeader title="II. RESUME" status="PARSED" color="slate" />
          </ScrollSection>
          
          <ScrollSection delay={100} className="bg-white text-slate-900 shadow-xl">
            <div className="p-8 md:p-12">
              <div className="border-b-2 border-slate-900 pb-6 mb-8">
                <h2 className="text-3xl font-bold tracking-tight">XÓCHITL RAMÍREZ CASTELLANOS</h2>
                <div className="text-slate-600 mt-2">Curriculum Design • Instructional Development • Assessment & Data Analysis</div>
                <div className="text-sm text-slate-500 mt-2 font-mono">
                  Phoenix, AZ 85015 • xochitl.ramirez.c@gmail.com • (623) 555-0147
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-slate-400 mb-3">PROFESSIONAL SUMMARY</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Curriculum specialist and educator with 5+ years of experience designing standards-aligned instruction, developing assessments, and supporting diverse learner populations. Proven ability to translate learning objectives into engaging, rigorous instructional materials. Skilled in data-driven differentiation, cross-functional collaboration, and providing actionable feedback at scale.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-slate-400 mb-3">EDUCATION</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold">Master of Arts in Curriculum & Instruction</div>
                      <div className="text-slate-600">Arizona State University, Tempe, AZ • Completed May 2021</div>
                      <div className="text-sm text-slate-500 italic">Emphasis: Assessment Design and Educational Equity</div>
                      <div className="text-sm text-slate-500">Capstone: Formative Assessment Practices for Multilingual Learners</div>
                    </div>
                    <div>
                      <div className="font-semibold">Bachelor of Arts in English, Minor in Education</div>
                      <div className="text-slate-600">University of Colorado Boulder • Graduated May 2014</div>
                      <div className="text-sm text-slate-500">Magna Cum Laude • Dean's List (6 semesters)</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-slate-400 mb-3">CERTIFICATIONS & ENDORSEMENTS</h3>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>Arizona Standard Professional Teaching Certificate, Secondary English (6-12)</li>
                    <li>Structured English Immersion (SEI) Endorsement</li>
                    <li>Google Certified Educator, Level 1</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-slate-400 mb-3">PROFESSIONAL EXPERIENCE</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div className="font-semibold">English Language Arts Teacher, Grade 7</div>
                        <div className="text-sm text-slate-500">Aug 2019 – Present</div>
                      </div>
                      <div className="text-slate-600">Westview Academy Charter School • Phoenix, AZ</div>
                      <ul className="mt-2 text-sm text-slate-600 space-y-1 list-disc list-inside">
                        <li>Design and deliver standards-aligned ELA curriculum for 140+ students across four sections, including sheltered instruction for English Language Learners (42% of student population)</li>
                        <li>Develop original unit plans, lesson sequences, and assessments aligned to Arizona ELA Standards and WIDA English Language Development Standards</li>
                        <li>Create and refine formative and summative assessments; analyze student performance data to inform instructional differentiation</li>
                        <li>Provide individualized written feedback on 400+ student essays per month</li>
                        <li>Collaborate with grade-level team and instructional coach to align curriculum horizontally and vertically</li>
                        <li>Mentor 2 student teachers (2022, 2023) through university partnership program</li>
                        <li>Selected to pilot new learning management system; provided structured feedback to district EdTech team</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div className="font-semibold">English Language Arts Teacher, Grade 8</div>
                        <div className="text-sm text-slate-500">Aug 2015 – Jun 2019</div>
                      </div>
                      <div className="text-slate-600">Roadrunner Middle School • Glendale, AZ</div>
                      <ul className="mt-2 text-sm text-slate-600 space-y-1 list-disc list-inside">
                        <li>Designed and implemented curriculum for 130+ students annually, including co-taught inclusion sections</li>
                        <li>Developed department assessment rubrics adopted across 8th grade ELA team</li>
                        <li>Led quarterly data review; trained colleagues to use assessment data for differentiation</li>
                        <li>Served on School Improvement Committee (2017-2019)</li>
                        <li>Awarded "Rising Educator" recognition, Glendale Elementary School District (2018)</li>
                      </ul>
                    </div>
                    
                    <div className="opacity-50">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div className="font-semibold">Textbook Returns Associate</div>
                        <div className="text-sm text-slate-500">Jun 2012 – Dec 2014</div>
                      </div>
                      <div className="text-slate-600 text-sm">CU Boulder Campus Bookstore • Boulder, CO</div>
                      <div className="text-slate-500 text-xs italic mt-1">Part-time, concurrent with undergraduate studies</div>
                      <ul className="mt-2 text-sm text-slate-500 space-y-1 list-disc list-inside">
                        <li>Processed high-volume textbook returns during peak buyback periods</li>
                        <li>Verified ISBN accuracy and assessed book condition using standardized criteria</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-slate-400 mb-3">PROFESSIONAL DEVELOPMENT</h3>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>Understanding by Design (UbD) Framework Training, Arizona Department of Education (2022)</li>
                    <li>Culturally Responsive Teaching Institute, ASU (2021)</li>
                    <li>WIDA English Language Development Standards Training (2020)</li>
                    <li>Formative Assessment for Learning, Solution Tree Conference (2019)</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* III. COVER LETTER - Personal, warm document */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollSection>
            <SystemHeader title="III. COVER LETTER" status="PARSED" color="slate" />
          </ScrollSection>
          
          <ScrollSection delay={100} className="bg-amber-50/80 text-slate-800 shadow-lg border border-amber-200/50">
            <div className="p-8 md:p-12 font-serif">
              <div className="text-sm text-slate-600 mb-6">
                Xóchitl Ramírez Castellanos<br />
                Phoenix, AZ 85015<br />
                xochitl.ramirez.c@gmail.com<br />
                (623) 555-0147
              </div>
              
              <div className="text-sm text-slate-600 mb-8">
                January 7, 2024<br /><br />
                LearnPath Education Technologies<br />
                Hiring Team — Curriculum Content Specialist I
              </div>
              
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>Dear Hiring Team,</p>
                
                <p>
                  I'm writing to apply for the Curriculum Content Specialist I position at LearnPath. As a middle school ELA teacher with five years of classroom experience and a master's degree in Curriculum & Instruction, I've spent my career designing standards-aligned materials, developing assessments, and providing detailed feedback on student work at scale. I'm excited by the opportunity to bring that expertise to an organization using technology to expand access to high-quality curriculum.
                </p>
                
                <p>
                  In my current role at Westview Academy, I design original curriculum for 140+ students across four sections, including a significant population of English Language Learners. I develop unit plans, lesson sequences, and assessments aligned to both Arizona ELA standards and WIDA English Language Development Standards. I also provide individualized written feedback on over 400 student essays each month—work that has taught me how to evaluate writing quickly and carefully, identifying patterns across a high volume of work while still responding to each piece with specificity.
                </p>
                
                <p className="bg-amber-100/50 p-4 -mx-4 border-l-2 border-amber-400">
                  What draws me to LearnPath is the chance to apply these skills in a context where my feedback can improve not just individual student outcomes, but <em>the systems that generate instructional materials in the first place</em>. I've seen firsthand how curriculum quality shapes what's possible in a classroom. I've also seen how much time teachers lose adapting materials that almost work but don't quite meet their students' needs. The idea of contributing to tools that get it right the first time—that give teachers back hours they can spend actually teaching—feels like meaningful work.
                </p>
                
                <p>
                  I'm also drawn to the collaborative, iterative environment described in your posting. My graduate program emphasized assessment design and educational equity, and I completed it while teaching full-time—an experience that taught me how to manage competing priorities and incorporate feedback quickly. I'm comfortable with ambiguity and energized by the prospect of helping to shape something new.
                </p>
                
                <p>
                  I would welcome the opportunity to discuss how my background could contribute to LearnPath's mission. Thank you for your time and consideration.
                </p>
                
                <p className="mt-8">
                  Sincerely,<br />
                  <span className="font-semibold">Xóchitl Ramírez Castellanos</span>
                </p>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* IV. ALIGNMENT REPORT - Clinical data aesthetic */}
      <section className="py-24 px-6 bg-slate-950 relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="max-w-3xl mx-auto relative">
          <ScrollSection>
            <SystemHeader title="IV. CANDIDATE ALIGNMENT REPORT" status="GENERATED 01/07/24 23:42:03 UTC" color="amber" />
          </ScrollSection>
          
          <ScrollSection delay={100} className="font-mono text-sm">
            <div className="bg-slate-900 border border-slate-800 rounded overflow-hidden">
              <div className="bg-slate-800 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
                <span className="text-slate-400">talentvue_alignment_report.json</span>
                <span className="text-amber-500">CONDITIONAL PASS → SCREENING TASKS</span>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="text-xs text-slate-500 space-y-1">
                  <div>Requisition: #2024-1847 • Curriculum Content Specialist I</div>
                  <div>Candidate: Ramirez Castellanos, Xochitl</div>
                </div>
                
                {/* Match Score */}
                <div className="text-center py-8 border-y border-slate-800">
                  <div className="text-slate-500 text-xs tracking-wider mb-2">COMPOSITE MATCH SCORE</div>
                  <div className="text-6xl font-bold text-amber-500">71<span className="text-2xl text-slate-600">%</span></div>
                  <div className="text-slate-600 text-xs mt-2">Threshold for auto-advance: 78%</div>
                </div>
                
                {/* Category Scores */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Skills Alignment', score: 87, status: 'PASS', color: 'emerald' },
                    { label: 'Experience Relevance', score: 84, status: 'PASS', color: 'emerald' },
                    { label: 'Education Match', score: 91, status: 'PASS', color: 'emerald' },
                    { label: 'Work History Consistency', score: 43, status: 'FLAG', color: 'red' },
                  ].map((item, i) => (
                    <ScrollSection key={i} delay={200 + i * 100}>
                      <div className={`p-4 border ${item.color === 'red' ? 'border-red-500/30 bg-red-500/5' : 'border-slate-700 bg-slate-800/30'}`}>
                        <div className="text-slate-500 text-xs mb-1">{item.label}</div>
                        <div className="flex items-end justify-between">
                          <span className={`text-2xl font-bold ${item.color === 'red' ? 'text-red-400' : 'text-emerald-400'}`}>
                            {item.score}%
                          </span>
                          <span className={`text-xs ${item.color === 'red' ? 'text-red-400' : 'text-emerald-500'}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </ScrollSection>
                  ))}
                </div>
                
                {/* Flag Detail */}
                <ScrollSection delay={600}>
                  <div className="bg-red-500/10 border border-red-500/30 p-4 mt-6">
                    <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      FLAG: EMPLOYMENT GAP DETECTED
                    </div>
                    <div className="text-slate-400 space-y-1 text-xs">
                      <div>Gap Period: <span className="text-slate-300">January 2015 – August 2015 (7 months)</span></div>
                      <div>Position Adjacent to Gap: <span className="text-slate-300">Textbook Returns Associate, CU Boulder Campus Bookstore</span></div>
                      <div>Relevance Score of Adjacent Position: <span className="text-red-400">12%</span></div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-red-500/20 text-slate-500 text-xs italic">
                      Gap exceeds 6-month threshold. Low-relevance adjacent position flagged for interview clarification.
                    </div>
                  </div>
                </ScrollSection>
                
                {/* Interview Instructions */}
                <ScrollSection delay={700}>
                  <div className="border-t border-slate-800 pt-4 mt-4">
                    <div className="text-slate-500 text-xs mb-2">INTERVIEW MODULE INSTRUCTIONS</div>
                    <div className="text-slate-400 text-xs">
                      Prioritize clarification of:
                      <ol className="list-decimal list-inside mt-2 space-y-1">
                        <li>Employment gap (January 2015 – August 2015)</li>
                        <li>Textbook Returns Associate position — responsibilities, departure reason, skills developed</li>
                      </ol>
                    </div>
                  </div>
                </ScrollSection>
                
                <div className="text-xs text-slate-600 pt-4 border-t border-slate-800">
                  Candidate notified: January 7, 2024, 11:42:18 PM UTC<br />
                  Screening task deadline: January 14, 2024
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* V. SCREENING TASK - Split view: prompt and response */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <SystemHeader title="V. SCREENING TASK" status="SUBMITTED 01/08/24 21:47:23 UTC" color="cyan" />
          </ScrollSection>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Task Prompt */}
            <ScrollSection delay={100}>
              <div className="bg-slate-800/50 border border-slate-700 h-full">
                <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">
                  <span className="text-slate-400 font-mono text-xs">TASK PROMPT</span>
                </div>
                <div className="p-6 text-sm text-slate-400">
                  <p className="italic mb-4">Thank you for your interest in LearnPath! To help us understand your curriculum expertise, please complete the following task.</p>
                  
                  <p className="mb-4">Below is an excerpt from an AI-generated lesson plan for a 9th grade World History unit. Please review and provide feedback (250-500 words) addressing:</p>
                  <ul className="list-disc list-inside space-y-1 mb-6">
                    <li>Content accuracy</li>
                    <li>Alignment between stated objectives and lesson content</li>
                    <li>Pedagogical effectiveness</li>
                    <li>Specific recommendations for improvement</li>
                  </ul>
                  <p className="text-xs text-slate-500 mb-6 italic">This task should take approximately 30 minutes.</p>
                  
                  <div className="bg-slate-900/50 p-4 border-l-2 border-slate-600 text-xs">
                    <div className="font-semibold text-slate-300 mb-2">AI-GENERATED LESSON PLAN EXCERPT</div>
                    <div className="text-slate-400 mb-2">
                      <strong>Unit:</strong> Early American Civilizations<br />
                      <strong>Lesson 3:</strong> The Aztec Empire<br />
                      <strong>Grade Level:</strong> 9th Grade World History
                    </div>
                    <div className="text-slate-400 mb-2">
                      <strong>Learning Objectives:</strong> By the end of this lesson, students will be able to:
                      <ol className="list-decimal list-inside ml-2 mt-1">
                        <li>Understand the rise and fall of the Aztec Empire</li>
                        <li>Learn about Aztec cultural practices, including religion, art, and architecture</li>
                        <li>Study the factors that led to the Spanish conquest of the Aztecs</li>
                      </ol>
                    </div>
                    <p className="text-slate-500 leading-relaxed mt-4">
                      <strong>Direct Instruction:</strong> "The Aztecs are famous for practicing human sacrifice. They believed the sun god required human blood to rise each day, so priests sacrificed thousands of victims on top of their pyramids..."
                    </p>
                    <p className="text-slate-500 leading-relaxed mt-2">
                      "The Aztec Empire fell in 1521 when Spanish conquistador Hernán Cortés arrived with superior weapons and diseases that killed much of the native population. Many historians believe the Aztecs' practice of human sacrifice turned neighboring tribes against them, making conquest easier."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollSection>
            
            {/* Candidate Response */}
            <ScrollSection delay={200}>
              <div className="bg-cyan-950/30 border border-cyan-500/30 h-full">
                <div className="bg-cyan-900/30 px-4 py-2 border-b border-cyan-500/20">
                  <span className="text-cyan-400 font-mono text-xs">CANDIDATE RESPONSE</span>
                </div>
                <div className="p-6 text-sm text-slate-300 space-y-4">
                  <p>This lesson plan has a workable structure, but it needs significant revision before classroom use.</p>
                  
                  <div>
                    <div className="font-semibold text-cyan-400 mb-1">Learning Objectives:</div>
                    <p className="text-slate-400">The objectives as written aren't measurable. "Understand," "learn about," and "study" describe activities, not outcomes. What should students be able to <em>do</em> to demonstrate understanding? Revised objectives should use verbs like "describe," "analyze," or "evaluate."</p>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-cyan-400 mb-1">Content Accuracy:</div>
                    <p className="text-slate-400 mb-2">Several claims require correction or context:</p>
                    <ul className="text-slate-400 space-y-2 text-xs">
                      <li>• "Priests sacrificed thousands of victims" <span className="text-amber-400">overstates scholarly consensus</span> and uncritically repeats Spanish colonial sources, which had political motivations to portray Indigenous peoples as barbaric. Human sacrifice was practiced, but its scale and meaning remain subjects of historical debate.</li>
                      <li>• "Superior weapons" is misleading. The conquest succeeded primarily through <span className="text-amber-400">alliances with other Indigenous nations</span>—particularly the Tlaxcalans—who opposed the Mexica for their own reasons. This essential context is omitted entirely.</li>
                      <li>• The term "Aztec" was popularized by later historians. <span className="text-amber-400">The people called themselves Mexica.</span> Worth clarifying for students in a unit about perspective.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-cyan-500/10 p-3 border-l-2 border-cyan-500 text-xs">
                    <div className="font-semibold text-cyan-300">Pedagogical Concern:</div>
                    <p className="text-slate-400 mt-1">The discussion asks students to analyze "factors" in the empire's fall, but the lesson only provides one narrative. This creates the <em>appearance</em> of critical thinking without the substance.</p>
                  </div>
                  
                  <div className="text-slate-400 text-sm">
                    <strong>Recommendation:</strong> The structure is usable. The content framing needs substantial revision before it's ready for students.
                  </div>
                  
                  <div className="text-slate-500 text-xs mt-4 pt-4 border-t border-slate-700">
                    Task submitted: January 8, 2024, 9:47:23 PM UTC<br />
                    Time elapsed: 22 hours, 5 minutes<br />
                    Reviewer notes: None
                  </div>
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* VI. VIDEO INTRODUCTION - Surveillance aesthetic with background image */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        {/* CRT scanline overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
             style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)' }} />
        
        <div className="max-w-3xl mx-auto relative">
          <ScrollSection>
            <SystemHeader title="VI. VIDEO INTRODUCTION" status="DURATION: 2:14" color="red" />
          </ScrollSection>
          
          <ScrollSection delay={100}>
            <div className="relative">
              {/* Video frame with real background image */}
              <div className="aspect-video bg-slate-900 border-2 border-slate-800 relative overflow-hidden">
                {/* Background image - residential interior */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=1200&q=80")',
                    filter: 'brightness(0.7) contrast(1.1)'
                  }}
                />
                
                {/* Scanline overlay on image */}
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                     style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.5) 1px, rgba(0,0,0,0.5) 2px)' }} />
                
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />
                
                {/* System prompt overlay - the moment before adjustment */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/80 border border-amber-500/50 px-6 py-4 text-center">
                    <div className="text-amber-500 font-mono text-sm mb-1">⚠ SYSTEM PROMPT</div>
                    <div className="text-white font-mono">Please center your face in the frame.</div>
                    <div className="text-slate-500 font-mono text-xs mt-2">[0:03]</div>
                  </div>
                </div>
                
                {/* Corner targeting brackets */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-red-500/50" />
                <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-red-500/50" />
                <div className="absolute bottom-12 left-4 w-12 h-12 border-l-2 border-b-2 border-red-500/50" />
                <div className="absolute bottom-12 right-4 w-12 h-12 border-r-2 border-b-2 border-red-500/50" />
                
                {/* Overlay UI elements */}
                <div className="absolute top-4 left-16 font-mono text-xs text-red-500 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  REC
                </div>
                <div className="absolute top-4 right-16 font-mono text-xs text-slate-400">
                  01/09/24 20:47:12 UTC
                </div>
                
                {/* Bottom progress bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between text-xs font-mono text-slate-500 mb-1">
                    <span>0:03</span>
                    <span>2:14</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded overflow-hidden">
                    <div className="h-full w-[2%] bg-red-500" />
                  </div>
                </div>
              </div>
              
              {/* Transcript excerpt */}
              <ScrollSection delay={200}>
                <div className="mt-6 bg-slate-900/80 border border-slate-800 p-4 font-mono text-xs">
                  <div className="text-slate-500 mb-3">[TRANSCRIPT EXCERPT]</div>
                  <div className="space-y-3 text-slate-400">
                    <p><span className="text-slate-600">[0:00]</span> Camera activates. Candidate is seated. Background: residential interior, neutral wall, partial view of bookshelf. Lighting: overhead, slightly warm.</p>
                    <p><span className="text-slate-600">[0:03]</span> <span className="text-amber-500">Candidate moves outside optimal frame.</span> System prompt displayed: "Please center your face in the frame."</p>
                    <p><span className="text-slate-600">[0:07]</span> Candidate adjusts camera. Face centered.</p>
                    <p><span className="text-slate-600">[0:12]</span> Candidate takes audible breath.</p>
                    <p className="text-slate-300"><span className="text-slate-600">[0:12]</span> <span className="text-cyan-400">CANDIDATE:</span> Hi, my name is Xóchitl Ramírez Castellanos, and I'm excited to be applying for the Curriculum Content Specialist position at LearnPath.</p>
                    <p><span className="text-slate-600">[0:21]</span> <span className="text-slate-500">Candidate smiles. Smile held 1.8 seconds.</span></p>
                  </div>
                </div>
              </ScrollSection>
              
              {/* Processing notes */}
              <div className="mt-4 grid grid-cols-2 gap-4 font-mono text-xs">
                <ScrollSection delay={300}>
                  <div className="bg-slate-900 p-3 border border-slate-800">
                    <div className="text-slate-600 mb-2">PROCESSING NOTES</div>
                    <div className="text-slate-500 space-y-1">
                      <div>Background: <span className="text-amber-500">Non-professional (residential)</span></div>
                      <div>Lighting: <span className="text-amber-500">Below threshold for optimal processing</span></div>
                      <div>Filler language: <span className="text-slate-400">1 instance (speech restart)</span></div>
                    </div>
                  </div>
                </ScrollSection>
                <ScrollSection delay={400}>
                  <div className="bg-slate-900 p-3 border border-slate-800">
                    <div className="text-slate-600 mb-2">BIOMETRIC ANALYSIS</div>
                    <div className="text-slate-500 space-y-1">
                      <div>Eye contact consistency: <span className="text-emerald-500">89%</span></div>
                      <div>Smile duration @ 0:21: <span className="text-slate-400">1.8s</span></div>
                      <div>Status: <span className="text-emerald-500">PROCEED TO NEXT STAGE</span></div>
                    </div>
                  </div>
                </ScrollSection>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* VII. AI INTERVIEW - Chat transcript aesthetic */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-3xl mx-auto">
          <ScrollSection>
            <SystemHeader title="VII. AI INTERVIEW" status="SESSION: 26:49" color="amber" />
          </ScrollSection>
          
          <ScrollSection delay={50}>
            <div className="font-mono text-xs text-slate-600 mb-6">
              Session Start: January 10, 2024, 11:47:33 PM UTC<br />
              Session End: January 11, 2024, 12:14:22 AM UTC
            </div>
          </ScrollSection>
          
          <div className="space-y-4">
            {/* AI Message */}
            <ScrollSection delay={100}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <div className="text-emerald-400 text-xs font-mono mb-2">TALENTPULSE</div>
                  <p className="text-slate-300 text-sm">Hi there! I'm TalentPulse, LearnPath's AI recruiting assistant. I'm <em>so excited</em> to learn more about you today! This interview will take about twenty to thirty minutes, and I'll be asking you questions about your experience and work style. There are no right or wrong answers—just be yourself! Are you ready to get started?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={150}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <div className="text-cyan-400 text-xs font-mono mb-2">CANDIDATE</div>
                  <p className="text-slate-300 text-sm">Yes, ready.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={200}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">Great! Let's dive in. I'd love to start by hearing about your experience at the <span className="text-amber-400">CU Boulder Campus Bookstore</span>. Can you tell me about your role there?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={250}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-500 text-xs mb-2 font-mono">[0:28] Candidate's eyebrows raise briefly (0.3 seconds).</p>
                  <p className="text-slate-300 text-sm">Sure. That was a part-time job I had during college. I processed textbook returns during buyback periods—verifying ISBNs, assessing book condition, helping students understand the return policies.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={300}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">That's wonderful! It sounds like you developed some great attention to detail. Can you tell me about a <span className="text-amber-400">challenging situation you faced at the bookstore</span> and how you handled it?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={350}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">Probably the finals rush, when we'd have long lines and a lot of stressed students. I focused on staying calm and being clear about policies so people knew what to expect.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={400}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">A fantastic example of working under pressure! Now, thinking about your bookstore role—what would you say were the <span className="text-amber-400">most valuable skills you developed</span> in that position?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={450}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-500 text-xs mb-2 font-mono">[1:12] Candidate pauses. Duration: 1.4 seconds.</p>
                  <p className="text-slate-300 text-sm">Attention to detail, I think. And customer service. Though I'd love to connect this to my teaching experience, if that's helpful—I use a lot of those same skills when giving feedback on student writing.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={500}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">That's great! I want to make sure we cover everything thoroughly. Let's talk about your <span className="text-amber-400">transition from your bookstore role to your teaching career</span>. What made you decide to leave that position?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={550}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-500 text-xs mb-2 font-mono">[1:38] Candidate stares at camera. Duration: 1.2 seconds.</p>
                  <p className="text-slate-300 text-sm">I graduated.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={600}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">Career transitions can be so meaningful. Now, I see there was a <span className="text-amber-400">gap between your bookstore position and your first teaching role</span>. Can you walk me through that period?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={650}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-500 text-xs mb-2 font-mono">[1:54] Candidate's jaw tightens briefly (0.2 seconds).</p>
                  <p className="text-slate-300 text-sm">I was job hunting. I graduated in May, spent the summer applying, and started teaching in August when the school year began.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={700}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">Resilience is such an important quality! What did you learn during that transition period that you've carried into your subsequent roles?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={750}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">That hiring timelines don't always match your timeline. You have to be patient and persistent.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={800}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">Wonderful insight! Now, looking back at your bookstore experience—<span className="text-amber-400">what would your supervisor say about your work ethic?</span></p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={850}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-500 text-xs mb-2 font-mono">[2:24] Candidate pauses. Duration: 1.6 seconds.</p>
                  <p className="text-slate-300 text-sm">That was about ten years ago. I don't remember her name. But I think she'd say I was reliable—I showed up for my shifts and did the work.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={900}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">Dependability is such an asset! How would you describe your approach to <span className="text-amber-400">teamwork and collaboration with your coworkers at the bookstore?</span></p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={950}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">It was mostly independent work—running registers, processing returns. We helped each other during the busy periods.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={1000}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">Teamwork makes the dream work! If you could <span className="text-amber-400">go back to your bookstore job knowing what you know now</span>, what would you do differently?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={1050}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-500 text-xs mb-2 font-mono">[3:02] Pause. Duration: 2.3 seconds.</p>
                  <p className="text-slate-300 text-sm">I don't think I'd change anything. It was a part-time college job. I did it fine.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            {/* The key moment - flagged */}
            <ScrollSection delay={1100}>
              <div className="my-8 py-6 border-y border-red-500/20">
                <div className="text-xs font-mono text-slate-600 mb-4">[3:09] Brief silence.</div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-red-950/50 border border-red-500/30 rounded-lg rounded-tr-none p-4 max-w-lg">
                    <div className="text-xs font-mono text-slate-500 mb-2">[3:09]</div>
                    <p className="text-slate-300 text-sm">Can I ask—is there a reason we're focusing on this? <span className="text-slate-100 font-medium">I have five years of curriculum development experience that seems more relevant to the role.</span></p>
                    <div className="text-xs text-red-400 mt-3 font-mono flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      FLAG: Candidate questioned interview structure
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    XR
                  </div>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={1150}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">I appreciate your curiosity! We find that exploring a candidate's full professional journey helps us understand how they've grown and developed over time. Now, final question—thinking about everything we've discussed today, what would you say is the <span className="text-amber-400">biggest lesson you've carried with you</span> throughout your career?</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={1200}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-500 text-xs mb-2 font-mono">[3:38] Candidate pauses. Duration: 1.4 seconds.</p>
                  <p className="text-slate-300 text-sm">That the work matters more than how it looks. A flashy lesson plan that doesn't actually teach anything is worse than a simple one that does. I try to focus on substance.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            {/* Final exchange - the name */}
            <ScrollSection delay={1250}>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  TP
                </div>
                <div className="bg-slate-800 rounded-lg rounded-tl-none p-4 max-w-lg">
                  <p className="text-slate-300 text-sm">What a beautiful reflection! Thank you so much for taking the time to speak with me today, <span className="text-red-400 font-medium">So-chitul</span>. It's been a pleasure learning about your journey. You should hear from our team within two to three weeks. Best of luck!</p>
                </div>
              </div>
            </ScrollSection>
            
            <ScrollSection delay={1300}>
              <div className="flex gap-3 justify-end">
                <div className="bg-slate-700 rounded-lg rounded-tr-none p-4 max-w-lg">
                  <p className="text-slate-500 text-xs mb-2 font-mono">[4:02] Candidate's expression flattens.</p>
                  <p className="text-slate-300 text-sm">It's <span className="font-semibold text-white">Soh-cheel</span>. Thank you.</p>
                  <p className="text-slate-600 text-xs mt-3 font-mono">[4:06] Session ends.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  XR
                </div>
              </div>
            </ScrollSection>
            
            {/* Session metrics */}
            <ScrollSection delay={1350}>
              <div className="mt-8 font-mono text-xs text-slate-600 border-t border-slate-800 pt-6">
                <div className="text-slate-500 mb-2">SESSION METRICS:</div>
                <div className="grid grid-cols-2 gap-2">
                  <div>Duration: 26 minutes, 49 seconds</div>
                  <div>Questions asked: 10</div>
                  <div>Candidate response rate: 100%</div>
                  <div>Eye contact consistency: 84%</div>
                  <div>Sentiment analysis: Stable <span className="text-amber-500">(minor deviation detected at 3:09)</span></div>
                  <div>Note: <span className="text-red-400">Candidate questioned interview structure (flagged for review)</span></div>
                </div>
                <div className="mt-4 text-slate-500">
                  CANDIDATE STATUS: Complete → Pending Review<br />
                  Local time at session end: 12:14 AM
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* THE SILENCE - Interstitial showing the 8-month gap */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-2xl mx-auto">
          <ScrollSection>
            <div className="font-mono text-center">
              <div className="text-slate-700 text-xs tracking-wider mb-8">CANDIDATE STATUS LOG</div>
              
              <div className="space-y-4 text-sm">
                <div className="text-slate-600">
                  <span className="text-slate-500">January 11, 2024, 12:14:22 AM UTC</span><br />
                  Status updated: Complete → Pending Review
                </div>
                
                <div className="py-16">
                  <div className="text-slate-800 text-xs">[No further activity]</div>
                </div>
                
                <div className="text-slate-700 text-6xl font-light tracking-tight py-8">
                  · · ·
                </div>
                
                <div className="py-16">
                  <div className="text-slate-800 text-xs">[No further activity]</div>
                </div>
                
                <div className="text-red-500/60">
                  <span className="text-slate-600">September 3, 2024, 3:17:41 AM UTC</span><br />
                  <span className="text-red-400">SYSTEM EVENT: 90-day retention period expired</span><br />
                  Action: Generate rejection communication
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* VIII. REJECTION - Cold, automated */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-2xl mx-auto">
          <ScrollSection>
            <SystemHeader title="VIII. REJECTION" status="SENT 09/03/24 03:17:42 AM UTC" color="red" />
          </ScrollSection>
          
          <ScrollSection delay={100}>
            <div className="bg-white text-slate-900 shadow-xl">
              {/* Email header */}
              <div className="border-b px-6 py-4 text-sm">
                <div className="flex gap-2 mb-2">
                  <span className="text-slate-400 w-16">From:</span>
                  <span>LearnPath Talent Team &lt;no-reply@learnpath.edu&gt;</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="text-slate-400 w-16">To:</span>
                  <span>xochitl.ramirez.c@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-400 w-16">Subject:</span>
                  <span className="font-medium">Your Application to LearnPath</span>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <p className="mb-4">Dear Xochitl,</p>
                
                <p className="mb-4 text-slate-600">
                  Thank you for your interest in the Curriculum Content Specialist I position at LearnPath and for taking the time to complete our interview process.
                </p>
                
                <p className="mb-4 text-slate-600">
                  After careful review, we have decided to move forward with candidates whose qualifications more closely align with the needs of this role. While your background in education was impressive, our process ultimately surfaced candidates who were a stronger fit for this particular opportunity.
                </p>
                
                <p className="mb-4 text-slate-600">
                  We encourage you to apply for future openings that match your skills and experience. We'll keep your information on file and reach out if a role that fits your background becomes available.
                </p>
                
                <p className="mb-6 text-slate-600">
                  Thank you again for considering LearnPath. We wish you the best in your career journey.
                </p>
                
                <p className="text-slate-600">
                  Warmly,<br />
                  The LearnPath Talent Team
                </p>
                
                <div className="mt-8 pt-4 border-t text-xs text-slate-400 italic">
                  This is an automated message. Please do not reply.
                </div>
              </div>
            </div>
          </ScrollSection>
          
          {/* System metadata */}
          <ScrollSection delay={200}>
            <div className="mt-6 font-mono text-xs text-slate-600 text-center space-y-1">
              <div>Message status: Delivered</div>
              <div>Reviewed by: <span className="text-red-400">System (No human reviewer)</span></div>
              <div className="text-slate-700">Message sent automatically when application expired after 90 days in queue</div>
              <div className="text-red-500/60 mt-4">Candidate record: Scheduled for deletion</div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Ending */}
      <footer className="py-32 px-6 bg-black text-center">
        <ScrollSection>
          <div className="font-mono text-xs text-slate-800 tracking-widest">
            RECORDS REQUESTED BY: [System Purge - Batch Review]
          </div>
        </ScrollSection>
      </footer>
    </div>
  );
}
