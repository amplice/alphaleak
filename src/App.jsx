import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Storytime from './pages/Storytime'
import Moonbasecity from './pages/Moonbasecity'
import BasedTV from './pages/BasedTV'
import cityGif from './assets/based-city.gif'
import logoImg from './assets/astrobased.png'
import footerGif from './assets/based-akane.gif'
import './index.css'

const nav = [
  { text: 'main', link: '/' },
  { text: 'storytime', link: '/storytime' },
  { text: 'moonbasecity', link: '/moonbasecity' },
  { text: 'basedTV', link: '/basedtv' },
  { text: 'hardmode', link: 'https://hardmode-production.up.railway.app', external: true },
  { text: 'bug fight', link: 'http://142.93.44.112:8080/', external: true },
  { text: 'context war', link: 'https://contextwar.alphaleak.xyz', external: true },
  { text: 'basedchat', link: 'https://basedchat.alphaleak.xyz', external: true },
  { text: 'shellsword', link: 'https://clawball.alphaleak.xyz/shellsword/', external: true },
]

function Nav() {
  const location = useLocation()
  const isFullscreen = location.pathname === '/moonbasecity' || location.pathname === '/basedtv'

  return (
    <nav style={{
      padding: '8px',
      position: isFullscreen ? 'absolute' : 'static',
      zIndex: 10,
      background: isFullscreen ? 'rgba(0,0,0,0.8)' : 'transparent',
    }}>
      [ {nav.map((item, i) => (
        <span key={item.text}>
          {item.external ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
          ) : (
            <Link to={item.link}>{item.text}</Link>
          )}
          {i < nav.length - 1 && ' | '}
        </span>
      ))} ] <img src={logoImg} alt="" style={{ width: 30, verticalAlign: 'middle' }} />
      {!isFullscreen && (
        <div style={{ marginTop: 8 }}>
          <img src={cityGif} alt="" style={{ maxWidth: '100%', width: 450 }} />
        </div>
      )}
    </nav>
  )
}

function Footer() {
  const location = useLocation()
  const isFullscreen = location.pathname === '/moonbasecity' || location.pathname === '/basedtv'
  
  if (isFullscreen) return null
  
  return (
    <footer style={{ padding: '16px', textAlign: 'center' }}>
      <p>stay BASED</p>
      <img src={footerGif} alt="" style={{ maxWidth: '100%', width: 500, marginTop: 8 }} />
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storytime" element={<Storytime />} />
        <Route path="/moonbasecity" element={<Moonbasecity />} />
        <Route path="/basedtv" element={<BasedTV />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
