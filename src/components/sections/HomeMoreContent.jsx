import { Link } from 'react-router-dom'
import Reveal, { MotionCard } from '../ui/Reveal'

const process = [
  ['01', 'Understand demand', 'We discuss the buyer’s expected volume, supply frequency, location, and operational priorities.'],
  ['02', 'Coordinate procurement', 'Milk sourcing and collection activity is planned around the agreed commercial requirement.'],
  ['03', 'Prepare distribution', 'Handling and movement are coordinated with attention to freshness and delivery expectations.'],
  ['04', 'Support continuity', 'Ongoing communication helps the supply relationship adapt as business needs change.'],
]

const priorities = [
  ['Higher procurement capacity', 'Expanding the ability to source and coordinate larger raw milk volumes.'],
  ['Stronger collection network', 'Developing dependable relationships with more regional milk suppliers.'],
  ['Efficient distribution', 'Improving planning and movement so supply reaches buyers more effectively.'],
  ['Wider market reach', 'Connecting with more processors, retailers, hospitality businesses, and institutions.'],
]

const questions = [
  ['Who can enquire for supply?', 'Dairy processors, wholesalers, retailers, hotels, restaurants, caterers, and institutional buyers can contact the enterprise.'],
  ['What information should a buyer provide?', 'Share your approximate volume, preferred frequency, delivery location, business type, and expected start date.'],
  ['Can suppliers contact the enterprise?', 'Yes. Regional milk suppliers can connect directly to discuss potential procurement and collection opportunities.'],
]

export default function HomeMoreContent() {
  return <>
    <section className="bg-[#173326] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#bdd69e]">How we work</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">A clear path from requirement to reliable supply.</h2></div><p className="max-w-xl leading-8 text-white/65">Our approach brings together procurement planning, collection coordination, careful handling, and responsive distribution.</p></Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text], index) => <MotionCard key={number} delay={index * .08} className="rounded-3xl border border-white/15 bg-white/5 p-7"><span className="grid size-11 place-items-center rounded-full bg-[#d8efb9] text-sm font-bold text-[#173326]">{number}</span><h3 className="mt-9 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{text}</p></MotionCard>)}</div>
      </div>
    </section>

    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal><img src="/images/home-collection.png" alt="Organized raw milk collection and distribution network" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl" /></Reveal>
        <div><Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Expansion priorities</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Investing in a stronger operating foundation.</h2><p className="mt-5 leading-8 text-[#5e7067]">The proposed project is focused on practical improvements that strengthen supply capability and support sustainable business growth.</p></Reveal><div className="mt-8 grid gap-4 sm:grid-cols-2">{priorities.map(([title, text], index) => <Reveal key={title} delay={index * .07} className="rounded-2xl border border-[#dfe6dc] bg-white p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5e7067]">{text}</p></Reveal>)}</div></div>
      </div>
    </section>

    <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Business value</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Designed around the realities of commercial buyers.</h2><p className="mt-5 leading-8 text-[#5e7067]">Raw milk is an essential and time-sensitive input. We focus on the operating qualities that make a supply relationship useful over the long term.</p><Link to="/quality" className="btn-primary mt-8 bg-[#173326] text-white hover:bg-[#294c38]">Our quality commitment →</Link></Reveal>
        <div className="grid gap-5 sm:grid-cols-2">{[['Supply confidence','Organized planning supports recurring commercial requirements.'],['Direct communication','Buyers can discuss needs without unnecessary layers or complexity.'],['Regional understanding','Local market knowledge supports sourcing and movement decisions.'],['Growth readiness','The network is being strengthened to serve expanding demand.']].map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-3xl bg-[#eef5e5] p-7"><span className="text-xl text-[#69a143]">◆</span><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#5e7067]">{text}</p></MotionCard>)}</div>
      </div>
    </section>

    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl"><Reveal className="text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Common questions</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Planning to work with us?</h2></Reveal><div className="mt-10 space-y-4">{questions.map(([question, answer], index) => <Reveal key={question} delay={index * .08} className="rounded-2xl border border-[#dfe6dc] bg-white p-6 sm:p-7"><h3 className="text-lg font-semibold">{question}</h3><p className="mt-3 leading-7 text-[#5e7067]">{answer}</p></Reveal>)}</div><Reveal className="mt-10 text-center"><Link to="/contact" className="btn-primary bg-[#173326] text-white hover:bg-[#294c38]">Discuss your requirement →</Link></Reveal></div>
    </section>
  </>
}
