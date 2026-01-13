import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerLinks = {
    navigation: [
        { name: "Home", href: "/" },
        { name: "Services", href: "#services" },
        { name: "Pricing", href: "#pricing" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ],
    social: [
        { name: "Instagram", href: "https://instagram.com/defkraft" },
        { name: "Facebook", href: "https://facebook.com/defkraft" },
        { name: "LinkedIn", href: "https://linkedin.com/company/defkraft" },
    ],
};

const Footer = () => {
    return (
        <footer className="relative bg-[#0a0a0a] border-t border-white/5">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                    {/* Brand Column */}
                    <div className="md:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Logo */}
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src="https://res.cloudinary.com/dhqhicb6w/image/upload/v1766132828/bgjf4nc1gwyiuxtzyoqc.png"
                                    alt="DefKraft Logo"
                                    className="w-12 h-12 object-contain"
                                />
                                <span className="font-display text-2xl text-white tracking-wide">DEFKRAFT</span>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                                DefKraft is building soldiers from citizens through military-grade training that transforms mindset, builds resilience, and develops leaders. Every citizen, a soldier.
                            </p>

                            {/* Founder Quote */}
                            <div className="flex items-center gap-4 mt-8">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#606C38] to-[#3A4A35] flex items-center justify-center">
                                    <span className="text-white font-display text-lg">P</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">Pratham Surti</p>
                                    <p className="text-gray-500 text-xs">Founder</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Column */}
                    <div className="md:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-6">
                                Navigation
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.navigation.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Social & Contact Column */}
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-6">
                                Connect
                            </h4>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-8">
                                <a href="tel:+919876543210" className="block text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    +91 98765 43210
                                </a>
                                <a href="mailto:hello@defkraft.com" className="block text-gray-400 text-sm hover:text-white transition-colors duration-300">
                                    hello@defkraft.com
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {footerLinks.social.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-white/10 text-gray-400 text-xs uppercase tracking-wider hover:border-[#606C38] hover:text-[#606C38] transition-all duration-300"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            {/* Newsletter */}
                            <div className="mt-8">
                                <h5 className="text-white text-sm mb-3">Subscribe to updates</h5>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="flex-1 bg-[#141414] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#C5A059] focus:outline-none transition-colors duration-300"
                                    />
                                    <button className="px-6 py-3 bg-[#606C38] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7a8850] transition-colors duration-300">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        © 2025 DefKraft Training. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs">
                        <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-gray-500 hover:text-white transition-colors duration-300">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
