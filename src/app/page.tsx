import Faqs from '@/components/section/Faqs';
import Footer from '@/components/section/Footer';
import Header from '@/components/section/Header';
import About from '@/components/section/About';
import Hero from '@/components/section/Hero';
import Vision from '@/components/section/Vision';
import Projets from './projets/page';
import Testimonials from './temoignages/page';

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Faqs />
            <Projets />
            <Testimonials />
            <Vision />
            <Footer />
        </main>
    );
}
