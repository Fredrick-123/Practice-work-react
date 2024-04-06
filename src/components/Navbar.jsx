import './Navbar.scss'
import {motion} from  'framer-motion';
import Sidebar from './Sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* SideBar*/}
        <Sidebar/>
        <div className='wrapper'>
            <motion.span initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale:1}} transition={{ duration: 0.5}}>Klaus Dev</motion.span>
            <div className='social'>
                <a href="#"><img src='/facebook.png' alt='facebook' /></a>
                <a href="#"><img src='/instagram.png' alt='facebook' /></a>
                <a href="#"><img src='/youtube.png' alt='facebook' /></a>
                <a href="#"><img src='/dribble.png' alt='facebook' /></a>
            </div>

        </div>
    </div>
  )
}

export default Navbar