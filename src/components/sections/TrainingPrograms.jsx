import React from 'react';
import { motion } from 'framer-motion';

const TrainingPrograms = () => {
    const programs = [
        {
            id: 1,
            icon: '🎖️',
            title: 'Basic Military Training',
            description: 'Foundation program for building discipline, leadership, and life skills through comprehensive military-style training.',
            benefits: [
                'Discipline and responsibility development',
                'Leadership skills and team building',
                'Physical fitness and mental resilience',
                'Character and courage building'
            ],
            badge: '/01'
        },
        {
            id: 2,
            icon: '⛺',
            title: 'Adventure Camps',
            description: 'Experiential learning through outdoor activities, overnight camps, and team-building adventures.',
            benefits: [
                'Tent camping and outdoor survival skills',
                'Star gazing and nature exploration',
                'Fun activities and DJ nights',
                'Next-level learning experiences'
            ],
            badge: '/02'
        },
        {
            id: 3,
            icon: '📅',
            title: 'Tours & Events',
            description: 'Educational tours and community engagement events that foster civic awareness and patriotic values.',
            benefits: [
                'School partnership programs',
                'Community service initiatives',
                'Cultural and civic engagement',
                'Educational demonstrations'
            ],
            badge: '/03'
        },
        {
            id: 4,
            icon: '🧭',
            title: 'Career Counseling',
            description: 'Comprehensive guidance for students interested in armed forces careers and defense services.',
            benefits: [
                'Armed forces career pathways',
                'NCC preparation support',
                'Life skills development',
                'Future planning guidance'
            ],
            badge: '/04'
        }
    ];

    return (
        <section id="programs" className="section-padding bg-dark">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
                        Training <span className="text-olive">Programs</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Empowering youth through comprehensive training programs designed to build character,
                        discipline, and leadership for a stronger nation.
                    </p>
                </motion.div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            className="card group cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {/* Card Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center text-3xl group-hover:bg-olive/20 transition-colors">
                                        {program.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white mb-1">
                                            {program.title}
                                        </h3>
                                    </div>
                                </div>
                                <span className="text-6xl font-display font-bold text-olive/20 group-hover:text-olive/40 transition-colors">
                                    {program.badge}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {program.description}
                            </p>

                            {/* Benefits List */}
                            <ul className="space-y-3 mb-8">
                                {program.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-olive mt-1">▸</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-olive font-medium group-hover:text-gold transition-colors">
                                <span>Learn More</span>
                                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-olive/0 group-hover:border-olive/30 rounded-xl transition-colors pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="#contact"
                        className="btn-olive inline-block"
                    >
                        Start Your Journey
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TrainingPrograms;
