import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const faqItems = [
    {
        question: "What is the purpose of the DTC Basic Military Training Program?",
        answer: "The DTC Basic Military Training Program aims to equip young people with essential life skills, including discipline, responsibility, and leadership. Our program encourages physical fitness, critical thinking, and civic awareness, fostering well-rounded individuals prepared to face life's challenges.",
    },
    {
        question: "Who can participate in this training program?",
        answer: "Our program is open to school students interested in developing practical skills, physical fitness, and leadership qualities. We welcome all students, regardless of prior experience, to join and benefit from a structured and supportive training environment.",
    },
    {
        question: "What benefits do cadets gain from this program?",
        answer: "Cadets benefit from enhanced discipline, teamwork skills, and leadership abilities. The training promotes physical fitness, critical thinking under pressure, and a sense of community engagement, helping cadets succeed both in their personal and academic lives.",
    },
    {
        question: "How does DTC ensure the quality and safety of the training?",
        answer: "DTC works with qualified subject experts who provide safe, high-quality instruction tailored to each participant's abilities. Our program includes well-structured training sessions and regular safety protocols to ensure cadets train effectively and safely.",
    },
    {
        question: "Does DTC training prepare cadets for a career in the military?",
        answer: "While the training does impart foundational skills beneficial in a military career, its main focus is on instilling valuable life skills. However, for those interested in pursuing a military career, our program provides early exposure and knowledge that can be advantageous.",
    },
    {
        question: "How does DTC's program differ from other training programs?",
        answer: "DTC's program is unique because it combines discipline, civic responsibility, physical fitness, and leadership skills in a comprehensive structure. Unlike other programs, we emphasize real-world applications and community service, giving cadets an opportunity to make a positive impact.",
    },
];

const FAQItem = ({ item, index, isOpen, onToggle }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-b border-white/10"
        >
            <button
                onClick={onToggle}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-base md:text-lg text-white group-hover:text-[#C5A059] transition-colors duration-300 pr-8">
                    {item.question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-[#C5A059] flex-shrink-0"
                >
                    +
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section className="section bg-[#0a0a0a] relative">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
                    className="mb-12 text-center"
                >
                    <span className="section-number">/FAQ</span>
                    <h2 className="section-title text-white">
                        Frequently <span className="text-[#606C38]">Asked</span>
                    </h2>
                </motion.div>

                {/* FAQ List */}
                <div className="space-y-0">
                    {faqItems.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 mb-6">
                        Didn't find the answer?<br />
                        <span className="text-white">Ask us about our programs!</span>
                    </p>
                    <button className="btn-tactical">
                        Ask Your Question
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
