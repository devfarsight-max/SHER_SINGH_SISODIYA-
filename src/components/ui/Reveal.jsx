import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, y = 28 }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y }} whileInView={reduced ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function MotionCard({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return <motion.article className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={reduced ? {} : { opacity: 1, y: 0 }} whileHover={reduced ? {} : { y: -6 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay }}>{children}</motion.article>
}

