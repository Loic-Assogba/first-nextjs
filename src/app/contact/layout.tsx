export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <h1>Contact Layout</h1>
            {children}
        </section>
    );
}
