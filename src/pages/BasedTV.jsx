import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
import logo from '../assets/basedtvlogo.gif'
import muteicon from '../assets/muteicon.png'
import unmuteicon from '../assets/unmuteicon.png'
import skippic from '../assets/skip.png'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function BasedTV() {
  const [sources, setSources] = useState(['https://media.publit.io/file/h_480/basedtvon2.mp4'])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const token = import.meta.env.VITE_LINODE_ACCESS_KEY
    if (!token) return

    const config = { headers: { Authorization: `Bearer ${token}` } }
    const baseurl = 'https://api.linode.com/v4/object-storage/buckets/us-east-1/basedtv/'

    axios.get(`${baseurl}object-list`, config)
      .then(async (res) => {
        let items = res.data.data
        if (res.data.is_truncated) {
          const res2 = await axios.get(`${baseurl}object-list`, {
            ...config,
            params: { marker: res.data.next_marker }
          })
          items = items.concat(res2.data.data)
        }
        const urls = items.map(d => `https://basedtv.us-east-1.linodeobjects.com/${d.name}`)
        setSources(prev => [...prev, ...shuffle(urls)])
      })
      .catch(() => {})
  }, [])

  const nextVid = () => {
    setCurrentIndex(i => (i + 1) % sources.length)
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#000',
    }}>
      <ReactPlayer
        url={sources[currentIndex]}
        width="100%"
        height="100%"
        playing
        muted={muted}
        onEnded={nextVid}
        style={{ position: 'absolute' }}
      />
      
      <img
        src={logo}
        alt=""
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          width: 150,
          opacity: 0.8,
        }}
      />
      
      <img
        src={muted ? muteicon : unmuteicon}
        alt="mute"
        onClick={() => setMuted(!muted)}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 80,
          width: 40,
          cursor: 'pointer',
          opacity: 0.8,
        }}
      />
      
      <img
        src={skippic}
        alt="skip"
        onClick={nextVid}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 40,
          cursor: 'pointer',
          opacity: 0.8,
        }}
      />
    </div>
  )
}
