"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(storedTheme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
    };

    if (!theme) return null;
    

    return (
        <button
        className="flex items-center gap-2 p-2 border rounded-lg text-sm font-medium 
    bg-card text-card-foreground 
    hover:bg-accent hover:text-accent-foreground
    dark:hover:bg-accent dark:hover:text-accent-foreground
    transition duration-300"
        onClick={toggleTheme}
        >
            {theme === "light" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
    );
};
