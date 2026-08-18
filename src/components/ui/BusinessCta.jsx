import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function BusinessCta({ title = 'Let’s build a dependable supply partnership.', text = 'Tell us about your volume, delivery location, and supply schedule.' }) {
  return <section className="px-5 py-20 sm:px-8"><Reveal className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2rem] bg-[#d8efb9] p-8 sm:p-12 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#557f36]">Start a conversation</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2><p className="mt-4 leading-7 text-[#486052]">{text}</p></div><Link to="/contact" className="btn-primary shrink-0 bg-[#173326] text-white hover:bg-[#294c38]">Send an inquiry →</Link></Reveal></section>
}
