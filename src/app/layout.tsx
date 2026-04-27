import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const flexing = localFont({
    src: './fonts/flexing.otf',
    variable: '--font-flexing',
    display: 'swap',
});

const satoshi = localFont({
    src: './fonts/Satoshi.woff2',
    variable: '--font-satoshi',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Hermann Richy - Portfolio',
    description: 'Software Engineer & Trainer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            className={cn(
                'h-full scroll-smooth',
                'antialiased',
                flexing.variable,
                satoshi.variable
            )}
        >
            <body className="min-h-full flex flex-col font-satoshi">
                {children}
            </body>
        </html>
    );
}
