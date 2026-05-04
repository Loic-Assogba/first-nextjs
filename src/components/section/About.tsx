'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, FileText, Terminal, Code2, Cpu, Database } from 'lucide-react';

const experiences = [
    {
        role: 'Développeur Senior',
        company: 'FuturCraft Institut',
        year: '2024',
    },
    { role: 'CEO & Développeur', company: 'Digital Innovation', year: '2024' },
    { role: 'Développeur Senior', company: 'Bénin Events', year: '2025' },
    { role: 'Développeur Senior', company: 'Programme Futur', year: '2022' },
];

const JsLogo = () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
        <rect width="32" height="32" rx="4" fill="#F7DF1E" />
        <path
            d="M19.5 23.5c.5.8 1.1 1.4 2.3 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.7
               0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.6 3.5 2l-1.9 1.2c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.5-1.2 1.1
               0 .8.5 1.1 1.6 1.5l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.4-4 3.4-2.2 0-3.7-1.1-4.4-2.5z
               M11.3 23.8c.4.6.7 1.2 1.5 1.2.8 0 1.2-.3 1.2-1.5V15h2.4v8.6c0 2.5-1.5 3.6-3.6 3.6-1.9 0-3-1-3.6-2.2z"
            fill="#000"
        />
    </svg>
);

const ReactLogo = () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
        <rect width="32" height="32" rx="4" fill="#20232a" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1.5">
            <ellipse cx="16" cy="16" rx="10" ry="4" />
            <ellipse
                cx="16"
                cy="16"
                rx="10"
                ry="4"
                transform="rotate(60 16 16)"
            />
            <ellipse
                cx="16"
                cy="16"
                rx="10"
                ry="4"
                transform="rotate(120 16 16)"
            />
        </g>
        <circle cx="16" cy="16" r="2" fill="#61DAFB" />
    </svg>
);

const NextLogo = () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
        <rect width="32" height="32" rx="4" fill="#000" />
        <path
            d="M16 5a11 11 0 1 0 9.09 17.19L14 13v8.5H11.5V10h2.75l10.56 14.06A11 11 0 0 0 16 5z"
            fill="#fff"
        />
        <path d="M20.5 10H23v8.87L20.5 15.5z" fill="#fff" />
    </svg>
);
const GitLogo = () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
        <rect width="32" height="32" rx="4" fill="#F05032" />
        <path
            d="M27.3 14.7l-10-10a2 2 0 0 0-2.83 0l-2 2 2.53 2.53a2.37 2.37 0 0 1 3 3.02L20.5 14.8a2.37
               2.37 0 1 1-1.42 1.42l-2.5-2.5v6.56a2.37 2.37 0 1 1-2 .06V13.5a2.37 2.37 0 0 1-1.29-3.11
               L10.8 7.88l-6.1 6.1a2 2 0 0 0 0 2.83l10 10a2 2 0 0 0 2.83 0l9.77-9.77a2 2 0 0 0 0-2.84z"
            fill="#fff"
        />
    </svg>
);

const techStack = [
    { label: 'JavaScript', Logo: JsLogo },
    { label: 'React', Logo: ReactLogo },
    { label: 'Next.js', Logo: NextLogo },
    { label: 'Git', Logo: GitLogo },
];
const MailIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 md:w-6 md:h-6 lg:w-9 lg:h-9"
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const LinkedInIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 md:w-6 md:h-6 lg:w-9 lg:h-9"
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const FacebookIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 md:w-6 md:h-6 lg:w-9 lg:h-9"
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const GithubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 md:w-6 md:h-6 lg:w-9 lg:h-9"
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const socials: { label: string; Icon: () => JSX.Element }[] = [
    { label: 'Email', Icon: MailIcon },
    { label: 'LinkedIn', Icon: LinkedInIcon },
    { label: 'Facebook', Icon: FacebookIcon },
    { label: 'GitHub', Icon: GithubIcon },
];

export default function About() {
    return (
        <section className="relative font-satoshi text-white px-7 py-10 overflow-hidden bg-[#050a08]">
            {/* ── Glassmorphism blobs (Tailwind arbitrary values) ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Centre blob */}
                <div className="absolute w-[500px] h-[500px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,primary/[0.04]_0%,primary/[0.07]_55%,transparent_75%)]" />
                {/* Top-left blob */}
                <div className="absolute w-[260px] h-[260px] rounded-full top-1/2 left-1/2 -translate-x-[80%] -translate-y-[60%] bg-[radial-gradient(circle,primary/[0.03]_0%,transparent_70%)]" />
                {/* Bottom-right blob */}
                <div className="absolute w-[220px] h-[220px] rounded-full top-1/2 left-1/2 translate-x-[10%] translate-y-[10%] bg-[radial-gradient(circle,primary/[0.07]_0%,transparent_70%)]" />
            </div>

            {/* ── Section heading ── */}
            <div className="text-center mb-8">
                <h1 className="font-flexing text-4xl md:text-5xl font-bold text-white">
                    À propos de moi
                </h1>
                <p className="mt-3 text-gray-500 text-md max-w-md mx-auto md:text-xl">
                    Je développe des solutions numériques intuitives, alliant
                    performance et scalabilité.
                </p>
            </div>

            {/* ── Main grid ── */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-stretch">
                {/* ════ LEFT CARD ════ */}
                <div className="flex flex-col p-5 backdrop-blur-xl gap-5 md:gap-10 border border-primary/20 border-l-2 border-l-primary rounded-r-2xl">
                    {/* Avatar */}
                    <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-2xl overflow-hidden mb-4 flex-shrink-0 ring-2 ring-primary/40">
                        <Image
                            src="/Aboutimg.webp"
                            alt="Hermann Richy"
                            className="object-cover"
                            priority
                            width={100}
                            height={100}
                        />
                    </div>

                    {/* Availability badge */}
                    <span className="inline-flex items-center gap-2 text-primary text-sm md:text-lg font-medium px-3 py-1 rounded-full mb-4 w-fit bg-emerald-500/10 border border-emerald-500/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        Disponible pour vous
                    </span>

                    {/* Identity */}
                    <h2 className="text-xl font-bold text-white lg:text-2xl my-2">
                        Hermann Richy
                    </h2>
                    <p className="text-gray-400 text-md mt-1 md:text-lg lg:text-xl font-medium my-2">
                        Développeur Fullstack & CEO
                    </p>
                    <p className="text-primary text-md md:text-lg font-medium lg:text-xl mt-1 mb-3">
                        Digital Innovation
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-primary/15 mb-4" />

                    {/* Social icons */}
                    <div className="flex gap-2 mb-4">
                        {socials.map(({ label, Icon }) => (
                            <button
                                key={label}
                                aria-label={label}
                                className="w-[34px] h-[34px] rounded-full p-2 flex items-center justify-center  border hover:bg-primary/100 transition-all duration-200"
                            >
                                <Icon />
                            </button>
                        ))}
                    </div>

                    {/* Push button to bottom */}
                    <div className="flex-1" />

                    <Button className="w-full text-sm md:text-lg lg:text-xl lg:p-4 bg-primary hover:bg-primary text-white font-bold rounded-xl py-5 border-0 transition-colors duration-200">
                        Connectons-nous
                    </Button>
                </div>

                {/* ════ RIGHT CARD ════ */}
                <div className="flex flex-col gap-5 p-6 rounded-2xl backdrop-blur-2xl bg-primary/[0.025]">
                    {/* Bio */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3 lg:text-3xl md:text-2xl">
                            Hello, je suis Hermann Richy
                        </h3>
                        <p className="text-gray-400 text-md leading-relaxed md:text-xl">
                            Jeune, dynamique et engagé, je suis prêt à
                            transformer vos ambitions en réalité. J'accompagne
                            les entrepreneurs, PME et startups SaaS avec des
                            stratégies digitales innovantes et des solutions sur
                            mesure — du frontend pixel-perfect aux architectures
                            backend robustes.
                        </p>
                    </div>

                    <div className="h-px bg-primary/10" />

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3 md:text-3xl">
                            My Tech Stack
                        </h3>
                        <div className="grid grid-cols-4 gap-2">
                            {techStack.map(({ label, Logo }) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center gap-2 rounded-full py-3 px-2 bg-primary/[0.05] border border-primary/15 hover:bg-primary/10 hover:border-primary/35 hover:scale-105 transition-all duration-200 cursor-default"
                                >
                                    <Logo />
                                    <span className="text-[10px] text-gray-400 md:text-sm">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-primary/10" />

                    {/* Experience */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3 md:text-3xl my-3">
                            Expérience
                        </h3>
                        <div className="flex flex-col gap-2">
                            {experiences.map((job, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between rounded-xl px-2 py-3 bg-primary-500/[0.04] border border-primary/10 hover:bg-primary/[0.08] hover:border-emerald-500/30 transition-all duration-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-[7px] h-[7px] rounded-full bg-primary-500 flex-shrink-0" />
                                        <div>
                                            <p className="text-md font-medium lg:text-xl text-white md:text-lg lg:text-xl m-2">
                                                {job.role}
                                            </p>
                                            <p className="text-md md:text-lg lg:text-xl mx-2 text-gray-500 mt-0.5">
                                                {job.company}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm mx-2 text-primary-400 whitespace-nowrap px-2 py-2 rounded-full bg-primary/10 border border-primary/25">
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
