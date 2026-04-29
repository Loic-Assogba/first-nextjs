import Image from 'next/image';
import { Button } from '@/components/ui/button';
export default function About() {
    return (
        <section className="bg-secondary flex flex-col rounded-lg p-6 m-2 font-satoshi text-white gap-6 mt-6">
            <h1 className="items center font-flexing text-2xl md:text-4xl lg:text-5xl font-bold">
                A propos de moi{' '}
            </h1>
            <p className="items-center text-lg ">
                {' '}
                Je développe des solutions numériques intuitives, alliant
                performaces et scabilitéé, avec une approche collaborative{' '}
            </p>
            <div className=" flex py-6 flex-col gap-4  ">
                <Image
                    src="/aboutimg.webp"
                    alt="about-image"
                    width={800}
                    height={600}
                    className="w-30 h-25 object-fit rounded-lg shadow-xl priority"
                />
                <Button> Disponible pour vous</Button>
                <h1>Hermann Richy</h1>
                <p>CEO et fondateur de votre entreprise</p>
                <div></div>
                <Button>Contacter moi</Button>
            </div>

            <div className="bg-primary/30">
                <p>
                    Jeune, dynamique et engagée, je suis prêt à transformer vos
                    ambitions en réalité. J'accompagnons les entrepreneurs, PME
                    et startups SaaS avec des stratégies digitales innovantes et
                    des solutions sur mesure.
                </p>
            </div>
        </section>
    );
}
