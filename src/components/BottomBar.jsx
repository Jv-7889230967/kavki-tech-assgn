import './BottomBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const BottomBar = () => {
    return (
        <footer className='bottombar-container'>
            <nav>
                <a href='/'><NotificationsNoneIcon fontSize='large' style={{ color: '#B8860B' }} /></a>
                <a href='/'><MailOutlineIcon fontSize='large' style={{ color: '#B8860B' }} /></a>
                <a href='/'><FolderIcon fontSize='large' style={{ color: '#B8860B' }} /></a>
                <a href='/'><DeleteOutlineIcon fontSize='large' style={{ color: '#B8860B' }} /></a>
            </nav>
        </footer>
    )
}

export default BottomBar