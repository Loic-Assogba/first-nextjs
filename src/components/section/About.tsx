import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, FileText, Terminal, Code2, Cpu, Database } from 'lucide-react';

export default function About() {
    return (
        <section className="bg-secondary/40 backdrop-blur-md border-white/10 border-l-2 border-l-emerald-500/50  rounded-lg p-6 m-h-screen font-satoshi text-white gap-6 mt-6">
            <div className="flex items-center my-8 flex-col">
                <h1 className="font-flexing text-2xl md:text-4xl lg:text-5xl font-bold ">
                    A propos de moi{' '}
                </h1>
                <p className=" text-sm md:text-lg ">
                    {' '}
                    Je développe des solutions numériques intuitives, alliant
                    performaces et scabilitée, avec une approche
                    collaborative{' '}
                </p>{' '}
            </div>
            <div>
                <div className="bg-secondary/80 p-6 rounded-2xl border border-white/10">
                    <div className="w-fit  bg-primary rounded-xl mb-6 flex items-center justify-center">
                        {/* Image placeholder */}
                        <span className="text-gray-500">
                            <Image
                                src="/aboutimg.webp"
                                alt="about-image"
                                width={100}
                                height={100}
                                className="w-65 h-65 md:w-75 md:h-75 object-fit rounded-lg shadow-lg priority"
                            />
                        </span>
                    </div>
                    <Button> Disponible pour vous</Button>
                    <h2 className="text-2xl font-bold mb-2">Hermann Richy</h2>
                    <p className="text-gray-400 mb-6">
                        Devellopeur Fullstack et CEO de Digital Innovation
                    </p>

                    <div className="flex gap-4 mb-6">
                        <Mail className="text-gray-400 w-8 h-8 hover:text-white cursor-pointer border border-white/10 rounded-full p-2 " />
                        <FileText className="text-gray-400 w-8 h-8 hover:text-white cursor-pointer border border-white/10 rounded-full p-2 " />
                    </div>
                    <Button className="w-full bg-primary py-3 rounded-lg font-medium hover:bg-secondary transition">
                        Connectons-nous
                    </Button>
                </div>

                <div className="md:col-span-2  space-y-12 rounded-lg border border-white/5 flex my-4 lg:flex-row lg:gap-10">
                    <p className="text-md text-gray-400 md:text-lg m-2 p-4">
                        Jeune, dynamique et engagée, je suis prêt à transformer
                        vos ambitions en réalité. J'accompagnons les
                        entrepreneurs, PME et startups SaaS avec des stratégies
                        digitales innovantes et des solutions sur mesure.
                    </p>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 my-4 m-2 p-4">
                        <h2 className="text-3xl font-bold mb-4"></h2>

                        <div className="flex gap-6 items-center">
                            <Code2 className="w-6 h-6 text-primary" />
                            <Database className="w-6 h-6 text-primary" />
                            <Terminal className="w-6 h-6 text-primary" />
                            <Cpu className="w-6 h-6  text-primary" />
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="m-2 p-4 ">
                        <h2 className="text-2xl font-bold mb-6 my-4 mx-2 p-4">
                            Experience
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    role: 'Developpeur Senior',
                                    company: 'FuturCraft Institut',
                                    year: '2024',
                                },
                                {
                                    role: 'CEO et Developper',
                                    company: 'Digital Innovation',
                                    year: '2024',
                                },
                                {
                                    role: 'Developpeur Senior',
                                    company: ' Bénin Events',
                                    year: '2025',
                                },
                                {
                                    role: 'Developpeur Senior',
                                    company: 'Programme Futur',
                                    year: '2022',
                                },
                            ].map((job, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center bg-secondary p-4 rounded-lg border border-white/5"
                                >
                                    <span className="font-semibold">
                                        {job.role} - {job.company}
                                    </span>
                                    <span className="text-gray-500">
                                        {job.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
