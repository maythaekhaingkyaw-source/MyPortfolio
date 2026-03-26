/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Server, 
  Network, 
  Terminal, 
  GraduationCap, 
  ChevronRight,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_DATA } from './config/profile';

// Static asset paths from public directory
const cvFile = "./MayThaeKhaingKyawCV.pdf";
const profileImgPath = "./profile.jpg";

const fadeIn = {

  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  const [profileImage, setProfileImage] = useState<string>(profileImgPath);




  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // If the primary image fails, use a professional fallback
    target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
  };

  const [copied, setCopied] = React.useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md z-50 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tighter text-white group">
            {PROFILE_DATA.shortName}<span className="text-blue-500">.</span>
          </a>

          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-[0.1em] text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            <a href="#contact" className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-all">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed inset-x-0 top-16 bg-slate-950/98 backdrop-blur-2xl border-b border-slate-900 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-10 flex flex-col space-y-6 text-sm font-bold tracking-[0.1em] text-slate-400">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 flex items-center justify-between group py-2">
                  About <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 flex items-center justify-between group py-2">
                  Skills <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 flex items-center justify-between group py-2">
                  Education <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-blue-400 flex items-center justify-between group py-2">
                  Contact <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
          <div className="absolute top-[-5%] left-[-2%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-5%] right-[-2%] w-[50%] h-[50%] bg-slate-800/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 text-center lg:text-left z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-900/20 text-blue-400 text-[10px] font-bold tracking-[0.1em] mb-8 border border-blue-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              {PROFILE_DATA.status}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              {PROFILE_DATA.name.split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-blue-500">{PROFILE_DATA.name.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 font-light tracking-tight max-w-lg mx-auto lg:mx-0 leading-relaxed">
              IT student seeking a <span className="text-slate-200 font-medium">System Engineer Internship</span> to gain practical experience in enterprise-grade infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <a 
                href={cvFile} 
                download="MayThaeKhaingKyawCV.pdf"



                className="bg-white text-slate-950 px-6 sm:px-8 py-3.5 rounded-lg font-bold tracking-[0.05em] text-[10px] hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a href="#contact" className="bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-200 px-6 sm:px-8 py-3.5 rounded-lg font-bold tracking-[0.05em] text-[10px] hover:bg-slate-800 hover:border-slate-600 transition-all active:scale-95 flex items-center justify-center">
                Get in Touch
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] aspect-square relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] -z-10 opacity-5 blur-2xl"></div>
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-[10px] sm:border-[12px] border-slate-900 shadow-xl bg-slate-900 relative group">
              <img 
                src={profileImage} 
                alt={PROFILE_DATA.name} 
                className="w-full h-full object-cover"

                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="about" className="bg-slate-950 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-y border-slate-900 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <motion.div {...fadeIn}>
                <h2 className="text-[10px] font-bold text-blue-500 tracking-[0.1em] mb-4 uppercase">01. Profile</h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">Professional <br />Background</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-slate-900/50 backdrop-blur-md text-slate-300 rounded-lg text-[9px] font-bold tracking-[0.05em] border border-slate-800">{PROFILE_DATA.location}</span>
                  <span className="px-3 py-1.5 bg-slate-900/50 backdrop-blur-md text-slate-300 rounded-lg text-[9px] font-bold tracking-[0.05em] border border-slate-800">IT Student</span>
                </div>

              </motion.div>
            </div>
            <div className="lg:col-span-7">
              <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <div className="space-y-6">
                  <p className="text-slate-400 leading-relaxed text-base sm:text-lg md:text-xl font-light tracking-tight">
                    I’m <span className="text-white font-medium">{PROFILE_DATA.name}</span>, {PROFILE_DATA.about.description}
                  </p>
                  <div className="p-5 sm:p-6 bg-slate-900/30 border-l border-blue-600 rounded-r-xl">
                    <p className="text-slate-500 leading-relaxed text-sm sm:text-base md:text-lg italic font-light">
                      "{PROFILE_DATA.about.quote}"
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="mb-10 sm:mb-12 text-center lg:text-left">
            <h2 className="text-[10px] font-bold text-blue-500 tracking-[0.1em] mb-3 sm:mb-4 uppercase">02. Technical Expertise</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight uppercase">Core Competencies</h3>
            <p className="text-slate-400 max-w-lg text-sm sm:text-base md:text-lg font-light mx-auto lg:mx-0 leading-relaxed">Technical proficiencies developed through academic study and practical labs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {PROFILE_DATA.skills.map((skill, index) => (

              <motion.div 
                key={index}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-xl p-6 sm:p-8 group hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 border border-slate-800">
                  {React.cloneElement(skill.icon as React.ReactElement, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-3 sm:mb-4 tracking-tight">{skill.category}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-950/30 rounded-lg border border-slate-800/40 group-hover:border-blue-900/10 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages Section */}
      <section id="education" className="bg-slate-950 py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Education Column */}
            <div>
              <div className="mb-12">
                <h2 className="text-[10px] font-bold text-blue-500 tracking-[0.1em] mb-4 uppercase">03. Education</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight uppercase">Education</h3>
              </div>
              <div className="space-y-10">
                {PROFILE_DATA.education.map((item, index) => (

                  <motion.div 
                    key={index}
                    className="relative pl-8 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  >
                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border flex items-center justify-center bg-slate-950 z-10 transition-all duration-500 ${
                      item.status === 'Present' ? 'border-blue-500' : 'border-slate-800 group-hover:border-slate-600'
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${
                        item.status === 'Present' ? 'bg-blue-500 animate-pulse' : 'bg-slate-700'
                      }`} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {item.course}
                        </h4>
                        {item.status === 'Present' && (
                          <span className="text-[8px] uppercase tracking-[0.1em] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm font-medium">{item.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Column */}
            <div>
              <div className="mb-12">
                <h2 className="text-[10px] font-bold text-blue-500 tracking-[0.1em] mb-4 uppercase">04. Languages</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight uppercase">Language Proficiency</h3>
              </div>
              <div className="space-y-10">
                {PROFILE_DATA.languages.map((item, index) => (

                  <motion.div 
                    key={index}
                    className="relative pl-8 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  >
                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border flex items-center justify-center bg-slate-950 z-10 transition-all duration-500 ${
                      item.status === 'Present' ? 'border-blue-500' : 'border-slate-800 group-hover:border-slate-600'
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${
                        item.status === 'Present' ? 'bg-blue-500 animate-pulse' : 'bg-slate-700'
                      }`} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {item.course}
                        </h4>
                        {item.status === 'Present' && (
                          <span className="text-[8px] uppercase tracking-[0.1em] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm font-medium">{item.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn}>
              <h2 className="text-[10px] font-bold text-blue-500 tracking-[0.1em] mb-4 uppercase">05. Contact</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Ready to contribute and <span className="text-slate-500">grow.</span>
              </h3>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-lg">
                I am seeking a <span className="text-white font-medium">System Engineer Internship</span> to support IT operations and advance my professional career.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center text-blue-500 border border-slate-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 tracking-[0.05em] mb-1">Email</p>
                  <a href={`mailto:${PROFILE_DATA.email}`} className="text-base font-bold text-white hover:text-blue-400 transition-colors break-all">
                    {PROFILE_DATA.email}
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center text-emerald-500 border border-slate-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 tracking-[0.05em] mb-1">Phone</p>
                  <a href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`} className="text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    {PROFILE_DATA.phone}
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/40 border border-slate-800/50 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center text-blue-500 border border-slate-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 tracking-[0.05em] mb-1">Location</p>
                  <p className="text-base font-bold text-white">{PROFILE_DATA.location}</p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-12">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight leading-none">{PROFILE_DATA.name}</h3>
              <p className="text-slate-500 text-[9px] sm:text-[10px] font-bold tracking-[0.1em]">{PROFILE_DATA.role}</p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              {PROFILE_DATA.socials.map((social, i) => (

                <a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 transition-all duration-500"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>

              ))}
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-600 text-[9px] sm:text-[10px] font-bold tracking-[0.1em]">
            <p className="text-center">© {new Date().getFullYear()} MTKK. Professional Portfolio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
