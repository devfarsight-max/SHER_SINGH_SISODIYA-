import { Link } from 'react-router-dom'
import Reveal, { MotionCard } from '../ui/Reveal'

const principles = [
  ['Integrity in commitments', 'Communicate honestly with suppliers, customers, and business stakeholders.'],
  ['Responsibility in handling', 'Treat a time-sensitive raw material with the attention its commercial use requires.'],
  ['Respect for relationships', 'Build partnerships through consistency, clarity, and mutual value.'],
  ['Discipline in growth', 'Expand capacity through practical planning and stronger operating systems.'],
]

const roadmap = [
  ['Foundation', 'Strengthen day-to-day procurement, collection coordination, and buyer communication.'],
  ['Capacity', 'Develop the supplier network and infrastructure needed to manage greater volumes.'],
  ['Efficiency', 'Improve planning, handling, route coordination, and operational responsiveness.'],
  ['Reach', 'Serve more qualified buyers across the regional dairy and food ecosystem.'],
]

export default function AboutMoreContent() {
  return <>
    <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative"><img src="/images/dairy-procurement-hero.png" alt="Regional milk procurement led through practical field operations" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover object-[65%_center] shadow-xl" /><div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#557f36]">Leadership</p><p className="mt-2 font-semibold">Focused on dependable execution and long-term relationships.</p></div></Reveal>
        <Reveal><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Leadership philosophy</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Hands-on leadership with a clear business purpose.</h2><p className="mt-5 leading-8 text-[#5e7067]">Under the direction of Mr Sher Singh Sisodiya, the enterprise maintains a practical approach to procurement, customer service, and network development. Decisions are guided by the realities of the regional market and the needs of both suppliers and buyers.</p><p className="mt-5 leading-8 text-[#5e7067]">The leadership focus is not simply on increasing volume. It is on creating the capacity, relationships, and operating discipline required to grow responsibly.</p><Link to="/contact" className="btn-primary mt-8 bg-[#173326] text-white hover:bg-[#294c38]">Connect with the enterprise →</Link></Reveal>
      </div>
    </section>

    <section className="bg-[#eef5e5] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">What guides us</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Values expressed through everyday business practice.</h2><p className="mt-5 leading-8 text-[#5e7067]">Our principles shape how the enterprise approaches commitments, communication, supply relationships, and future development.</p></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2">{principles.map(([title, text], index) => <MotionCard key={title} delay={index * .08} className="rounded-3xl bg-white p-8 shadow-sm"><span className="grid size-10 place-items-center rounded-full bg-[#d8efb9] text-sm font-bold">0{index + 1}</span><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#5e7067]">{text}</p></MotionCard>)}</div></div>
    </section>

    <section className="bg-[#173326] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#bdd69e]">Growth roadmap</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">A structured path toward a stronger enterprise.</h2></div><p className="max-w-xl leading-8 text-white/65">Each stage of growth supports the next—building from operational reliability toward larger capacity and wider market participation.</p></Reveal><div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{roadmap.map(([title, text], index) => <MotionCard key={title} delay={index * .09} className="rounded-3xl border border-white/15 bg-white/5 p-7"><p className="text-sm font-bold text-[#bdd69e]">PHASE 0{index + 1}</p><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{text}</p></MotionCard>)}</div></div>
    </section>

    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl"><Reveal className="text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Shared value</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">An enterprise connected to many stakeholders.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5e7067]">Sustainable progress is strongest when growth creates practical benefits throughout the business ecosystem.</p></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[['Customers','More dependable access to fresh raw milk and responsive supply coordination.'],['Suppliers','Stronger procurement relationships and broader access to organized demand.'],['Financial institutions','A business model supported by defined expansion priorities and market need.'],['Regional ecosystem','Improved connections between dairy production, trade, and commercial consumption.']].map(([title, text], index) => <Reveal key={title} delay={index * .08} className="rounded-2xl border border-[#dfe6dc] bg-white p-7"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#5e7067]">{text}</p></Reveal>)}</div><Reveal className="mt-12 flex justify-center"><Link to="/supply-network" className="btn-secondary border-[#173326]/20 text-[#173326] hover:bg-[#eef5e5]">Explore our supply network →</Link></Reveal></div>
    </section>
  </>
}
