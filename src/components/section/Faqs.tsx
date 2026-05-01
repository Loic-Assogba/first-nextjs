export default function Faqs () {
    return(
        <section className="mt-10 flex flex-col justify-center items-center h-full w-full ">
            <h2 className="text-xl font-bold text-center lg:text-2xl">Questions Fréquemment Posées</h2>
            <p className="text-center text-lg mt-2 px-4 lg:text-xl">Réponses aux questions courantes sur mon travail et mon processus</p>
            <div className="mt-10 w-full">
                {questionList({question: "Quels types de projets que vous prenez en charge ?", answer: " Nous gérons une large gamme de projets digitaux : conception et refonte de sites web, développement d’applications,  UI/UX design, marketing digital, community management, et bien plus encore."})}
                {questionList({question: "Combien de temps faut-il pour terminer un projet ?", answer: " La durée dépend de la complexité du projet. Un site web simple peut être finalisé en 2 à 4 semaines, tandis qu’un développement d’application ou une stratégie marketing complète peut prendre plusieurs mois."})}
                {questionList({question: "Est-ce que vous travaillez avec des entreprises à l’étranger ?", answer: " Oui, absolument ! Bien que basés au Bénin, nous collaborons avec des clients à l’international. Grâce à nos outils digitaux, nous assurons un suivi fluide, où que vous soyez."})}
                {questionList({question: "Proposez-vous des services personnalisés selon les besoins ?", answer: " Oui ! Nous savons que chaque entreprise est unique. C’est pourquoi nos services sont entièrement personnalisables pour répondre parfaitement à vos attentes."})}
                {questionList({question: "Quels sont les coûts pour vos services ?", answer: " Les tarifs varient selon la nature et la portée du projet. Contactez-nous pour une consultation gratuite, et nous vous fournirons un devis adapté à vos besoins."})}
            </div>
           
        </section>
    )
}
   

export  function questionList ({question, answer}: {question: string; answer: string}) {
    return (
         <div className="mx-auto mt-5 w-full px-10 ">
             <details className="border border-white/20 bg-[#143607] lg:w-[80%] py-4 rounded-xl group transition-all duration-300">
                 <summary className="flex  items-center h-full list-none focus:outline-none pointer-events-none">
                     <div className="flex w-full md:gap-5 justify-between px-5 items-center h-full pointer-events-auto">
                        <h1 className="text-lg px-2">{question}</h1> 
                       <button className="text-xl border border-white/20 backdrop-blur-md px-2 rounded-full transition-transform duration-300 group-open:rotate-45 bg-white/5 hover:bg-white/10 ">+</button>
                     </div>
                 </summary>
                   <p className="animate-fadeIn p-2">{answer}</p>
             </details>
         </div> 
    )
}
