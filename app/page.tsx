import Script from "next/script";

import {Hero,About,Contact} from "@/components/index"

export const metadata = {
  title: "xTrafikSkola Göteborg – Trafikskola med delbetalning",
  description: "【 Trafikskola i Göteborg 】 med delbetalning. ⚡Prisvärda paket ⚡ för alla behov ➦ boka dina körlektioner redan idag och ta körkort enkelt! ☎ 0768503663",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "xTrafikSkola",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Artillerigatan 23",
      "addressLocality": "Göteborg",
      "postalCode": "415 05",
      "addressCountry": "SE"
    },
    "telephone": "076-850 36 63",
    "url": "https://www.xtrafikskola.se/",
    "sameAs": [
      "https://www.facebook.com/yourpage",
    ]
  };
  return (
    <div>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero/>
      <About/>
      <Contact/>
    </div>
  );
}
