import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import { buyerSegments, strengths } from "../data/business";
import Reveal, { MotionCard } from "../components/ui/Reveal";
import StatsBand from "../components/ui/StatsBand";
import BusinessCta from "../components/ui/BusinessCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Our enterprise"
              title="Reliable raw milk supply, built for business."
              text="Led by Mr Sher Singh Sisodiya, the enterprise connects hygienic regional procurement with the recurring supply needs of professional buyers."
            />
            <p className="mt-6 leading-8 text-[#526b5d]">
              We understand that commercial buyers require more than a product.
              They need clear communication, predictable coordination, and a
              supplier who can grow alongside their operations.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {strengths.map((item, i) => (
              <MotionCard
                delay={i * 0.08}
                key={item}
                className="rounded-2xl border border-[#d3e6c5] bg-white p-5 font-semibold shadow-sm"
              >
                <span className="mb-3 block text-[#659b43]">✓</span>
                {item}
              </MotionCard>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Markets we support"
              title="Serving the region’s dairy and food economy."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {buyerSegments.map((item, i) => (
              <MotionCard
                delay={i * 0.08}
                key={item.number}
                className="rounded-3xl bg-[#eef8e3] p-7"
              >
                <span className="text-xs font-bold text-[#659b43]">
                  {item.number}
                </span>
                <h3 className="mt-10 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#526b5d]">
                  {item.text}
                </p>
              </MotionCard>
            ))}
          </div>
          <Reveal>
            <Link
              to="/services"
              className="mt-10 inline-flex rounded-full bg-[#113526] px-6 py-3 text-sm font-bold text-white"
            >
              Explore all services →
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4d7b32]">
              Why businesses choose us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A practical partner for an essential supply.
            </h2>
          </Reveal>
          <div className="grid gap-6">
            {[
              [
                "Responsive coordination",
                "Direct communication helps align procurement, scheduling, and delivery expectations.",
              ],
              [
                "Growth-oriented network",
                "Expansion plans are focused on stronger collection capacity and broader market reach.",
              ],
              [
                "Long-term value",
                "Relationships are built to benefit buyers, suppliers, and the wider dairy ecosystem.",
              ],
            ].map(([t, d], i) => (
              <Reveal
                key={t}
                delay={i * 0.08}
                className="border-b border-[#d3e6c5] pb-6"
              >
                <h3 className="text-xl font-semibold">{t}</h3>
                <p className="mt-2 leading-7 text-[#526b5d]">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BusinessCta />
    </>
  );
}


