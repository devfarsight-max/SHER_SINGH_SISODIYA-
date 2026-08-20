import SectionHeading from '../ui/SectionHeading'
import { strengths } from '../../data/business'

export default function About() {
  return <section id="about" className="px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
    <SectionHeading eyebrow="About the enterprise" title="A dependable link in the regional dairy ecosystem." text="SHER SINGH SISODIYA is a proprietorship enterprise focused on procuring and supplying fresh, hygienically sourced raw milk to business customers." />
    <div className="space-y-8 text-base leading-8 text-[#526b5d]"><p>Under the leadership of Mr Sher Singh Sisodiya, the enterprise combines a customer-centric approach with an efficient procurement and distribution network—helping buyers access the supply continuity their operations demand.</p><div className="grid grid-cols-2 gap-3">{strengths.map((item) => <div key={item} className="rounded-2xl border border-[#d3e6c5] bg-white p-5 font-semibold text-[#113526] shadow-sm"><span className="mb-3 block text-[#659b43]">✓</span>{item}</div>)}</div></div>
  </div></section>
}


