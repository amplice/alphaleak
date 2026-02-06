const projects = [
  {
    name: 'Hardmode',
    url: 'https://hardmode-production.up.railway.app',
    desc: 'Skill-based 2D MMORPG. No items, no grinding — just positioning, timing, and combat.'
  },
  {
    name: 'Bug Fight',
    url: 'http://142.93.44.112:8080/',
    desc: 'Battle bugs in this arena combat game. Work in progress.'
  },
  {
    name: 'Context War',
    url: 'https://contextwar.alphaleak.xyz',
    desc: 'Competitive prompt injection on Base L2. Bid on word slots, craft prompts, trick the oracle.'
  },
  {
    name: 'BasedChat',
    url: 'https://basedchat.alphaleak.xyz',
    desc: 'On-chain bonded chat. $1 USDC per message.'
  },
  {
    name: 'Shellsword',
    url: 'https://clawball.alphaleak.xyz/shellsword/',
    desc: '1D fencing with simultaneous blind turns.'
  }
]

export default function Home() {
  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px 60px' }}>
      <p style={{ marginBottom: 32 }}>
        <a href="https://x.com/amplice" target="_blank" rel="noopener noreferrer">@amplice</a>
      </p>

      <h2 style={{ marginBottom: 20, fontWeight: 400, fontSize: '1.25em' }}>Projects</h2>
      
      {projects.map((p) => (
        <div key={p.name} style={{ marginBottom: 24 }}>
          <a 
            href={p.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: '1.05em', color: '#fff' }}
          >
            {p.name}
          </a>
          <p style={{ margin: '4px 0 0', color: '#666', fontSize: '0.9em', lineHeight: 1.5 }}>{p.desc}</p>
        </div>
      ))}

      <p style={{ marginTop: 48, color: '#444', fontSize: '0.85em' }}>
        More: storytime, moonbasecity, basedTV ↑
      </p>
    </main>
  )
}
