import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full px-6 md:px-12 py-4 md:py-6 flex justify-between items-center z-50 backdrop-blur-md border-b border-white/5 transition-all duration-700 bg-[#0a0a0a]/80">
        {/* Branding - Left Side */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="https://res.cloudinary.com/dhqhicb6w/image/upload/v1766132828/bgjf4nc1gwyiuxtzyoqc.png"
            alt="DefKraft Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display text-lg md:text-xl tracking-wide leading-none text-white/90 group-hover:text-white transition-colors duration-300">
            DEFKRAFT
          </span>
        </Link>

        {/* Navigation Links & CTA - Right Side */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Links - Hidden on Mobile */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-[11px] font-mono uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C5A059] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Always Visible */}
          <button className="px-4 md:px-6 py-2 md:py-2.5 border border-white/20 hover:border-[#606C38] hover:bg-[#606C38] text-white transition-all duration-300 uppercase text-[10px] font-bold tracking-[0.2em]">
            Start Mission
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-3xl uppercase tracking-wide text-white hover:text-[#C5A059] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-8 btn-olive"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Mission
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
