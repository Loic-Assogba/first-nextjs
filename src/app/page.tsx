import Header from '@/components/section/Header';
import Projets from './projets/page';
import Testimonials from './temoignages/page';

export default function Home() {
    return (
        <main>
            <Header />
            <Projets />
            <Testimonials />
        </main>
    );
}
