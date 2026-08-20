import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../../data/business'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = ({ isActive }) => `relative py-2 text-sm font-medium transition ${isActive ? 'text-white' : 'text-white/75 hover:text-white'}`
  return <motion.header
    initial={false}
    animate={{
      y: 0,
      backgroundColor: scrolled ? 'rgba(103, 132, 88, 0.98)' : 'rgba(103, 132, 88, 0.96)',
      boxShadow: scrolled ? '0 10px 35px rgba(17, 53, 38, 0.14)' : '0 0 0 rgba(0, 0, 0, 0)',
    }}
    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className={`${scrolled ? 'fixed backdrop-blur-xl' : 'absolute'} inset-x-0 top-0 z-50 border-b border-white/15 text-white`}
  >
    <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 sm:px-8 ${scrolled ? 'h-16' : 'h-20'}`}>
      <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Sher Singh Sisodiya Enterprise — home"><img src="/logo-mark.svg" alt="" className="h-14 w-14 object-contain drop-shadow-[0_2px_3px_rgba(17,53,38,.22)]" /><span className="leading-tight"><strong className="block text-sm tracking-[.08em]">SHER SINGH SISODIYA</strong><span className="text-[9px] tracking-[.34em] text-[#e7f8cb]">ENTERPRISE</span></span></Link>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">{navigation.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{item.label}</NavLink>)}</nav>
      <button onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-full border border-white/30 lg:hidden" aria-label="Toggle navigation" aria-expanded={open}><span className="text-2xl leading-none">{open ? '×' : '≡'}</span></button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-white/15 bg-[#113526] px-5 pb-6 pt-3 shadow-xl lg:hidden">{navigation.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `block border-b border-white/10 py-3 text-sm ${isActive ? 'text-[#d7f1b1]' : 'text-white/80'}`}>{item.label}</NavLink>)}</motion.nav>}</AnimatePresence>
  </motion.header>
}



