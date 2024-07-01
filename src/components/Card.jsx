import React from 'react'
import './Card.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SimCardIcon from '@mui/icons-material/SimCard';
const Card = () => {
  return (
    <div className='card-container'>
     <header className='heading-container'>
       <div>
        <h3>US BANK</h3>
        <p>VVIP card</p>
       </div>
       <div>
          <RssFeedIcon style={{color:'white'}} fontSize='large'/>
          <SimCardIcon style={{color:'gold'}} fontSize='large'/>
       </div>
     </header>
     <div className='card-details'>
       <p style={{fontWeight:'1000',fontSize:'25px'}}>7859 5562 **** 6254</p>
       <p>02/26</p>
     </div>
    </div>
  )
}

export default Card