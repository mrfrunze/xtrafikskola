import Script from "next/script";

export const metadata = {
    title: "Pris Trafikskola Göteborg - xTrafikskola",
    description: "Se priser för våra körkortsutbildningar på xTrafikskola i Göteborg. Hitta den utbildning som passar dig."
  };
  
  export default function PricePage() {
    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Prislista - xTrafikSkola Göteborg",
      description:
        "Prislista för körlektioner, intensivkurser och teoriutbildning på xTrafikSkola i Göteborg.",
      url: "https://www.xtrafikskola.se/pris-trafikskola-goteborg",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Enskild körlektion",
          description:
            "En 60-minuters individuell körlektion med en erfaren trafiklärare.",
          price: 650,
          priceCurrency: "SEK",
          availability: "http://schema.org/InStock",
          validFrom: "2025-03-01",
        },
        {
          "@type": "Offer",
          name: "Intensivkurs 10 lektioner",
          description:
            "Intensivkurs för körkort inklusive 10 praktiska körlektioner.",
          price: 5995,
          priceCurrency: "SEK",
          availability: "http://schema.org/InStock",
          validFrom: "2025-03-01",
        },
      ],
    };
    return (
      <>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Priser</h1>
        <p>Här hittar du våra priser för olika körkortsutbildningar.</p>
      </main>
      </>
    
    );
  }
  