import { Droplets, Shield, Sparkles, Wind, Target, Users, MapPin } from "lucide-react";

export const siteConfig = {
  company: {
    name: "Mosquito Authority - Bee Cave Services",
    shortName: "Mosquito Authority",
    phone: "(512) 555-0199", // Placeholder
    email: "info@mosquito-authority.com",
    address: "Bee Cave, Austin, Texas",
    city: "Bee Cave",
    yearFounded: "2010",
    logoUrl: "https://cdn-cjecd.nitrocdn.com/vVUJRStPuJDTnVtBofmhnXcckjCeZbwq/assets/images/optimized/rev-4b015fd/www.mosquito-authority.com/wp-content/uploads/2021/09/icon-pest-26x.png", // Using text fallback
  },
  theme: {
    // Mosquito Authority typically uses strong Red/Black/White or Blue themes. 
    // We'll give them a vibrant crimson and deep blue theme.
    primary: "350 70% 45%",     // Authority Crimson
    accent: "210 50% 30%",      // Deep Navy
    background: "0 0% 100%",
    foreground: "240 10% 4%",
  },
  hero: {
    badge: "No Mosquitoes. Guaranteed.",
    headline: "Take Back Your Yard in Bee Cave",
    subheadline: "Professional mosquito and tick control services. We eliminate the buzzing and biting so you can enjoy your outdoor spaces.",
    ctaText: "Get a Free Estimate",
    image: "https://cdn-cjecd.nitrocdn.com/vVUJRStPuJDTnVtBofmhnXcckjCeZbwq/assets/images/optimized/rev-4b015fd/www.mosquito-authority.com/wp-content/uploads/2021/09/icon-pest-26x.png", // Family in a backyard
  },
  services: [
    {
      id: "mosquito-control",
      title: "Mosquito Control",
      description: "Our multi-step process disrupts the mosquito lifecycle, keeping them away from your property.",
      icon: Droplets,
    },
    {
      id: "tick-control",
      title: "Tick Control",
      description: "Targeted treatments to eliminate ticks and protect your family and pets from tick-borne diseases.",
      icon: Target,
    },
    {
      id: "special-events",
      title: "Special Event Sprays",
      description: "One-time intensive treatments to ensure your outdoor wedding or party is mosquito-free.",
      icon: Sparkles,
    },
  ],  about: {
    sectionTitle: "About Us",
    headline: "Protecting Homes & Businesses",
    description:
      "We are committed to providing top-tier pest management for families and businesses. Our integrated approach ensures complete eradication while remaining safe for kids, pets, and the environment. We pride ourselves on reliability, transparent pricing, and lasting results.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80",
  },
  blog: {
    sectionTitle: "Pest Control Tips & News",
    articles: [
      {
        id: "1",
        title: "How to Keep Mosquitoes Away This Summer",
        excerpt:
          "Simple steps you can take around your yard to eliminate standing water and reduce mosquito populations.",
        date: "May 15, 2026",
        image: "https://images.unsplash.com/photo-1518563233816-5636b04f2168?auto=format&fit=crop&q=80",
      },
      {
        id: "2",
        title: "Signs You Might Have a Termite Problem",
        excerpt:
          "Don't let termites destroy your home. Learn the early warning signs to look out for.",
        date: "April 02, 2026",
        image: "https://images.unsplash.com/photo-1615555416049-d045d4a9ef3c?auto=format&fit=crop&q=80",
      },
      {
        id: "3",
        title: "Organic Pest Control vs. Traditional",
        excerpt:
          "Wondering if organic pest control is right for your family? We break down the pros and cons.",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
      },
    ],
  },
  faqs: [
    {
      q: "Is your pest treatment safe for kids and pets?",
      a: "Absolutely. We use EPA-approved, family-friendly products that are tough on pests but gentle around children, pets, and your garden. Our technicians will walk you through every product we use before treatment begins.",
    },
    {
      q: "How does your 100% money-back guarantee work?",
      a: "If pests return between scheduled treatments, we'll come back and re-treat at no extra charge. If you're still not satisfied, we'll refund your last service payment—no questions asked.",
    },
    {
      q: "How quickly can you get to my home?",
      a: "We offer same-day service for emergencies and typically schedule routine inspections within 24–48 hours. We serve the greater metro area and surrounding suburbs.",
    },
    {
      q: "What pests are most common in this area?",
      a: "Homeowners most frequently deal with fire ants, roaches, scorpions, mosquitoes, termites, and rodents. Our treatment plans are specifically designed for local pest pressure.",
    },
    {
      q: "Do I need to leave my house during treatment?",
      a: "For most treatments, no. Our eco-friendly products allow you to stay home comfortably. For specific services like termite fumigation, we'll let you know in advance if any preparation is needed.",
    },
    {
      q: "How often should I schedule pest control service?",
      a: "We recommend quarterly treatments for year-round protection. However, we'll customize a plan based on your property, pest history, and budget during your free inspection.",
    },
  ],
  reviews: {
    averageRating: 4.9,
    totalReviews: 840,
    testimonials: [
      {
        id: 1,
        author: "Sarah W.",
        rating: 5,
        text: "Since we started using Mosquito Authority, we've practically lived in our backyard. The difference is night and day.",
      },
      {
        id: 2,
        author: "Mark T.",
        rating: 5,
        text: "Prompt, professional, and it actually works. The technicians are always polite and thorough.",
      },
      {
        id: 3,
        author: "Linda P.",
        rating: 5,
        text: "I was skeptical at first, but the guarantee is real. If I saw a mosquito, they came right back. Unbeatable service.",
      }
    ]
  },
  team: [], // Hidden via fallback
  guarantees: [
    {
      title: "No Mosquitoes Guarantee",
      description: "If you are bothered by mosquitoes between treatments, we will return and reassess your property at no additional charge.",
      icon: Shield,
    },
    {
      title: "No Contracts",
      description: "You can cancel anytime. We earn your business with every treatment.",
      icon: Users,
    },
    {
      title: "Local Experts",
      description: "Serving the Bee Cave and Austin areas with dedicated local specialists.",
      icon: MapPin,
    },
  ]
};
