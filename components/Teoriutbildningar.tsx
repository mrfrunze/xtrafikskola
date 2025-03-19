"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Popup from "@/components/Popup";

const Teoriutbildningar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12 space-y-16">
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold"
        >
          Teoriutbildning för körkort
        </motion.h1>
        <p className="text-lg text-muted-foreground mt-4">
          Lär dig alla teoretiska aspekter av att köra bil med vår
          teoriutbildning.
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="dark:bg-primary-light dark:text-black mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition"
        >
          Boka kurs
        </button>
      </section>

      {/* Course Content */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold">Teori för personbil</h2>
          <h3 className="text-2xl font-medium mt-2">
            Obligatorisk teoriutbildning
          </h3>
          <p className="text-muted-foreground mt-4">
            Att förstå teorin är avgörande för att bli en säker förare. Hos oss
            får du tillgång till en modern teoriutbildning med digitala verktyg,
            interaktiva övningar och obegränsade test via Sveriges
            Trafikutbildares Riksförbund. Studera i din egen takt – via dator,
            mobil eller surfplatta.
          </p>
        </div>
        <Image
          src="/xtrafikskola-teoriutbildningar-trafikskola-goteborg.jpg"
          alt="Teoriutbildning"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold">Varför välja oss?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg shadow-lg">Erfarna lärare</div>
          <div className="p-6 bg-card rounded-lg shadow-lg">Flexibla tider</div>
          <div className="p-6 bg-card rounded-lg shadow-lg">Modern metodik</div>
        </div>
      </section>

      {/* Course Content */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <Image
          src="/xtrafikskola-teoriutbildningar-trafikskola-goteborg-2.jpg"
          alt="Teoriutbildning"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold">Teoridelens innehåll</h2>
          <h3 className="text-2xl font-medium mt-2">Vad lär du dig?</h3>
          <p className="text-muted-foreground mt-4">
            Teorin hjälper dig att förstå trafikregler, vägmärken och
            säkerhetsföreskrifter. Du lär dig också riskhantering, attityder och
            körteknik. En god förståelse av dessa ämnen är avgörande för att
            minska olyckor och förbättra trafiksäkerheten.
          </p>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Pris och bokning</h2>
        <p className="text-muted-foreground mt-4">
          Boka din teoriutbildning idag!
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="dark:bg-primary-light dark:text-black mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition"
        >
          Boka nu
        </button>
      </section>

      {/* Course Content */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold">
            Digital utbildningsplattform
          </h2>
          <h3 className="text-2xl font-medium mt-2">
            Studera smidigt och effektivt
          </h3>
          <p className="text-muted-foreground mt-4">
            Med vår digitala plattform Elevcentralen får du tillgång till
            teorimaterial i form av text, ljud och video. Gör interaktiva
            övningar och testa dina kunskaper genom realistiska prov.
            Plattformen fungerar på dator, mobil och surfplatta.
          </p>
        </div>
        <Image
          src="/xtrafikskola-teoriutbildningar-trafikskola-goteborg-3.jpg"
          alt="Teoriutbildning"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold">
          Bästa teoriutbildning i Göteborg
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            Lättförståelig teori
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            Erfarna instruktörer
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            Strategiskt läge
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <Image
          src="/xtrafikskola-teoriutbildningar-trafikskola-goteborg-4.jpg"
          alt="Teoriutbildning"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold">Studiematerial</h2>
          <h3 className="text-2xl font-medium mt-2">
            Allt du behöver för att klara teorin
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-300 mt-2 space-y-1">
            <li>Körkortsbok och övningshäfte</li>
            <li>Material om vägmärken och vägmarkeringar</li>
            <li>Obegränsat antal datatester</li>
            <li>Tillgång till övningsprov och slutprov</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Kontakta oss för mer information om priser och tider.
          </p>
        </div>
      </section>

        {/* Pricing & Booking */}
        <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Boka din körkortsutbildning idag</h2>
        <p className="text-muted-foreground mt-4">
          Ta steget mot ditt körkort – säkra din plats nu!
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="dark:bg-primary-light dark:text-black mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition"
        >
          Boka nu
        </button>
      </section>

       {/* Course Content */}
       <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold">
          Övningsprov och slutprov
          </h2>
          <h3 className="text-2xl font-medium mt-2">
          Så förbereder du dig för teoriprovet
          </h3>
          <p className="text-muted-foreground mt-4">
          För att få skriva det officiella teoriprovet måste du ha genomfört och blivit godkänd på våra övningsprov. Varje prov innehåller 65 frågor och tar 50 minuter – precis som det riktiga provet hos Trafikverket. Du kan repetera proven tills du når godkänt resultat.
          </p>
        </div>
        <Image
          src="/xtrafikskola-teoriutbildningar-trafikskola-goteborg-5.jpg"
          alt="Teoriutbildning"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold">
        Teoriutbildning nära SKF Bellevue
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg shadow-lg">
          Praktiska övningar
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
          Snabbt & Effektivt 
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
          Bra kommunikationer
          </div>
        </div>
      </section>
       {/* Course Content */}
       <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <Image
          src="/xtrafikskola-teoriutbildningar-trafikskola-goteborg-6.jpg"
          alt="Teoriutbildning"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold">Stöd vid läs- och skrivsvårigheter</h2>
          <h3 className="text-2xl font-medium mt-2">
          Extra hjälp vid behov
          </h3>
          <p className="text-muted-foreground mt-4">
          Har du dyslexi? Vi erbjuder teoriböcker med ljudstöd och lättlästa versioner. Du kan också ansöka om muntligt teoriprov eller förlängd provtid via Trafikverket. Kontakta oss vid inskrivning för mer information.
          </p>
        </div>
      </section>

       {/* Pricing & Booking */}
       <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Dags att ta körkort</h2>
        <p className="text-muted-foreground mt-4">
        Börja din resa mot frihet bakom ratten – boka en kurs redan idag!
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="dark:bg-primary-light dark:text-black mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition"
        >
          Boka din kurs
        </button>
      </section>

      {/* Popup */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
  );
};

export default Teoriutbildningar;
