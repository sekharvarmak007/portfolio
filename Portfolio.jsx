import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, Server, Layout, Database, Wrench,
    ExternalLink, Github, Send, Mail, Linkedin,
    Menu, X, ArrowRight
} from 'lucide-react';

// --- Typewriter Hook ---
const useTypewriter = (words) => {
    const [display, setDisplay] = useState('');
    const [idx, setIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[idx % words.length];
        const speed = deleting ? 45 : 95;
        const t = setTimeout(() => {
            if (!deleting) {
                setDisplay(word.slice(0, display.length + 1));
                if (display.length + 1 === word.length) setTimeout(() => setDeleting(true), 1800);
            } else {
                setDisplay(word.slice(0, display.length - 1));
                if (display.length - 1 === 0) { setDeleting(false); setIdx(i => i + 1); }
            }
        }, speed);
        return () => clearTimeout(t);
    }, [display, deleting, idx, words]);

    return display;
};

// --- Main Portfolio Component ---
const Portfolio = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const roles = useTypewriter(['Full Stack Developer', 'MERN Stack Engineer', 'Problem Solver', 'Editorial Thinker']);

    useEffect(() => {
        const handleMouseOver = (e) => {
            const t = e.target;
            const isClickable = t.tagName.toLowerCase() === 'a' || t.tagName.toLowerCase() === 'button' ||
                t.closest('a') !== null || t.closest('button') !== null ||
                t.tagName.toLowerCase() === 'input' || t.tagName.toLowerCase() === 'textarea';
            setIsHovering(isClickable);
        };
        window.addEventListener('mouseover', handleMouseOver);
        return () => window.removeEventListener('mouseover', handleMouseOver);
    }, []);

    useEffect(() => {
        const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
        const scroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('mousemove', move);
        window.addEventListener('scroll', scroll);
        return () => { window.removeEventListener('mousemove', move); window.removeEventListener('scroll', scroll); };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsMessageSent(true);
        setTimeout(() => setIsMessageSent(false), 3000);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.13 } }
    };

    const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

    const skills = [
        {
            icon: <Code2 size={18} />, title: 'Programming',
            items: [{ n: 'Java', p: 85 }, { n: 'JavaScript', p: 90 }]
        },
        {
            icon: <Layout size={18} />, title: 'Frontend',
            items: [{ n: 'React.js', p: 88 }, { n: 'Tailwind CSS', p: 95 }, { n: 'HTML/CSS', p: 92 }]
        },
        {
            icon: <Server size={18} />, title: 'Backend',
            items: [{ n: 'Node.js', p: 80 }, { n: 'Express.js', p: 85 }, { n: 'Spring Boot', p: 75 }]
        },
        {
            icon: <Database size={18} />, title: 'Database',
            items: [{ n: 'MongoDB', p: 85 }, { n: 'MySQL', p: 80 }]
        },
        {
            icon: <Wrench size={18} />, title: 'Tools & Integrations',
            items: [{ n: 'Git & GitHub', p: 90 }, { n: 'Postman', p: 85 }, { n: 'Cloudinary', p: 80 }, { n: 'Razorpay', p: 75 }]
        },
    ];

    const projects = [
        {
            title: 'RebookX',
            desc: 'A full-stack marketplace for second-hand books and notes. Facilitates peer-to-peer academic resource sharing with seamless payment and image hosting integrations.',
            tech: ['MERN Stack', 'Tailwind CSS', 'Razorpay', 'Cloudinary'],
            initial: 'R',
            demoLink: '#', // Add your actual live demo link here
            sourceLink: 'https://github.com/sekharvarmak007/RebookX',
        },
        {
            title: 'Roadside Logistics Super-App',
            desc: 'A comprehensive mobility platform consolidating ride-hailing, package logistics, and emergency mechanic services into one scalable, unified solution.',
            tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
            initial: 'L',
            demoLink: '#', // Add your actual live demo link here
            sourceLink: 'https://github.com/sekharvarmak007/RoadSide_Res-Q_Logistics-Super_App',
        },
        {
            title: 'Patent Management Website',
            desc: 'A specialized platform for managing and tracking intellectual property and patent life cycles securely and efficiently.',
            tech: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
            initial: 'P',
            demoLink: '#', // Add your actual live demo link here
            sourceLink: '#', // Add your actual source link here
        },
    ];

    const colors = {
        bg: '#F9F7F2',
        card: '#FFFFFF',
        text: '#283618',
        textMuted: 'rgba(40,54,24,0.7)',
        accent: '#BC6C25',
        border: 'rgba(40,54,24,0.1)'
    };

    return (
        <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif" }}>

            {/* ===== AMBIENT BACKGROUND ===== */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
                {/* Very subtle editorial gradient backdrop */}
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    background: 'radial-gradient(circle at 10% 10%, #FFFFFF 0%, transparent 40%), radial-gradient(circle at 90% 90%, #FFFFFF 0%, transparent 40%)',
                    opacity: 0.6
                }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            </div>

            {/* ===== CURSOR DOT ===== */}
            <motion.div
                className="fixed rounded-full pointer-events-none z-[100] hidden md:block transition-colors"
                style={{
                    marginLeft: isHovering ? -24 : -8,
                    marginTop: isHovering ? -24 : -8,
                    border: isHovering ? `1px solid ${colors.accent}` : 'none',
                    backgroundColor: isHovering ? 'rgba(188, 108, 37, 0.1)' : colors.accent
                }}
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    width: isHovering ? 48 : 16,
                    height: isHovering ? 48 : 16,
                    opacity: isHovering ? 1 : 0.5
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
            />

            {/* ===== NAVBAR ===== */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8"
            >
                <div
                    className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500"
                    style={{
                        background: scrolled ? 'rgba(188, 108, 37, 0.95)' : 'rgba(188, 108, 37, 0.85)',
                        backdropFilter: 'blur(12px)',
                        border: scrolled ? `1px solid rgba(255,255,255,0.2)` : '1px solid transparent',
                        boxShadow: scrolled ? '0 4px 20px rgba(40,54,24,0.1)' : 'none'
                    }}
                >
                    {/* Elegant Minimal "S" Logo */}
                    <a href="#home" className="group/logo flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500 hover:scale-110" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 15px rgba(255,255,255,0.1)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover/logo:rotate-12">
                            <path d="M17 9.5a5.5 5.5 0 0 0-10 0c0 4.5 10 3 10 7.5a5.5 5.5 0 0 1-10 0" />
                        </svg>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`}
                                className="text-sm font-medium transition-colors duration-300 relative group" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                <span className="group-hover:text-white transition-colors">{link}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                                    style={{ backgroundColor: '#FFFFFF' }} />
                            </a>
                        ))}
                    </div>

                    {/* Hire Me + mobile toggle */}
                    <div className="flex items-center gap-3">
                        <a href="#contact"
                            className="hidden md:flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                            style={{ backgroundColor: '#FFFFFF', color: colors.accent }}>
                            Hire Me
                        </a>
                        <button className="md:hidden p-2 rounded-lg transition-colors"
                            style={{ color: colors.accent, background: '#FFFFFF', border: `1px solid rgba(255,255,255,0.2)` }}
                            onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                            className="md:hidden mt-2 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl"
                            style={{ background: colors.card, border: `1px solid ${colors.border}` }}
                        >
                            {navLinks.map(link => (
                                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                                    className="block px-6 py-4 text-sm font-medium transition-colors border-b last:border-0"
                                    style={{ color: colors.textMuted, borderColor: colors.border }}>
                                    {link}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10">

                {/* ===== HERO ===== */}
                <section className="min-h-screen flex flex-col justify-center pt-28 pb-10" id="home">
                    <div className="flex flex-col lg:flex-row items-center gap-16 w-full">

                        {/* Left — Text */}
                        <motion.div className="flex-1 space-y-7 order-2 lg:order-1"
                            initial="hidden" animate="visible" variants={stagger}>

                            <motion.div variants={fadeUp}>
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
                                    style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}`, color: colors.accent, boxShadow: '0 2px 10px rgba(40,54,24,0.03)' }}>
                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: colors.accent }} />
                                    Open to Opportunities
                                </span>
                            </motion.div>

                            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
                                Hi, I'm <br />
                                <span>Sekhar Varma</span>
                            </motion.h1>

                            {/* Typewriter */}
                            <motion.div variants={fadeUp} className="flex items-center gap-2.5 text-xl md:text-2xl font-medium" style={{ minHeight: '2rem' }}>
                                <span style={{ color: colors.accent }}>{roles}</span>
                                <span className="w-0.5 h-6 rounded-full animate-pulse"
                                    style={{ backgroundColor: colors.accent }} />
                            </motion.div>

                            <motion.p variants={fadeUp} className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: colors.textMuted }}>
                                Aspiring full-stack developer building scalable web apps and startup products. Designing with purpose, coding with precision.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
                                <a href="#projects"
                                    className="px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_8px_25px_rgba(40,54,24,0.2)]"
                                    style={{ backgroundColor: colors.text }}>
                                    View Projects
                                </a>
                                <a href="#contact"
                                    className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_8px_25px_rgba(40,54,24,0.08)]"
                                    style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}`, color: colors.text, boxShadow: '0 4px 15px rgba(40,54,24,0.03)' }}>
                                    Contact Me
                                </a>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-4">
                                {[
                                    { icon: <Github size={18} />, href: 'https://github.com/sekharvarmak007', label: 'GitHub' },
                                    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/sekhar-varma-kokkiligadda-8206a22b9/', label: 'LinkedIn' },
                                    { icon: <Mail size={18} />, href: 'mailto:varma07a@gmail.com', label: 'Email' },
                                ].map((s, i) => (
                                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="p-3 rounded-full transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_10px_20px_rgba(188,108,37,0.15)] group"
                                        style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}`, color: colors.text, boxShadow: '0 2px 10px rgba(40,54,24,0.03)' }}>
                                        <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:text-[#BC6C25]">
                                            {s.icon}
                                        </div>
                                    </a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right — Profile Photo */}
                        <motion.div
                            className="relative flex-shrink-0 order-1 lg:order-2"
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                        >
                            {/* Photo */}
                            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] rounded-full overflow-hidden z-10 transition-transform duration-700 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(40,54,24,0.12)]"
                                style={{ border: `8px solid ${colors.card}`, boxShadow: '0 20px 40px rgba(40,54,24,0.08)' }}>
                                <img src="/profile.jpg" alt="Sekhar Varma" className="w-full h-full object-cover object-top" />
                                {/* Vintage/Warm overlay */}
                                <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{ backgroundColor: '#D4A373' }}></div>
                            </div>

                            {/* Decorative shapes */}
                            <div className="absolute top-10 -right-8 w-24 h-24 rounded-full -z-10" style={{ backgroundColor: colors.accent, opacity: 0.1 }} />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full -z-10 bg-white" style={{ opacity: 0.5 }} />

                            <motion.div
                                className="absolute bottom-4 -right-4 px-5 py-3 rounded-2xl text-xs font-semibold backdrop-blur-md z-20 shadow-lg"
                                style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: `1px solid ${colors.border}`, color: colors.text }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                MERN Stack
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ===== STATS ROW ===== */}
                <section className="pb-24 pt-8">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            { num: '5+', label: 'Projects Built' },
                            { num: '10+', label: 'Technologies' },
                            { num: '2', label: 'Startup Ideas' },
                            { num: '∞', label: 'Curiosity Level' },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeUp}
                                className="text-center p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(40,54,24,0.06)] group"
                                style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 4px 20px rgba(40,54,24,0.03)' }}
                            >
                                <div className="text-4xl md:text-5xl font-black mb-2 transition-transform duration-300 group-hover:scale-110" style={{ color: colors.text }}>{stat.num}</div>
                                <div className="text-sm font-medium" style={{ color: colors.accent }}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ===== ABOUT ===== */}
                <section className="pb-24" id="about">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
                        <div className="rounded-[40px] p-8 md:p-16 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(40,54,24,0.08)]" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 10px 40px rgba(40,54,24,0.03)' }}>

                            <div className="max-w-3xl relative z-10">
                                <p className="text-sm font-bold tracking-[0.1em] mb-4 uppercase" style={{ color: colors.accent }}>— Who I Am</p>
                                <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight" style={{ color: colors.text }}>
                                    Building with purpose. <br className="hidden md:block" /> Designing with clarity.
                                </h2>
                                <p className="text-lg leading-relaxed mb-10" style={{ color: colors.textMuted }}>
                                    I'm an aspiring Full-Stack Developer with a strong passion for Java and the MERN stack.
                                    I love building scalable web applications, exploring startup ideas, and solving real-world problems with code.
                                    I'm constantly improving my backend architecture skills through hands-on, practical projects.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6" style={{ borderTop: `1px solid ${colors.border}` }}>
                                    {[
                                        { title: 'Curiosity', desc: 'Always diving into new tech stacks and backend architectures.' },
                                        { title: 'Innovation', desc: 'Building practical tools that bridge ideas and real-world impact.' },
                                        { title: 'Startup Mindset', desc: 'Thinking beyond code — from UX to market fit.' },
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <h4 className="font-bold text-lg mb-2" style={{ color: colors.text }}>{item.title}</h4>
                                            <p className="text-sm leading-relaxed" style={{ color: colors.textMuted }}>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative graphic */}
                            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-5 pointer-events-none" style={{ backgroundColor: colors.text }}></div>
                        </div>
                    </motion.div>
                </section>

                {/* ===== SKILLS ===== */}
                <section className="pb-24" id="skills">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                        <p className="text-sm font-bold tracking-[0.1em] mb-3 uppercase" style={{ color: colors.accent }}>— Capabilities</p>
                        <h2 className="text-4xl md:text-5xl font-black" style={{ color: colors.text }}>
                            Technical Arsenal
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((cat, idx) => (
                            <motion.div key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(188,108,37,0.08)] cursor-default group"
                                style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 4px 20px rgba(40,54,24,0.03)' }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: colors.bg, color: colors.accent }}>
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#BC6C25]" style={{ color: colors.text }}>{cat.title}</h3>
                                </div>
                                <div className="space-y-6">
                                    {cat.items.map((skill, i) => (
                                        <div key={i} className="group/skill cursor-default transition-all duration-300 hover:scale-[1.03]">
                                            <div className="flex justify-between text-sm mb-2 font-medium transition-colors duration-300 group-hover/skill:text-[#283618]" style={{ color: colors.textMuted }}>
                                                <span>{skill.n}</span>
                                                <span className="opacity-70 group-hover/skill:opacity-100 transition-opacity">{skill.p}%</span>
                                            </div>
                                            <div className="h-2 rounded-full overflow-hidden transition-all duration-300 group-hover/skill:h-2.5 group-hover/skill:shadow-[0_0_8px_rgba(188,108,37,0.4)]" style={{ backgroundColor: colors.bg }}>
                                                <motion.div
                                                    initial={{ width: 0 }} whileInView={{ width: `${skill.p}%` }}
                                                    viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                                                    className="h-full rounded-full transition-colors duration-300"
                                                    style={{ backgroundColor: colors.accent }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===== PROJECTS ===== */}
                <section className="pb-24" id="projects">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                        <p className="text-sm font-bold tracking-[0.1em] mb-3 uppercase" style={{ color: colors.accent }}>— Work</p>
                        <h2 className="text-4xl md:text-5xl font-black" style={{ color: colors.text }}>
                            Featured Deployments
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {projects.map((proj, idx) => (
                            <motion.div key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="group rounded-[32px] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(40,54,24,0.08)]"
                                style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 10px 30px rgba(40,54,24,0.04)' }}
                            >
                                {/* Project card header (Minimal graphic) */}
                                <div className="h-64 flex items-center justify-center relative overflow-hidden transition-colors duration-500 group-hover:bg-[#f2efe6]" style={{ backgroundColor: colors.bg }}>
                                    <div className="text-[120px] font-black opacity-5 select-none transition-transform duration-700 group-hover:scale-110 group-hover:opacity-10" style={{ color: colors.text }}>
                                        {proj.initial}
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/40 backdrop-blur-sm z-20">
                                        <a href={proj.demoLink !== '#' ? proj.demoLink : proj.sourceLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 transition-transform hover:scale-105" style={{ backgroundColor: colors.accent, color: '#fff' }}>
                                            View Project <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-black mb-4" style={{ color: colors.text }}>{proj.title}</h3>
                                    <p className="text-base leading-relaxed mb-8 flex-1" style={{ color: colors.textMuted }}>{proj.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {proj.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                                                style={{ backgroundColor: colors.bg, color: colors.textMuted }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-6 pt-6" style={{ borderTop: `1px solid ${colors.border}` }}>
                                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold transition-all hover:-translate-y-0.5 group/btn" style={{ color: colors.text }}>
                                            <ExternalLink size={16} className="transition-transform group-hover/btn:scale-110" /> Live Demo
                                        </a>
                                        <a href={proj.sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold transition-all hover:-translate-y-0.5 hover:text-[#283618] group/btn" style={{ color: colors.accent }}>
                                            <Github size={16} className="transition-transform group-hover/btn:scale-110" /> Source Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===== CONTACT ===== */}
                <section className="pb-24" id="contact">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="rounded-[40px] p-8 md:p-16 relative overflow-hidden"
                        style={{ backgroundColor: colors.text, color: colors.bg }}
                    >
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="grid lg:grid-cols-2 gap-16 relative z-10">

                            <div>
                                <p className="text-sm font-bold tracking-[0.1em] mb-4 uppercase" style={{ color: colors.accent }}>— Get In Touch</p>
                                <h2 className="text-4xl md:text-5xl font-black mb-6">
                                    Let's start a conversation.
                                </h2>
                                <p className="text-lg leading-relaxed mb-10 opacity-80">
                                    Whether you have an idea for a startup, need a full-stack developer, or just want to chat about tech, I'm all ears.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { icon: <Mail size={20} />, label: 'varma07a@gmail.com', href: 'mailto:varma07a@gmail.com' },
                                        { icon: <Linkedin size={20} />, label: 'SEKHAR VARMA KOKKILIGADDA', href: 'https://www.linkedin.com/in/sekhar-varma-kokkiligadda-8206a22b9/' },
                                        { icon: <Github size={20} />, label: 'sekharvarmak007', href: 'https://github.com/sekharvarmak007' },
                                    ].map((link, i) => (
                                        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-4 group transition-all duration-300 hover:translate-x-3">
                                            <div className="p-4 rounded-full transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                                {link.icon}
                                            </div>
                                            <span className="font-semibold text-sm md:text-base truncate group-hover:text-[#BC6C25] transition-colors duration-300">{link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Name" required
                                            className="w-full px-5 py-4 rounded-2xl text-base outline-none transition-all"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: colors.bg, border: '1px solid rgba(255,255,255,0.1)' }}
                                            onFocus={e => { e.target.style.borderColor = colors.accent; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
                                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                                        />
                                        <input type="email" placeholder="Email" required
                                            className="w-full px-5 py-4 rounded-2xl text-base outline-none transition-all"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: colors.bg, border: '1px solid rgba(255,255,255,0.1)' }}
                                            onFocus={e => { e.target.style.borderColor = colors.accent; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
                                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                                        />
                                    </div>
                                    <textarea rows={5} placeholder="Message" required
                                        className="w-full px-5 py-4 rounded-2xl text-base outline-none transition-all resize-none"
                                        style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: colors.bg, border: '1px solid rgba(255,255,255,0.1)' }}
                                        onFocus={e => { e.target.style.borderColor = colors.accent; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                                    />

                                    <button type="submit" disabled={isMessageSent}
                                        className="w-full py-4 rounded-2xl text-base font-bold transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                        style={{ backgroundColor: colors.accent, color: '#fff', border: isMessageSent ? `1px solid ${colors.accent}` : 'none' }}>
                                        {isMessageSent ? 'Message Sent!' : <><Send size={18} /> Send Message</>}
                                    </button>
                                </form>
                            </div>

                        </div>
                    </motion.div>
                </section>

                {/* ===== FOOTER ===== */}
                <footer className="py-12 text-center" style={{ borderTop: `1px solid ${colors.border}` }}>
                    <p className="text-sm font-medium mb-2" style={{ color: colors.textMuted }}>
                        Designed & Built by <span style={{ color: colors.text, fontWeight: 'bold' }}>Sekhar Varma</span>
                    </p>
                    <p className="text-xs" style={{ color: colors.textMuted, opacity: 0.7 }}>
                        © {new Date().getFullYear()} All rights reserved. Desert Minimal Theme.
                    </p>
                </footer>

            </div>
        </div>
    );
};

export default Portfolio;
