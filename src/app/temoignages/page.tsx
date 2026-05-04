'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        text: 'Travailler avec Hermann a été un réel plaisir. Son sens du détail et sa créativité ont fait toute la différence.',
        name: 'Aïcha Mensah',
        role: 'Responsable Marketing',
    },
    {
        text: "Ce qui m'a impressionné, c'est sa capacité à comprendre les besoins utilisateurs et proposer des solutions efficaces.",
        name: 'Jean Kouassi',
        role: 'Chef de projet',
    },
    {
        text: 'Une collaboration fluide du début à la fin. Résultat : un produit performant et élégant.',
        name: 'Fatou Diallo',
        role: 'UX Designer',
    },
    {
        text: "Très professionnel et toujours à l'écoute. Je recommande sans hésiter.",
        name: 'Paul Adéoti',
        role: 'Entrepreneur',
    },
    {
        text: 'Un développeur talentueux avec une vraie vision produit.',
        name: 'Mariam Soglo',
        role: 'Product Manager',
    },
    {
        text: 'Une excellente expérience, je retravaillerai avec lui sans hésiter.',
        name: 'David Lawson',
        role: 'CEO Startup',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#0a0f1c] py-20 px-6 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Témoignages
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-400 mb-12"
                >
                    Retours de clients et collaborateurs, reflétant mon
                    engagement envers la qualité.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#111827] border border-[#aeff46]/20 rounded-2xl p-6 shadow-lg hover:shadow-[#aeff46]/20 transition"
                        >
                            <p className="text-gray-300 mb-6">{item.text}</p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#aeff46] flex items-center justify-center text-black font-bold">
                                    {item.name.charAt(0)}
                                </div>

                                <div className="text-left">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-400">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
