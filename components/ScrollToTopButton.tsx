"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 rounded-full bg-primary text-primary-foreground 
                    shadow-lg hover:bg-primary/80 transition duration-300"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
