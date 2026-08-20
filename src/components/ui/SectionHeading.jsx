export default function SectionHeading({ eyebrow, title, text, light = false }) {
  return <div className="max-w-2xl">
    <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? 'text-[#c7e7a1]' : 'text-[#4d7b32]'}`}>{eyebrow}</p>
    <h2 className={`text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-[#113526]'}`}>{title}</h2>
    {text && <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? 'text-white/70' : 'text-[#526b5d]'}`}>{text}</p>}
  </div>
}

