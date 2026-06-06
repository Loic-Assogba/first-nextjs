export default function Projets() {
    const projets = [
        {
            title: 'Benin Events',
            description: 'Tous les meilleurs évènements du Bénin.',
            image: '/images-projets/benin-events.png',
            status: 'SaaS Landing Page',
        },
        {
            title: 'Digital Innovation',
            description:
                'Agence web de communication dédiée à transformer vos idées en succès digital.',
            image: '/images-projets/digital-innovation.png',
            status: 'SaaS Landing Page',
        },
        {
            title: 'FuturCraft Institut',
            description:
                'Centre de formation professionnelle en informatique engagée.',
            image: '/images-projets/futurcraft.png',
            status: 'SaaS Landing Page',
        },
        {
            title: 'Sigi Africa',
            description: 'Agence immobilière qui concrétise vos projets.',
            image: '/images-projets/sigi.png',
            status: 'SaaS Landing Page',
        },
    ];

    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-clash text-white mb-4 text-center">
                Mes Projets
            </h2>
            <p className="text-center text-gray-400 mb-12">
                Un mélange soigneusement sélectionné de projets — évolutifs,
                rapides et prêts pour l’avenir — mêlant design, code et
                créativité.
            </p>
            <div className="grid gap-16 md:grid-cols-2">
                {projets.map((projet, i) => (
                    <div key={i} className="relative">
                        {/* IMAGE */}
                        <img
                            src={projet.image}
                            alt={projet.title}
                            className="w-full h-[350px] md:h-[380px] object-cover rounded-2xl mx-auto"
                        />

                        {/* CARD OVERLAY */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2 
                            -bottom-6 w-[110%] 
                            bg-white/5 backdrop-blur-xl 
                            border border-white/10 
                            rounded-2xl p-6 shadow-xl"
                        >
                            <span
                                className="inline-block mb-3 
                                text-xs px-3 py-1 
                                rounded-full 
                                bg-[#aeff46]/10 text-[#aeff46]"
                            >
                                {projet.status}
                            </span>

                            <h3 className="text-lg font-semibold text-white">
                                {projet.title}
                            </h3>

                            <p className="text-gray-400 text-sm mt-1">
                                {projet.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
