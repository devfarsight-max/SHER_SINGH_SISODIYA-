import PageHero from '../components/ui/PageHero'
import Reveal, { MotionCard } from '../components/ui/Reveal'

const contactOptions = [
  ['Email us', 'ssisodiya380@gmail.com', 'mailto:ssisodiya380@gmail.com', 'Write an email →'],
  ['Call our team', '+91 79835 29701', 'tel:+917983529701', 'Call now →'],
  ['Visit us', 'Vinoba Nagar, Sadabad, Hathras', 'https://www.google.com/maps/search/?api=1&query=Vinoba+Nagar+Sadabad+Hathras', 'View on map →'],
]

export default function Contact() {
  return <>
    <PageHero eyebrow="Contact us" title="Let’s discuss your raw milk requirement." text="Connect with us for recurring supply needs, institutional procurement, wholesale partnerships, or supplier enquiries." />
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4d7b32]">Direct communication</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">No forms. Just a straightforward conversation.</h2>
            <p className="mt-5 leading-8 text-[#526b5d]">Choose the most convenient way to connect. To help us respond effectively, include your business name, expected volume, frequency, and delivery area.</p>
          </div>
          <img src="/images/business-delivery.png" alt="Fresh milk delivery to a hospitality business" className="aspect-[16/10] w-full rounded-3xl object-cover shadow-xl" />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contactOptions.map(([title, detail, href, label], index) =>
            <MotionCard key={title} delay={index * .1} className="flex flex-col rounded-3xl border border-[#d3e6c5] bg-white p-7">
              <span className="grid size-11 place-items-center rounded-full bg-[#d7f1b1] font-bold">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#526b5d]">{detail}</p>
              <a href={href} className="mt-7 font-bold text-[#315f3f] hover:text-[#113526]">{label}</a>
            </MotionCard>
          )}
        </div>
      </div>
    </section>
    <section className="bg-[#edf8df] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-3xl font-semibold">Before you contact us</h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#526b5d]">These details help us understand your requirement and begin a useful discussion.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Approximate volume', 'Delivery location', 'Required frequency', 'Preferred start date'].map((item, index) =>
            <Reveal key={item} delay={index * .08} className="rounded-2xl bg-white p-6 font-semibold">
              <span className="mb-5 block text-[#659b43]">✓</span>{item}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  </>
}
