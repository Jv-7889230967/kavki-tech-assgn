import './App.css';
import BottomBar from './components/BottomBar';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import SettingsIcon from '@mui/icons-material/Settings';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MovingIcon from '@mui/icons-material/Moving';
import { useState } from 'react';
import Graph from './components/Graph';
import SmallScreenRightSideBar from './components/SmallScreenRightSIdeBar';

function App() {
  const [activetab, setActivetab] = useState('outcome'); //state to check currently which tab is active 
  const [openRigthbar, setOpenrightbar] = useState(false);

  const handleTabClick = (tab) => { //function to check click of the tab
    setActivetab(tab);
  };

  const getButtonStyle = (tab) => { //function to change the color of the tab buttons
    return activetab === tab
      ? {
        background: 'linear-gradient(to bottom right, #E5A10A 0%, #E5A10A 45%, #6E5725 70%, #6E5725 100%)',
        color: 'white'
      }
      : { backgroundColor: '#6E5725', color: 'black' };
  };
  console.log(openRigthbar)

  return (
    <div className="App">
      <LeftSidebar />
      <main className="main-container">
        <header className="searchbar">
          <div className="headings-container">
            <section>
              <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Hello John</p>
              <p>Thursday Nov 29 2023</p>
            </section>
            <div className='card-display-icon'>
              <DragHandleIcon onClick={() => { setOpenrightbar(!openRigthbar) }} style={{ color: 'white' }} fontSize="large" />
            </div>
          </div>
          <div className="search">
            <input placeholder="Search" />
            <div className="smallscreen-nav-container">
              <SettingsIcon style={{ color: '#B8860B' }} fontSize="large" />
              <button>Logout</button>
            </div>
          </div>
        </header>
        <div className="investments-container">
          <section className="holdings-data">
            <article className="balance">
              <div className="heading">
                <p>Balance</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>
                    <MovingIcon style={{ color: '#8CFF3F' }} />
                  </span>
                  <p style={{ color: '#8CFF3F' }}>42%</p>
                </div>
              </div>
              <p style={{ fontWeight: '600', fontSize: 'xx-large', marginLeft: '26px' }}>$20,254.34</p>
            </article>
            <article className="investment">
              <div className="heading">
                <p>Investment</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>
                    <MovingIcon style={{ color: '#8CFF3F' }} />
                  </span>
                  <p style={{ color: '#8CFF3F' }}>42%</p>
                </div>
              </div>
              <p style={{ fontWeight: '600', fontSize: 'xx-large', marginLeft: '26px' }}>$20,254.34</p>
            </article>
          </section>

          <section className="holdings-graph">
            <div className="tabs">
              <button style={getButtonStyle('outcome')} onClick={() => handleTabClick('outcome')}>
                Outcome
              </button>
              <button style={getButtonStyle('income')} onClick={() => handleTabClick('income')}>
                Income
              </button>
            </div>
            {activetab === 'outcome' && <Graph />}
            {activetab === 'income'
              && <p style={{ margin: 'auto', fontSize: "large" }}>No Data to display</p>
            }
          </section>
        </div>
      </main>
      <RightSidebar />
      {openRigthbar && <SmallScreenRightSideBar />}
      <BottomBar />
    </div>
  );
}

export default App;
