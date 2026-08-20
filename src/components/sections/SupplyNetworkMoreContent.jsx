import { Link } from 'react-router-dom'
import Reveal, { MotionCard } from '../ui/Reveal'

const collectionFactors = [
  ['Supplier location', 'Collection planning considers where milk is available and how efficiently it can enter the network.'],
  ['Available quantity', 'Approximate supply visibility helps procurement activity align with buyer demand.'],
  ['Collection timing', 'Time-sensitive scheduling supports freshness and smoother onward movement.'],
  ['Route practicality', 'Collection routes are considered with distance, access, capacity, and delivery needs in mind.'],
]

const resilience = [
  ['Broader sourcing base', 'Relationships across more supply points can reduce dependence on any single source.'],
  ['Improved visibility', 'Better communication supports a clearer understanding of expected supply availability.'],
  ['Responsive coordination', 'Operational updates help the network respond when availability or demand changes.'],
  ['Scalable infrastructure', 'Capacity development prepares the enterprise for greater procurement and distribution activity.'],
]

export default function SupplyNetworkMoreContent() {
  return <>
    <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal><img src="/images/supply-logistics.png" alt="Organized milk collection center and refrigerated distribution vehicle" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl" /></Reveal>
        <Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#4d7b32]">Supplier network development</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Reliable supply begins with dependable regional relationships.</h2><p className="mt-5 leading-8 text-[#526b5d]">The enterprise aims to develop a wider network of milk suppliers who can participate in organized procurement and collection activity. Strong relationships improve communication, planning, and confidence throughout the chain.</p><p className="mt-5 leading-8 text-[#526b5d]">Supplier development is approached as a long-term partnership. Clear expectations around location, approximate quantity, collection timing, and handling help create a stronger operating foundation.</p><Link to="/contact" className="btn-primary mt-8 bg-[#113526] text-white hover:bg-[#24523d]">Make a supplier enquiry →</Link></Reveal>
      </div>
    </section>

    <section className="bg-[#edf8df] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#4d7b32]">Collection planning</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Turning multiple supply points into one coordinated flow.</h2><p className="mt-5 leading-8 text-[#526b5d]">Effective collection connects available regional supply with downstream business demand while keeping freshness, time, and movement efficiency in focus.</p></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2">{collectionFactors.map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-3xl bg-white p-8 shadow-sm"><span className="grid size-11 place-items-center rounded-full bg-[#d7f1b1] text-sm font-bold">0{index + 1}</span><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#526b5d]">{text}</p></MotionCard>)}</div></div>
    </section>

    <section className="bg-[#113526] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#c7e7a1]">Distribution coordination</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Connecting procurement activity with the buyer’s schedule.</h2></div><p className="max-w-xl leading-8 text-white/65">Distribution is the final operational link between collected milk and the business that depends on it. Planning must reflect quantity, distance, receiving arrangements, and timing.</p></Reveal><div className="mt-14 grid gap-4 md:grid-cols-3">{[['Before movement','Confirm the requirement, destination, expected timing, and practical receiving details.'],['During coordination','Maintain communication around progress and any condition that may affect the plan.'],['At handover','Support an organized receiving process so the business can continue its operations.']].map(([title, text], index) => <MotionCard key={title} delay={index * .1} className="rounded-3xl border border-white/15 bg-white/5 p-8"><p className="text-sm font-bold text-[#c7e7a1]">STAGE 0{index + 1}</p><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-white/60">{text}</p></MotionCard>)}</div></div>
    </section>

    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#4d7b32]">Network resilience</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Preparing the supply chain for changing demand.</h2><p className="mt-5 leading-8 text-[#526b5d]">A resilient network is better able to respond when volumes, buyer needs, supplier availability, or regional conditions change.</p><Link to="/quality" className="btn-secondary mt-8 border-[#113526]/20 text-[#113526] hover:bg-[#edf8df]">View our quality commitment →</Link></Reveal><div className="grid gap-5 sm:grid-cols-2">{resilience.map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-2xl border border-[#d3e6c5] bg-white p-7"><span className="text-xl text-[#659b43]">◆</span><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#526b5d]">{text}</p></MotionCard>)}</div></div>
    </section>
  </>
}


