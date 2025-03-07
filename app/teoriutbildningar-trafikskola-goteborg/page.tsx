import Script from "next/script";

export const metadata = {
  title: "Teoriutbildningar Trafikskola Göteborg - xTrafikskola",
  description:
    "Lär dig teori för körkort på xTrafikskola i Göteborg. Vi erbjuder teorikurser för bil, truck och taxi.",
};

export default function TheoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Teoriutbildning för körkort",
    "description": "Lär dig alla teoretiska aspekter av att köra bil med vår teoriutbildning. Kursen täcker trafikregler, säkerhetsföreskrifter och praktiska scenarier.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "xTrafikSkola",
      "url": "https://www.xtrafikskola.se/"
    },
    "courseMode": "Blended",
    "coursePrerequisites": "Inga förkunskaper krävs",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "name": "Teoriutbildning - Göteborg",
      "startDate": "2025-04-01",
      "endDate": "2025-12-31",
      "courseWorkload": "30 timmar",
      "location": {
        "@type": "Place",
        "name": "xTrafikSkola",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Artillerigatan 23",
          "addressLocality": "Göteborg",
          "postalCode": "415 05",
          "addressCountry": "SE"
        }
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "2995",
      "priceCurrency": "SEK",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-03-01"
    }
  }

  return (
    <>
      <Script
        id="structured-data-teoriutbildning"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Teoriutbildningar</h1>
        <p>
          Här kan du lära dig teorin för körkort och förbereda dig inför provet.
        </p>
      </main>
    </>
  );
}
