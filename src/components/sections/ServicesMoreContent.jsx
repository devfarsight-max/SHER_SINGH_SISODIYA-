import { Link } from 'react-router-dom'
import Reveal, { MotionCard } from '../ui/Reveal'

const coverage = [
  ['Requirement assessment', 'Review expected volume, frequency, delivery area, intended use, and preferred start date.'],
  ['Procurement coordination', 'Align regional sourcing and milk collection activity with realistic buyer requirements.'],
  ['Wholesale supply planning', 'Develop a practical recurring or requirement-led supply arrangement for commercial quantities.'],
  ['Delivery communication', 'Coordinate timing, receiving expectations, and relevant operational updates directly.'],
]

const onboarding = [
  ['Share your requirement', 'Provide the business type, approximate quantity, location, and expected supply schedule.'],
  ['Discuss feasibility', 'We review operational requirements and discuss a suitable way to proceed.'],
  ['Align the arrangement', 'Both sides confirm expectations around supply, timing, communication, and receiving.'],
  ['Begin coordination', 'Procurement and distribution activity is organized around the agreed requirement.'],
]

export default function ServicesMoreContent() {
  return <>
    <section className="bg-[#eef5e5] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Service coverage</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Support across the complete supply conversation.</h2><p className="mt-5 leading-8 text-[#5e7067]">Our service begins before the first supply movement. Clear requirement assessment and coordination help create an arrangement that works for both parties.</p></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2">{coverage.map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-3xl bg-white p-8 shadow-sm"><div className="flex items-start gap-5"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#d8efb9] text-sm font-bold">0{index + 1}</span><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#5e7067]">{text}</p></div></div></MotionCard>)}</div></div>
    </section>

    <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal><img src="/images/business-delivery.png" alt="Commercial raw milk delivery for a hospitality business" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl" /></Reveal>
        <div><Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Buyer-specific needs</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Different businesses. Different operating priorities.</h2><p className="mt-5 leading-8 text-[#5e7067]">The supply discussion is shaped around how each buyer uses raw milk and how important timing, volume, and continuity are to their operation.</p></Reveal><div className="mt-8 space-y-4">{[['Processors','Production planning may require recurring volumes and consistent procurement coordination.'],['Wholesalers and retailers','Regional trade networks benefit from responsive supply planning and market understanding.'],['Hotels and restaurants','Kitchen operations require freshness, practical receiving times, and direct communication.'],['Institutions','Structured requirements may involve larger quantities and defined procurement schedules.']].map(([title, text], index) => <Reveal key={title} delay={index * .07} className="border-b border-[#dfe6dc] pb-4"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5e7067]">{text}</p></Reveal>)}</div></div>
      </div>
    </section>

    <section className="bg-[#173326] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#bdd69e]">Getting started</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">A straightforward business onboarding process.</h2></div><p className="max-w-xl leading-8 text-white/65">Direct discussion helps establish whether the requirement and current supply capability are a suitable match.</p></Reveal><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{onboarding.map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-3xl border border-white/15 bg-white/5 p-7"><span className="text-sm font-bold text-[#bdd69e]">STEP 0{index + 1}</span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{text}</p></MotionCard>)}</div><Reveal className="mt-10"><Link to="/contact" className="btn-primary bg-[#d8efb9] text-[#173326] hover:bg-white">Start a supply discussion →</Link></Reveal></div>
    </section>

    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Service expectations</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A transparent basis for long-term coordination.</h2><p className="mt-5 leading-8 text-[#5e7067]">A dependable relationship requires both sides to communicate clearly about demand, availability, timing, and operational changes.</p></Reveal><div className="grid gap-5 sm:grid-cols-2">{[['Clear information','Accurate requirement details help support better procurement planning.'],['Realistic commitments','Supply arrangements should reflect available capacity and practical delivery conditions.'],['Timely updates','Early communication helps both sides respond to changes effectively.'],['Ongoing review','Requirements can be reviewed as buyer demand and network capacity evolve.']].map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-2xl border border-[#dfe6dc] bg-white p-7"><span className="text-xl text-[#69a143]">◆</span><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#5e7067]">{text}</p></MotionCard>)}</div></div>
    </section>
  </>
}
