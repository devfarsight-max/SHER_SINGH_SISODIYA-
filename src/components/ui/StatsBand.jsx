import Reveal from './Reveal'
const stats = [['B2B','Focused model'],['4','Buyer segments'],['End-to-end','Coordination'],['Regional','Market focus']]
export default function StatsBand() { return <section className="border-y border-[#d3e6c5] bg-white px-5 py-10 sm:px-8"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">{stats.map(([value,label], i) => <Reveal key={label} delay={i * .08}><p className="text-2xl font-semibold text-[#113526] sm:text-3xl">{value}</p><p className="mt-1 text-sm text-[#6b7b72]">{label}</p></Reveal>)}</div></section> }

