import { useState } from 'react'
import './LeftSidebar.css';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
const LeftSidebar = () => {
    const [expand, setExpand] = useState(false);
    const Handleclick = () => {
        setExpand(!expand);
    }
    return (
        <aside className={`sidebar-container ${expand ? 'expanded' : 'collapsed'}`}>
            <button onClick={Handleclick} style={{ height: '24px', width: '35px', backgroundColor: 'white', border: 'none', alignContent: 'center', cursor: 'pointer' }}><SyncAltIcon fontSize='small' /></button>
            <nav className='nav-container'>
                <button style={{ height: '50px', width: '55px', border: 'none', backgroundColor: "#B8860B", borderRadius: '10px' }}><GridViewIcon style={{ color: 'white' }} fontSize='medium' /></button>
                <nav className='links-section'>
                    <a href='/'><NotificationsNoneIcon style={{ color: '#B8860B' }} />{expand&&<span>Notifications</span>}</a>
                    <a href='/'><MailOutlineIcon style={{ color: '#B8860B' }} />{expand&&<span>Messages</span>}</a>
                    <a href='/'><FolderIcon style={{ color: '#B8860B' }} />{expand&&<span>Files</span>}</a>
                    <a href='/'><DeleteOutlineIcon style={{ color: '#B8860B' }} />{expand&&<span>Trash</span>}</a>
                </nav>
            </nav>
            <section className='logout-container'>
                <button><SettingsIcon style={{ color: '#B8860B' }} />{expand && <span>Settings</span>}</button>
                <button><LogoutIcon style={{ color: '#B8860B' }} />{expand&&<span>Logout</span>}</button>
            </section>
        </aside>
    )
}

export default LeftSidebar