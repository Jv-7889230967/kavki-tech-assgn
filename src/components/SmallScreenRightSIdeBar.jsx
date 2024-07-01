import { useState } from 'react';
import Card from './Card';
import "./SmallScreenRightSideBar.css"
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SmallScreenRightSideBar = () => {
  const [expanded,setExpanded]=useState(false);
  return (
    <aside className='smallscreen-rightsidebar-container'>
        <header style={{height:'80px',width:'90%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px'}}>
            <div>
                <h3>My cards</h3>
                <p>4 active cards</p>
            </div>
            <button style={{height:'50px',width:'50px',borderRadius:'100%',backgroundColor:'orange',border:'none'}}><AddIcon/></button>
        </header>
        <body className={`smallscreen-cards-container ${expanded?'expanded':''}`}>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </body>
        <footer className='smallscreen-read-more' style={{ display: expanded ? 'none' : 'flex' }}>
          <button onClick={()=>{setExpanded(!expanded)}}>All cards<ArrowForwardIcon/></button>
          </footer> 
    </aside>
  )
}

export default SmallScreenRightSideBar