import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
    {
        number: "/01",
        title: "Military Fitness Training",
        description: "Physical conditioning programs designed to build soldier-grade endurance, strength, and mental resilience.",
        tags: ["Endurance", "Strength", "Conditioning"],
        projectCount: 45,
    },
    {
        number: "/02",
        title: "Tactical Skills Development",
        description: "Hands-on training in navigation, survival, and field tactics for civilians and professionals.",
        tags: ["Navigation", "Survival", "Field Tactics"],
        projectCount: 32,
    },
    {
        number: "/03",
        title: "Leadership & Discipline",
        description: "Command training that transforms mindset and builds unshakeable discipline and accountability.",
        tags: ["Command", "Discipline", "Accountability"],
        projectCount: 28,
    },
    {
        number: "/04",
        title: "Corporate Team Building",
        description: "Military-inspired team exercises designed to forge unity, trust, and peak performance in organizations.",
        tags: ["Teamwork", "Trust Building", "Performance"],
        projectCount: 19,
    },
];

const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.2, 1, 0.3, 1] }}
            className="group relative border-b border-white/10 py-8 md:py-12"
        >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Number */}
                <span className="font-mono text-sm text-[#C5A059] tracking-wider shrink-0">
                    {service.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-white group-hover:text-[#606C38] transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                        {service.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-white/10 text-white/60 hover:border-[#606C38]/50 hover:text-[#606C38] transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Project Count */}
                <div className="shrink-0 text-right">
                    <span className="block font-display text-4xl md:text-5xl text-white/20 group-hover:text-[#606C38]/40 transition-colors duration-300">
                        {service.projectCount}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                        Graduates
                    </span>
                </div>
            </div>

            {/* Hover Indicator */}
            <motion.div
                className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#606C38] to-[#C5A059]"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />
        </motion.div>
    );
};

const Services = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section className="section bg-[#0a0a0a] relative">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <span className="section-number">/SERVICES</span>
                    <h2 className="section-title text-white">
                        What We <span className="text-[#606C38]">Deliver</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl">
                        DefKraft delivers military-grade training programs that transform mindset, build resilience, and develop leaders.
                    </p>
                </motion.div>

                {/* Services List */}
                <div className="space-y-0">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <button className="btn-olive">
                        Start Your Training
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
