'use client';
import {
    BookOpen,
    Briefcase,
    Mail,
    Menu,
    HelpCircle,
    Users,
    X,
    FolderCode,
} from 'lucide-react';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
    const navigationItems = [
        {
            name: 'Projets',
            href: '/#projects',
            icon: <FolderCode className="w-4 h-4" />,
            exact: true,
        },
        {
            name: 'Services',
            href: '/#services',
            icon: <Briefcase className="w-4 h-4" />,
            exact: false,
        },
        {
            name: 'Témoignages',
            href: '/#testimonials',
            icon: <Users className="w-4 h-4" />,
            exact: false,
        },
        {
            name: 'FAQ',
            href: '/#faq',
            icon: <HelpCircle className="w-4 h-4" />,
            exact: false,
        },
        {
            name: 'Blog',
            href: '/blog',
            icon: <BookOpen className="w-4 h-4" />,
            exact: false,
        },
        {
            name: 'Contact',
            href: '/contact',
            icon: <Mail className="w-4 h-4" />,
            exact: false,
        },
    ];

    return (
        <>
            <header
                className="flex items-center justify-between px-4 py-2 m-2 bg-white/10 backdrop-filter backdrop-blur-sm border border-gray-100 rounded-full sticky top-0 z-10 lg:hidden" >
                <h1>Hermann Richy</h1>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-left">
                                Menu de navigation
                            </AlertDialogTitle>
                        </AlertDialogHeader>
                        <nav className="flex flex-col gap-y-6">
                            <ul className="flex flex-col space-y-4 mt-4">
                                {navigationItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-2 text-sm font-medium text-white"
                                        >
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Button>Book a call</Button>
                        </nav>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="w-fit absolute top-2 right-2">
                                <X />
                            </AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </header>
            <header
                className="hidden lg:flex items-center justify-between p-2 m-2 bg-white/10 backdrop-filter backdrop-blur-sm border border-gray-100 rounded-full sticky top-0 z-10 max-w-6xl mx-auto"
            >
                <h1 className="text-lg font-semibold">
                    <Link href="/">Hermann Richy</Link>
                </h1>
                <nav className="flex gap-x-6 items-center">
                    <ul className="flex space-x-6">
                        {navigationItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center space-x-2 text-sm font-medium text-white hover:text-primary transition-colors"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button className="rounded-full">Book a call</Button>
            </header>
        </>
    );
}
