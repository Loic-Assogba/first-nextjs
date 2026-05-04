'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Glass } from '../ui/glass';
import { Button } from '../ui/button';

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center flex-col md:flex-row gap-5 lg:gap-10 p-4 md:p-6 max-w-6xl mx-auto min-h-[90vh] overflow-hidden">
            <article className="md:w-1/2 space-y-4">
                <div className="space-y-1">
                    <h2 className="text-xl font-thin md:text-2xl">
                        Salut, je suis Hermann Richy
                    </h2>
                    <h1 className="text-xl font-extrabold md:text-2xl lg:text-5xl">
                        Je crée des Expériences Numériques.
                    </h1>
                </div>
                <p className="text-sm lg:text-lg">
                    Du prototype aux systèmes prêts pour la production, je
                    transforme les idées en produits évolutifs et centrés sur
                    l&apos;utilisateur.
                </p>
                <div className="flex gap-2 items-center mt-1  md:gap-5">
                    <Button asChild className="rounded-full px-6">
                        <Link href="/contact">Contactez-moi</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="rounded-full px-6"
                    >
                        <Link href="/#projects">Voir mon travail</Link>
                    </Button>
                </div>
            </article>
            <article className="w-1/2 flex justify-end items-center">
                <div className="relative">
                    <Image
                        src="/hero-square.png"
                        alt="Herrmann Richy"
                        width={300}
                        height={300}
                        className="rounded-full bg-white/10 backdrop-filter backdrop-blur-md shadow-lg"
                    />
                    <Glass
                        nombre="1M+"
                        description="Heures de code"
                        className="absolute top-2 -left-20 lg:top-10"
                    />
                    <Glass
                        nombre="140+"
                        description="Projets réalisés"
                        className="absolute bottom-2 lg:bottom-5 -left-18"
                    />
                    <Glass
                        nombre="500+"
                        description="Clients satisfaits"
                        className="absolute -right-16 -top-10 lg:right-2"
                    />
                    <Glass
                        nombre="10+"
                        description="Ans d'expérience"
                        className="absolute -bottom-6 -right-14 lg:-bottom-10 lg:right-2"
                    />
                </div>
            </article>
        </section>
    );
}
