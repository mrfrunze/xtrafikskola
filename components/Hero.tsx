"use client";

import { motion } from "framer-motion";
import { FaCar, FaTruck, FaTaxi } from "react-icons/fa";

const Hero = () => {
    return (
        <section 
            className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center space-y-16"
        >
            {/* Главный заголовок с анимацией */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
            >
                <h1 className="text-4xl font-bold mb-4 leading-tight">
                    Ta ditt körkort med trafikskolan i Gamlestaden
                </h1>
                <p className="text-lg mb-6">
                    Vi hjälper dig ta ditt körkort i, Truck, Taxi, Bil. Alltid välkommen att besöka oss ute på Hisingen alternativt kontakta oss om du undrar över något.
                </p>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition">
                    Boka Kurs
                </button>
            </motion.div>

            {/* Линия для визуального разделения */}
            <div className="w-full max-w-4xl border-t border-foreground/50"></div>

            {/* Секция услуг с иконками */}
            <div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
            >
                {/* B - Teoriutbildning */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col items-center text-center">
                    <FaCar className="text-4xl text-primary mb-4" />
                    <h3 className="text-2xl font-semibold">B – Teoriutbildning</h3>
                    <p className="text-sm mt-2 text-muted-foreground">
                        Bli en säker förare med vår B-teoriutbildning med fokus på säkerhet och lagkrav.
                    </p>
                </motion.div>

                {/* Truckutbildning */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col items-center text-center">
                    <FaTruck className="text-4xl text-primary mb-4" />
                    <h3 className="text-2xl font-semibold">Truckutbildning</h3>
                    <p className="text-sm mt-2 text-muted-foreground">
                        Lär dig att köra truck säkert och effektivt med vår intensiva truckutbildning.
                    </p>
                </motion.div>

                {/* Taxiutbildning */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col items-center text-center">
                    <FaTaxi className="text-4xl text-primary mb-4" />
                    <h3 className="text-2xl font-semibold">Taxiutbildning</h3>
                    <p className="text-sm mt-2 text-muted-foreground">
                        Bli en professionell taxiförare med fokus på kundservice och säkerhet.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
