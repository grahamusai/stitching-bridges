import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Joseph is a Chartered Accountant and financial modeller with a Production Engineering background and over 10 years’ experience in the construction industry. He is driven by a passion for creating systems that work — in finance, project management, and construction. He brings together technical insight, financial discipline, and practical leadership to ensure every project is efficient, transparent, and well-managed. At Stitching Bridges, Joseph leads strategy, project oversight, and client assurance. He ensures that every project is transparent, efficient, and fully accountable. He oversees the trust-account model that protects client funds and guarantees verified delivery. He is currently completing a Project Management certification in construction to sharpen how projects are planned, costed, and delivered.",
      name: "Joseph Magawa",
      designation: "Founder & Chief Business Officer",
      src: "/images/Joseph.jpeg",
      saying : "Good projects run on trust, clarity, and discipline — thats what we build."
    },
    {
      quote:
        "Rukudzo is a Project Manager with a natural passion for interior design, \n joinery manufacturing, and roofing solutions. She brings a creative eye and practical discipline to every project she handles. With a BCompt degree from UNISA and ongoing studies in Carpentry and Joinery at Msasa Industrial Training College, she blends design sense,  financial management with hands-on technical skill. Rukudzo has managed a wide range of assignments — from design to final handover— always ensuring quality, timely delivery, and clear communication with all stakeholders involved.",
      name: "Rukudzo Hillary Magawa",
      designation: "Project Manager",
      src: "/images/hilary.jpg",
      saying : "I believe every space can be functional, beautiful, and built to last."
    },
    {
      quote:
        "Precious leads Business Development and Marketing at Stitching Bridges. She holds a degree in Marketing from Womens University and a Marketing Management diploma with IAC. She is passionate about connecting people, projects, and opportunities. She brings energy and structure to how the brand grows — building client relationships, managing communications, and driving visibility in both local and diaspora markets.“For me, marketing is about trust — helping clients see value and feel confident from the first conversation.” amend to suit and send back",
      name: "Precious Mazhambe",
      designation: "Business Development & Marketing",
      src: "/images/Precious.jpg",
      saying : "For me, marketing is about trust — helping clients see value and feel confident from the first conversation.” amend to suit and send back"
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
