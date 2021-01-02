import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom'
import nav from './nav.json'
import footerimg from './based-akane.gif'
import Joseph from './storytime'
import { Navbar, Footer } from './smallcomponents'
import Moonbasecity from './moonbasecity'
import Rovers from './Rovers'
import History from './Rebasehistory'
import Faketwap from './Faketwap'
import Strat from './Strat'
import BasedTV from './Basedtv'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,  
  // useRouteMatch,
  // useHistory,
  // useLocation
} from "react-router-dom"

// getbasedprice()


const App = () => {

  const tshirtslink = 'https://basedbootlegs.myteespring.co'
  // save clicks of each button to own state
  // const [good, setGood] = useState(0)
  // const [balance, setBalance] = useState('')

  return (
    <Router>
      <Navbar nav={nav} />
      <Switch>
        <Route path="/storytime">
          <Joseph />
        </Route>
        <Route path="/strat">
          <Strat />
        </Route>
        <Route path="/buttons">
          <Rovers />
        </Route>
        <Route path="/moonbasecity">
          <Moonbasecity />
        </Route>
        <Route path="/basedtv">
          <BasedTV />
        </Route>
        <Route path='/nft' component={() => { 
     window.location.replace('https://app.rarible.com/token/0x3ac131f616014bde3e0bc9fa67d05deb76af0d88:1:0x4161eab0b7d555298adc4f40fa0c524dd2e596fc'); 
     return null;
}}/>  
        <Route path="/">
        <Faketwap />

          <History />
        </Route>
      </Switch>
      <Footer shill={{ link: tshirtslink, text: "buy a fucking t shirt pleb they r dope" }}
        footertext={'stay BASED'}
        footerimg={footerimg} />
    </Router>
  )
}

// const Rebaseinfo = ({ rebasehistory }) => {
//   return (
//     <>
//       STARTING SUPPLY: 100,000
//       <br /><img src={abovefoldimg} width="500px" alt='' />
//       <ol>
//         {rebasehistory.map((value) => {
//           return <li key={value.date}><b>Date:</b> {value.date} | <b>Supply:</b> {value.supply} | <b>Mkcap:</b> {value.marketcap}</li>
//         })}
//       </ol>
//     </>
//   )
// }
//   return (
//     <>
//   const test = nav.map(value => '<a href"=' + {value.link} + '">' + {value.text} + '</a>')
//     </>
//   )
// }

//const m2 = t.map(value => '<li>' + value + '</li>')

// const Basepage = () => {
//   return (
//     <>
//       <Header title="Stay Based" heading="BASED REBASE HISTORY" />
//       <Rebaseinfo rebasehistory={rebasehistory} />
//     </>
//   )
// }

export default App