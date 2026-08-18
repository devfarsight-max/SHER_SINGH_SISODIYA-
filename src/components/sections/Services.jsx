import SectionHeading from '../ui/SectionHeading'
import { buyerSegments } from '../../data/business'

export default function Services() {
  return <section id="services" className="bg-white px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionHeading eyebrow="Who we serve" title="Supply solutions for growing businesses." /><p className="max-w-md leading-7 text-[#5e7067]">Our B2B model is designed around the recurring, high-volume needs of dairy and food-led enterprises.</p></div>
    <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#dfe6dc] bg-[#dfe6dc] md:grid-cols-2 lg:grid-cols-4">{buyerSegments.map((item) => <article key={item.number} className="group bg-[#f8faf7] p-7 transition hover:bg-[#eef5e5]"><span className="text-xs font-bold text-[#69a143]">{item.number}</span><h3 className="mt-16 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#5e7067]">{item.text}</p><span className="mt-8 block text-xl transition group-hover:translate-x-1">→</span></article>)}</div>
  </div></section>
}
