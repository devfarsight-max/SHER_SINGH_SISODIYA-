import { Link } from 'react-router-dom'
import Reveal, { MotionCard } from '../ui/Reveal'

const freshness = [
  ['Timely collection', 'Collection planning aims to reduce unnecessary waiting and keep milk moving through the network.'],
  ['Coordinated movement', 'Procurement and distribution schedules are considered together to support efficient handling.'],
  ['Suitable containers', 'Stainless steel milk cans and appropriate handling equipment support responsible movement.'],
  ['Prompt communication', 'Early updates help buyers and suppliers respond when operating conditions change.'],
]

const improvement = [
  ['Review operations', 'Observe recurring challenges across procurement, collection, and distribution activity.'],
  ['Identify priorities', 'Focus attention on changes that can improve consistency, capacity, or responsiveness.'],
  ['Strengthen systems', 'Develop clearer workflows and operating habits as the enterprise grows.'],
  ['Measure progress', 'Use practical operating experience to guide the next stage of improvement.'],
]

export default function QualityMoreContent() {
  return <>
    <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal><img src="/images/milk-collection-network.png" alt="Hygienic milk collection and handling operation" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl" /></Reveal>
        <div><Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Freshness in focus</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Protecting a time-sensitive raw material through coordination.</h2><p className="mt-5 leading-8 text-[#5e7067]">Freshness is influenced by every step between the source and the buyer. Thoughtful timing, organized movement, and responsible handling help protect the usefulness of raw milk for commercial customers.</p></Reveal><div className="mt-8 grid gap-4 sm:grid-cols-2">{freshness.map(([title, text], index) => <Reveal key={title} delay={index * .07} className="rounded-2xl bg-[#eef5e5] p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5e7067]">{text}</p></Reveal>)}</div></div>
      </div>
    </section>

    <section className="bg-[#eef5e5] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Hygienic handling</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Good handling is built from consistent everyday practices.</h2><p className="mt-5 leading-8 text-[#5e7067]">Quality-conscious operations require attention at collection points, during transfer, while milk is being moved, and at business handover.</p></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[['Cleanliness awareness','Keep containers, contact surfaces, and working areas in suitable condition.'],['Careful transfer','Reduce avoidable exposure and handle milk containers responsibly.'],['Orderly movement','Arrange cans and transport activity to support safe, efficient handling.'],['Receiving readiness','Coordinate with buyers so the handover can take place without unnecessary delay.']].map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-3xl bg-white p-7 shadow-sm"><span className="grid size-11 place-items-center rounded-full bg-[#d8efb9] text-sm font-bold">0{index + 1}</span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#5e7067]">{text}</p></MotionCard>)}</div></div>
    </section>

    <section className="bg-[#173326] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#bdd69e]">Reliability standard</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Confidence grows through clear, repeatable performance.</h2><p className="mt-5 leading-8 text-white/65">For B2B buyers, quality also includes the reliability of the supply relationship—realistic commitments, direct communication, and responsible follow-through.</p><Link to="/contact" className="btn-primary mt-8 bg-[#d8efb9] text-[#173326] hover:bg-white">Discuss your quality priorities →</Link></Reveal><div className="grid gap-5 sm:grid-cols-2">{[['Clear expectations','Define requirements and practical supply conditions at the beginning.'],['Consistent coordination','Maintain organized communication across recurring requirements.'],['Honest updates','Communicate early when availability or operating conditions change.'],['Customer responsiveness','Listen to buyer concerns and address them constructively.']].map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-2xl border border-white/15 bg-white/5 p-7"><span className="text-xl text-[#bdd69e]">◆</span><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{text}</p></MotionCard>)}</div></div>
    </section>

    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Continuous improvement</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Strengthening quality capability as operations expand.</h2></div><p className="max-w-xl leading-8 text-[#5e7067]">Growth creates opportunities to improve collection infrastructure, distribution planning, communication, and operating discipline.</p></Reveal><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{improvement.map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-3xl border border-[#dfe6dc] bg-white p-7"><p className="text-sm font-bold text-[#69a143]">STEP 0{index + 1}</p><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#5e7067]">{text}</p></MotionCard>)}</div><Reveal className="mt-12 flex justify-center"><Link to="/supply-network" className="btn-secondary border-[#173326]/20 text-[#173326] hover:bg-[#eef5e5]">Explore the supply network →</Link></Reveal></div>
    </section>
  </>
}
