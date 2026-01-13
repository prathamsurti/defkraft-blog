import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
    {
        name: "Vibgyor High International",
        role: "Academic Leadership",
        company: "Vadodara",
        quote: "Students across grade 1-4 participated with great enthusiasm in overnight stays organized by DTC. Various adventurous activities, tent stays and enthralling activities inculcated next level learning skills. We discovered a new heuristic approach of learning.",
        rating: 5,
    },
    {
        name: "Vidyut Board Vidyalaya",
        role: "High School Administration",
        company: "Gujarat",
        quote: "159 students participated in the DTC activity. This has helped them in developing qualities like character, courage, discipline, leadership and sportsmanship. We are happy to be associated with this noble cause.",
        rating: 5,
    },
    {
        name: "School Partnership Program",
        role: "Educational Institution",
        company: "Gujarat",
        quote: "DTC's extracurricular activity has helped keep our students away from negative forces. Over the years, many students have participated with enthusiasm, developing discipline and leadership skills.",
        rating: 5,
    },
    {
        name: "Parent Testimonial",
        role: "Parent of Cadet",
        company: "Vadodara",
        quote: "My child gained so much more than physical fitness—confidence, resilience, and a sense of civic duty. The transformation has been remarkable. Thank you DefKraft!",
        rating: 5,
    },
    {
        name: "NCC Aspirant",
        role: "Student",
        company: "Gujarat",
        quote: "The training here prepared me for NCC in ways no coaching class could. Physical, mental, and tactical—DTC covers it all. Best decision for my future.",
        rating: 5,
    },
];

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex-shrink-0 w-[320px] md:w-[400px] p-6 md:p-8 bg-[#141414] border border-white/5 rounded-lg hover:border-[#C5A059]/30 transition-all duration-500 group"
        >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#606C38] to-[#3A4A35] flex items-center justify-center">
                    <span className="text-white font-display text-lg">
                        {testimonial.name.charAt(0)}
                    </span>
                </div>
                <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section className="section bg-[#0a0a0a] overflow-hidden relative">
            {/* Grain overlay */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
                    className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div>
                        <span className="section-number">/TESTIMONIALS</span>
                        <h2 className="section-title text-white">
                            People <span className="text-[#C5A059]">Say</span>
                        </h2>
                    </div>

                    {/* Rating Badge */}
                    <div className="flex items-center gap-3 px-4 py-2 bg-[#141414] border border-white/5 rounded-full">
                        <span className="font-display text-2xl text-[#C5A059]">4.9</span>
                        <span className="text-xs text-gray-400">/5 average rating</span>
                    </div>
                </motion.div>

                {/* Scrolling Testimonials */}
                <div className="relative">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                    {/* First Row */}
                    <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide md:overflow-visible md:flex-wrap md:justify-center">
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} index={index} />
                        ))}
                    </div>

                    {/* Second Row */}
                    <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide md:overflow-visible md:flex-wrap md:justify-center mt-6">
                        {testimonials.slice(3).map((testimonial, index) => (
                            <TestimonialCard key={index + 3} testimonial={testimonial} index={index + 3} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <button className="btn-ghost">
                        Share Your Story
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
