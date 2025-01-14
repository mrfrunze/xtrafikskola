"use client";

import { motion } from "framer-motion";
import {stepsData} from "@/data/stepsData"

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-20 text-center space-y-16">
            <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-8"
            >
                Vägen till körkortet
            </motion.h2>

            <p className="text-lg mb-12 text-muted-foreground">
                Så här fungerar det att ta körkortet med oss på xTrafikskola.
            </p>

            {/* Grid с анимацией появления блоков */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
                {stepsData.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="p-6 bg-card rounded-lg shadow-lg border border-gray-200 
                        cursor-pointer transition-all duration-300 transform hover:scale-105 
                        hover:shadow-xl min-h-[220px] flex flex-col justify-between"
                    >
                        <div className="flex flex-col items-center">
                            <div className="text-4xl font-bold text-[hsl(var(--primary))]">{step.number}</div>
                            <h3 className="text-2xl font-semibold mt-4 text-center leading-tight">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
  )
}

export default About