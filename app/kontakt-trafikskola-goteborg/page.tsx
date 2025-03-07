import Script from "next/script";

export const metadata = {
  title: "Kontakt Trafikskola Göteborg - xTrafikskola",
  description:
    "Kontakta xTrafikskola i Göteborg för information om körkortsutbildningar och bokning av kurser.",
};

export default function ContactPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "xTrafikSkola",
    "description": "Kontakta xTrafikSkola i Göteborg för frågor om körlektioner, intensivkurser och teoriutbildning.",
    "url": "https://www.xtrafikskola.se/kontakt-trafikskola-goteborg",
    "telephone": "076-850 36 63",
    "email": "info@xtrafikskola.se",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Artillerigatan 23",
      "addressLocality": "Göteborg",
      "postalCode": "415 05",
      "addressCountry": "SE"
    },
    "sameAs": [
      "https://www.facebook.com/yourpage",
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "57.7230",
      "longitude": "11.9785"
    }
  };
  
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Kontakta oss</h1>
        <p>
          Här kan du kontakta oss för mer information om våra
          körkortsutbildningar.
        </p>
      </main>
    </>
  );
}
