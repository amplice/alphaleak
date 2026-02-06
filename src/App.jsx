import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Storytime from './pages/Storytime'
import Moonbasecity from './pages/Moonbasecity'
import BasedTV from './pages/BasedTV'
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
      padding: isFullscreen ? '10px 20px' : '20px',
      position: isFullscreen ? 'absolute' : 'static',
      zIndex: 10,
      background: isFullscreen ? 'rgba(0,0,0,0.5)' : 'transparent',
    }}>
      {nav.map((item, i) => (
        <span key={item.text}>
          {item.external ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
          ) : (
            <Link to={item.link}>{item.text}</Link>
          )}
          {i < nav.length - 1 && <span style={{ margin: '0 8px', color: '#444' }}>|</span>}
        </span>
      ))}
    </nav>
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
    </BrowserRouter>
  )
}
