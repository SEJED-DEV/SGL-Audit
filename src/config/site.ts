export const siteConfig = {
  name: "SGL Audit",
  description: "Société d'expertise comptable inscrite au tableau de l'Ordre des Experts Comptables de Tunisie.",
  tagline: "Expert-comptable à Tunis: création d'entreprise, gestion comptable, conseils juridiques et fiscaux.",
  website: "https://sglaudit.com",
  contact: {
    email: "direction@sglaudit.com",
    phone: "+216 98 297 521",
    phone2: "+216 90 475 235",
    whatsapp: "+216 98 297 521",
    whatsappLink: "https://wa.me/21698297521"
  },
  location: {
    address: "Bab Khadhra 1006 Tunis",
    googleMapsLink: "https://maps.google.com/?q=Bab+Khadhra+Tunis",
  },
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  developer: {
    name: "Sejed TRABELSSI",
    phone: "+216 94 155 000",
    email: "support@sejed.dev",
    website: "https://sejed.dev"
  },
  credits: {
    madeBy: "Sejed TRABELSSI",
    link: "https://sejed.dev"
  },
  navigation: [
    {
      name: { fr: "Accueil", en: "Home", ar: "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©" },
      href: "/"
    },
    {
      name: { fr: "Nos Missions", en: "Our Missions", ar: "Ù…Ù‡Ø§Ù…Ù†Ø§" },
      href: "/nos-missions"
    },
    {
      name: { fr: "Investir en Tunisie", en: "Invest in Tunisia", ar: "Ø§Ù„Ø§Ø³ØªØ«Ù…Ø§Ø± ÙÙŠ ØªÙˆÙ†Ø³" },
      href: "/investir-en-tunisie"
    },
    {
      name: { fr: "Nos Expertises", en: "Our Expertise", ar: "Ø®Ø¨Ø±Ø§ØªÙ†Ø§" },
      href: "/nos-expertises",
      children: [
        { name: { fr: "Expertise Comptable", en: "Accounting", ar: "Ø§Ù„Ø®Ø¨Ø±Ø© Ø§Ù„Ù…Ø­Ø§Ø³Ø¨ÙŠØ©" }, href: "/nos-expertises/expertise-comptable" },
        { name: { fr: "Paie & Social", en: "Payroll & Social", ar: "Ø§Ù„Ø±ÙˆØ§ØªØ¨ ÙˆØ§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠ" }, href: "/nos-expertises/paie-social" },
        { name: { fr: "Juridique & Fiscal", en: "Legal & Tax", ar: "Ù‚Ø§Ù†ÙˆÙ†ÙŠ ÙˆØ¶Ø±ÙŠØ¨ÙŠ" }, href: "/nos-expertises/juridique-fiscal" },
      ]
    },
    {
      name: { fr: "Vos Métiers", en: "Your Sectors", ar: "Ù‚Ø·Ø§Ø¹Ø§ØªÙƒÙ…" },
      href: "/vos-metiers"
    },
    {
      name: { fr: "Formalités", en: "Formalities", ar: "Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª" },
      href: "/formalites"
    },
    {
      name: { fr: "Blog", en: "Blog", ar: "Ø§Ù„Ù…Ø¯ÙˆÙ†Ø©" },
      href: "/blog"
    },
    {
      name: { fr: "Contact", en: "Contact", ar: "Ø§ØªØµÙ„ Ø¨Ù†Ø§" },
      href: "/contact"
    }
  ]
};
