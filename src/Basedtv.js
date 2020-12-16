import React, { useState, useEffect } from 'react'
// import { ethers } from "ethers";
// import univ2BasedSusdABI from '../src/contracts/univ2basedsusd.json'
// import vidsrc from './ampledork.mp4'
import classes from './BackgroundVideo.module.css'
import ReactPlayer from 'react-player'
import muteicon from './muteicon.png'
import unmuteicon from './unmuteicon.png'
import logo from './basedtvlogo.gif'
import skippic from './skip.png'
import emptypic from './empty.png'


import PublitioAPI from 'publitio_js_sdk'
// import vids from './vids.json'


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let apikey = process.env.REACT_APP_PUBLITIO_PUBLIC_KEY
let secretkey = process.env.REACT_APP_PUBLITIO_SECRET_KEY

const publitio = new PublitioAPI(apikey, secretkey)

const BasedTV = () => {
  const [sources, setSources] = useState(['https://media.publit.io/file/h_480/basedtvturnon.mp4']) 
    // let sources = shuffle(vids)
    const [currentVid, setCurrentVid] = useState(sources[0])
    const [muteState, setMuteState] = useState(true)
    const [icon,setIcon] = useState(muteicon)
    const [skip, setSkip] = useState(skippic)

    useEffect(() => {

      publitio.call('/files/list', 'GET', { offset: '0', limit: '100'})
      .then(response => { 
        let videolist = response.files.map((file) => {
          let vidurl = 'https://media.publit.io/file/h_480/'.concat(file.public_id).concat('.mp4')
        return vidurl
    })
    console.log(videolist);
    let filteredlist = videolist.filter((vidurl)=> vidurl!='https://media.publit.io/file/h_480/basedtvturnon.mp4')
    console.log(filteredlist);
      // console.log(videolist);
        let shuffledlist = shuffle(filteredlist) 
        setSources(shuffledlist)
        // console.log(sources)
        // setCurrentVid(shuffledlist[0])  
    
       })
      .catch(error => { console.log(error) })
    }, [])

    const muteHandler = () => {
        setMuteState(!muteState)
        console.log(sources);
        if (muteState) setIcon(unmuteicon) 
        else setIcon(muteicon) 
    }

    const nextVid = () => {
        var index = sources.indexOf(currentVid) //starts at 0
        if (index === sources.length -1) index = 0
        else index ++
        console.log(index)
        setCurrentVid(sources[index]) 
        console.log('onEnded')
      }
      
      const skipVid = () => {
        nextVid()
        setSkip(emptypic)
      }
    return (
            <div className={classes.Container} >
            <ReactPlayer
            width='100vw'
            height='100vh'
            onEnded={nextVid}
            controls={false}
            muted={muteState}    
            loop={false}
            playing	
            autoPlay
  url={currentVid}

/>
<div className={classes.Logo}>
<img src={logo} width='100%'/>
</div>  
<div className={classes.Mutebutton}>
<img src={icon} onClick={muteHandler} width='100%'/>
</div>  
<div className={classes.Skipbutton}> 
<img src={skip} onClick={skipVid} width='100%'/>
</div>

    </div>
    )
}
export default BasedTV