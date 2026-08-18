import SectionHeading from '../ui/SectionHeading'
import { supplySteps } from '../../data/business'

export default function SupplyChain() {
  return <section id="network" className="bg-[#203d2e] px-5 py-24 text-white sm:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading light eyebrow="From source to business" title="A supply chain designed for consistency." text="Our proposed expansion strengthens every stage—from procurement capacity and milk collection to distribution efficiency and wider market access." /><div className="mt-16 grid gap-5 lg:grid-cols-3">{supplySteps.map((item) => <article key={item.step} className="rounded-3xl border border-white/15 p-7 lg:p-9"><span className="grid size-11 place-items-center rounded-full bg-[#d8efb9] text-sm font-bold text-[#173326]">{item.step}</span><h3 className="mt-10 text-2xl font-semibold">{item.title}</h3><p className="mt-4 leading-7 text-white/65">{item.text}</p></article>)}</div></div></section>
}
