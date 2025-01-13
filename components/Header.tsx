"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import Popup from "@/components/Popup";
import { useState, useEffect } from "react";

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.documentElement.classList.add(storedTheme);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-background text-foreground shadow-md z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
                
                {/* Логотип */}
                <Link href="/" className="text-2xl font-bold">
                    {theme === "dark" ? (
                        <Image src="/logo.webp" alt="xTrafikSkola" width={300} height={60} />
                    ):(
                        <Image src="/logo-darkened.png" alt="xTrafikSkola" width={300} height={60} />
                    )}
                </Link>

                {/* Навигация для десктопа */}
                <nav className="hidden md:flex gap-6">
                    <Link href="/about" className="hover:underline">Om Oss</Link>
                    <Link href="/services" className="hover:underline">Tjänster</Link>
                    <Link href="/contact" className="hover:underline">Kontakt</Link>
                </nav>

                {/* CTA Кнопка для десктопа */}
                <Button onClick={() => setIsPopupOpen(true)} className="hidden md:inline-flex">
                    Boka Intensivkurs
                </Button>

                {/* Мобильное меню через @shadcn/ui */}
                <Sheet>
                    <SheetTrigger className="md:hidden">☰</SheetTrigger>
                    <SheetContent>
                        <nav className="flex flex-col gap-4 mt-4">
                            <Link href="/about">Om Oss</Link>
                            <Link href="/services">Tjänster</Link>
                            <Link href="/contact">Kontakt</Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Попап */}
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </header>
    );
};

export default Header;
