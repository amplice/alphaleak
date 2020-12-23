import React, { useState, useEffect } from 'react'
import AWS from 'aws-sdk'
import moonbased from './moonbased.mp4'
import axios from 'axios'
let authheader = 'Bearer ' + process.env.REACT_APP_LINODE_ACCESS_KEY

let config = {
    headers: {
      'Authorization': authheader
    }
  }

const baseurl = 'https://api.linode.com/v4/object-storage/buckets/us-east-1/basedtv/'
  
const Strat = () => {

    return (
<div>
    <li>Something bout honey badgers</li>
    <li>Ppl rly like bac to the future</li>
    <li>feeling pretty cold rn</li>
    <li>flour + water can lead to many incredible things</li>
    <li>liquified steak yummy</li>
    <li>rewards will come to those particiating in evening prayer</li>


    </div>
    )
}
export default Strat

// basedtv.us-east-1.linodeobjects.com