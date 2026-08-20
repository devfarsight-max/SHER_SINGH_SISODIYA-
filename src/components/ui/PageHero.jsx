import { motion } from "framer-motion";
const heroImages = {
  "About us": "/images/about-page-hero.png",
  "What we do": "/images/services-page-hero.png",
  "Supply network": "/images/supply-page-hero.png",
  "Quality & commitment": "/images/quality-page-hero.png",
  "Contact us": "/images/contact-page-hero.png",
};

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-[#113526] px-5 pb-20 pt-40 text-white sm:px-8 lg:pb-24">
      <img
        src={heroImages[eyebrow]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#113526] via-[#113526]/90 to-[#113526]/50" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto max-w-7xl"
      >
        <p className="text-xs font-bold uppercase tracking-[.22em] text-[#c7e7a1]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
      </motion.div>
    </section>
  );
}

