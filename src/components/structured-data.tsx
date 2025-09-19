export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cristian Suarez Gonzalez",
    jobTitle: "Senior Software Engineer & AI Specialist",
    description:
      "Experienced Senior Software Engineer and UX/UI Designer specializing in AI, Full-Stack Development, and Web3. Over 10 years building scalable, secure applications.",
    sameAs: [
      "https://linkedin.com/in/hicrist",
      "https://github.com/Royalcrist",
      "https://www.hiratalent.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warsaw",
      addressCountry: "Poland",
    },
    email: "cristiansuarezg7@gmail.com",
    telephone: "+48 453 419 252",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Python",
      "AI",
      "Machine Learning",
      "Web3",
      "Blockchain",
      "Full-Stack Development",
      "UX/UI Design",
      "Software Engineering",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Focus",
        description: "AI and technology company",
      },
      {
        "@type": "Organization",
        name: "Hira",
        description: "AI-powered recruitment platform",
        url: "https://www.hiratalent.com",
      },
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad Centro Occidental 'Lisandro Alvarado'",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Venezuela",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
