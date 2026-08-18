import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import SupplyNetwork from './pages/SupplyNetwork'
import Quality from './pages/Quality'
import Contact from './pages/Contact'
import HomeMoreContent from './components/sections/HomeMoreContent'
import AboutMoreContent from './components/sections/AboutMoreContent'
import ServicesMoreContent from './components/sections/ServicesMoreContent'
import SupplyNetworkMoreContent from './components/sections/SupplyNetworkMoreContent'
import QualityMoreContent from './components/sections/QualityMoreContent'

export default function App() {
  return <Routes><Route element={<RootLayout />}><Route index element={<><Home /><HomeMoreContent /></>} /><Route path="about" element={<><About /><AboutMoreContent /></>} /><Route path="services" element={<><Services /><ServicesMoreContent /></>} /><Route path="supply-network" element={<><SupplyNetwork /><SupplyNetworkMoreContent /></>} /><Route path="quality" element={<><Quality /><QualityMoreContent /></>} /><Route path="contact" element={<Contact />} /></Route></Routes>
}
