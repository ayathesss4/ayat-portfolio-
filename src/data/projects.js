
const projects = [
  {
    slug: "madar",
    name: "MADAR | مدار",
    category: "ERP Web App / PWA",
    technologies: ["React", "TanStack", "Supabase", "Tailwind CSS"],
    shortDescription:
      "Arabic-first RTL ERP web application designed for modular business management with a clean and responsive experience.",
    liveDemo: "https://madar-the-core-erp.vercel.app/",
    overview:
      "MADAR is a modular ERP web application built with an Arabic-first, right-to-left interface. It's structured around independent business modules so the interface stays organized and responsive as functionality grows.",
    problem:
      "Most ERP interfaces are designed left-to-right and adapted for Arabic afterward, which tends to break layouts and make navigation feel unnatural. MADAR was built RTL-first, so direction, spacing and component behavior are native to Arabic-speaking users rather than retrofitted.",
    features: [
      "Arabic-first, RTL interface across every module",
      "Modular structure for business management",
      "Data fetching and table state handled with TanStack",
      "Supabase-backed data layer",
      "Responsive layout across desktop and mobile",
    ],
  },
  {
    slug: "ghosn",
    name: "GHOSN | غُصن",
    category: "Interactive Event Venue Website",
    technologies: [
      "React",
      "Responsive Design",
      "UI/UX Design",
      "Web Animations",
    ],
    shortDescription:
      "An immersive event venue website featuring elegant animations, floral-inspired visuals and interactive storytelling.",
    liveDemo: "https://animated-venue-clone.lovable.app/",
    overview:
      "GHOSN is an interactive website concept for an event venue, designed around elegant floral visuals, smooth animations and an immersive browsing experience. It presents the venue through thoughtfully designed sections that guide visitors through its atmosphere and services.",
    problem:
      "Traditional event venue websites often rely on static galleries and basic information. GHOSN explores a more engaging approach by using movement, visual storytelling and interactive elements to communicate the venue's identity.",
    features: [
      "Floral-inspired visual identity",
      "Smooth section transitions and animations",
      "Interactive storytelling experience",
      "Responsive design for desktop and mobile",
      "Elegant event venue presentation",
    ],
  },
  {
    slug: "clothing-store",
    name: "Clothing Store",
    category: "E-Commerce Storefront",
    technologies: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
    shortDescription:
      "A responsive clothing store front-end with product browsing and a cart experience that persists between visits.",
    liveDemo: "https://clothing-store-seven-beta.vercel.app/",
    overview:
      "A front-end e-commerce interface for browsing clothing products, built entirely on the client with React and Tailwind CSS. LocalStorage is used to keep cart state between visits without needing a backend.",
    problem:
      "The goal was to build a realistic shopping front-end — browsing, selecting and keeping items in a cart — using only client-side state, to focus on interface and interaction quality.",
    features: [
      "Product browsing and filtering UI",
      "Client-side cart with LocalStorage persistence",
      "Fast development and build setup with Vite",
      "Responsive layout with Tailwind CSS",
    ],
  },
  {
    slug: "clothing-store-dashboard",
    name: "Clothing Store Dashboard",
    category: "Admin Dashboard",
    technologies: ["React", "Vite", "Recharts", "React Icons"],
    shortDescription:
      "An admin dashboard companion to the clothing store, presenting store data through charts and clear visual panels.",
    liveDemo: "https://clothing-store-dashboard.vercel.app/",
    overview:
      "A dashboard interface built to accompany the clothing store project, focused on presenting data through charts and structured panels instead of raw tables.",
    problem:
      "Store data on its own is hard to scan quickly. The dashboard turns it into charts and organized views so patterns and totals are easier to read at a glance.",
    features: [
      "Data visualization built with Recharts",
      "Icon-driven navigation with React Icons",
      "Built and bundled with Vite",
      "Responsive dashboard layout",
    ],
  },
  {
    slug: "my-dental-plan",
    name: "My Dental Plan",
    category: "UI Design",
    technologies: ["React", "UI Design"],
    shortDescription:
      "A clean, informative interface for presenting a dental care plan.",
    liveDemo: "https://my-dental-plan.lovable.app/",
    overview:
      "A UI-focused React project presenting a dental care plan, built with attention to layout, hierarchy and readability.",
    problem:
      "Health and care-related information can come across as dense or cold. The focus here was a clear, approachable layout that's easy to scan and understand quickly.",
    features: [
      "Clear informational layout",
      "Emphasis on typography and visual hierarchy",
      "Fully responsive across devices",
      "Built with React",
    ],
  },
  {
    slug: "espresso-moment-maker",
    name: "Espresso Moment Maker",
    category: "UI Design",
    technologies: ["React", "UI Design"],
    shortDescription:
      "A UI concept exploring a coffee-brewing ritual through a calm, intentional interface.",
    liveDemo: "https://espresso-moment-maker.lovable.app/",
    overview:
      "A UI design project exploring how a simple, everyday ritual — making coffee — can be represented through an interface with a calm, intentional feel.",
    problem:
      "The challenge was translating a slow, sensory, analog moment into a digital interface without losing its sense of pace and calm.",
    features: [
      "Custom interface concept and visual system",
      "Focus on pacing and visual rhythm",
      "Built with React",
      "Fully responsive layout",
    ],
  },
];

export default projects;
