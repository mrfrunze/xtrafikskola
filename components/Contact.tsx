"use client";

import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-20 text-center space-y-16">
            <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-8"
            >
                Kontakta oss
            </motion.h2>

            {/* Контентный блок с контактной информацией и картой */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
                {/* Левая колонка с текстовой информацией */}
                <div className="space-y-8 text-left">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Address</h3>
                        <p className="text-muted-foreground">Plats: Artillerigatan 23, 415 05 Göteborg</p>
                        <p className="text-muted-foreground">Stad: Göteborg</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Öpptider</h3>
                        <p className="text-muted-foreground">Dag: Lördag - Onsdag</p>
                        <p className="text-muted-foreground">Time: 09:00 - 17:00</p>
                        <hr className="my-4 border-border"/>
                        <p className="text-muted-foreground">Dag: Torsdag</p>
                        <p className="text-muted-foreground">Time: 09:00 - 15:00</p>
                        <p className="text-muted-foreground">Telefon: 076-850 36 63</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Sociala Medier</h3>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" 
                           className="text-primary hover:text-primary-foreground transition duration-300">
                            <FaFacebook className="text-3xl" />
                        </a>
                    </div>
                </div>

                {/* Правая колонка с картой Google */}
                <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]">
                    <iframe 
                        title="Google Maps"
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d238580.98065485532!2d12.020602!3d57.730261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff467d04efba9%3A0x8b1b004f5ee21fa3!2zQXJ0aWxsZXJpZ2F0YW4gMjMsIDQxNSAwNSBHw7Z0ZWJvcmcsINCo0LLQtdGG0LjRjw!5e1!3m2!1sru!2sus!4v1736853974734!5m2!1sru!2sus"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
