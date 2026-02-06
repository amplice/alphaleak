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
    <main style={{ maxWidth: 600, margin: '0 auto', padding: '16px' }}>
      <p>
        <a href="https://x.com/amplice" target="_blank" rel="noopener noreferrer">@amplice</a>
      </p>
      
      <hr style={{ border: 'none', borderTop: '1px solid #444', margin: '16px 0' }} />

      <h2>Projects</h2>
      
      <ul>
        {projects.map((p) => (
          <li key={p.name} style={{ marginBottom: 12 }}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
            {' - '}{p.desc}
          </li>
        ))}
      </ul>

      <hr style={{ border: 'none', borderTop: '1px solid #444', margin: '16px 0' }} />
      
      <p>
        <i>see also: storytime, moonbasecity, basedTV</i>
      </p>
    </main>
  )
}
