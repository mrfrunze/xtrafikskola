"use client";

import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-background text-foreground px-4 space-y-8">
            {/* Изображение 404 */}
            <Image
                src="/undraw_404.svg"
                alt="Page not found"
                width={300}
                height={300}
                priority
            />
            
            <h1 className="text-4xl font-bold">Sidan hittades inte</h1>
            <p className="text-lg text-muted-foreground">
                Sidan du letar efter existerar inte eller har flyttats.
            </p>

            {/* Кнопка для возврата на главную */}
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition"
            >
                Tillbaka till hemsidan
            </Link>
        </div>
    );
};

export default NotFoundPage;
