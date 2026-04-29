'use client' ;
import Image from 'next/image';
import Link from 'next/link';
import { Glass } from '../ui/glass';

export default function Hero () {
    return (
        <section className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <article className='flex flex-col gap-1 mx-2 md:mx-5'>
                <div className='flex flex-col'>
                     <h2 className='text-2xl font-thin md:text-3xl'>Salut, je suis Hermann Richy</h2>
                     <h1 className='text-2xl font-extrabold  md:text-3xl'>Je crée des Expériences Numériques.</h1>
                </div> 
               <p className='my-2 md:w-120 md:my-3'>Du prototype aux systèmes prêts pour la production, je transforme les idées en produits évolutifs et centrés sur l'utilisateur.</p>
               <div className='flex gap-2 items-center mt-1  md:gap-5'>
                <Link href="/contact" className='border border-white bg-primary px-2 py-1 rounded-full text-black md:text-lg'>Contactez-moi</Link>
                <Link href="/#projects" className='border border-white/30 bg-accent px-2 py-1 rounded-full md:text-lg'>Voir mon travail</Link>
               </div>
            </article>
            <article className='h-80 w-full  bg-linear-to-r from-black from-0% to-[#aeff46] to-30%'>
                 <aside className='relative h-full w-full flex justify-center items-center'>
                      <div className='absolute flex justify-center items-center mx-auto h-full w-full'>  <Image
                    src="/herman.png"
                    alt="Herrmann Richy"
                    width={300}
                    height={300}
                    className='w-65 h-65 md:w-75 md:h-75 rounded-full '
                    />
                </div>
                <div className='absolute grid grid-cols-2 gap-x-10 md:gap-x-40'>
                   <span className='flex flex-col gap-15 mt-10'>
                     <Glass nombre="1M+" description="Heures de code" />
                     <Glass nombre="140+" description="Projets réalisés" />
                   </span>
                   <span className='flex flex-col gap-35 md:gap-30'>
                     <Glass nombre="500+" description="Clients satisfaits" />
                     <Glass nombre="10+" description="Ans d'expérience" />
                   </span>
                </div>
                 </aside>
            </article>
        </section>   
    )
}