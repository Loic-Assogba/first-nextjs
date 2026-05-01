import Faqs from '@/components/section/Faqs';
import Footer from '@/components/section/Footer';
import Header from '@/components/section/Header';
import Hero from '@/components/section/Hero';
import Vision from '@/components/section/Vision';

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Faqs />
            <Vision />
            <Footer />
        </main>
    );
}
