export default function Vision() {
    return (
            <section className='mt-10 py-10 px-5 lg:px-10 flex flex-col justify-center items-center lg:items-start h-full w-full '>
               <div className="border bg-linear-to-b px-5 py-8 lg:w-[80%] from-black from-10% to-[#7DD10F] to-50% w-full h-90 md:h-70 rounded-lg space-y-8">
                      <h2 className="font-bold text-2xl md:w-110">Votre vision, mon expertise. Créons ensemble quelque chose <span className="text-green-400">d'exceptionnel.</span></h2>
                      <p className="text-sm leading-4 md:w-110 md:text-lg md:leading-6">Prêt à commencer ? Planifiez une consultation et façonnons ensemble votre prochain grand projet.</p>
                      <button className="rounded-full bg-green-400 text-black py-2 px-4 text-base">Book a call</button>
               </div>
            </section>
    )
}