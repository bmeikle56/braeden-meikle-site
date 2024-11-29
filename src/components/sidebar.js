import { motion } from 'motion/react'

/* Captilize first letter of the string */
function capFirst(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const sideBarBtnStyle = {
    color: 'lightgray',
    width: '80px',
    height: '80px',
    backgroundColor: 'transparent',
    border: 'none'
}

const sidebarStyle = {
    backgroundColor:'black',
    paddingTop:'25vh',
    zIndex: '1',
    position: 'fixed',
    display:'flex',
}

const sideBarBtnDivStyle = {
    display: 'flex',
    color: 'gray',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    width: '120px',
}

function Sidebar({ pages, scrollFunc }) {
    return (
        <div style={sidebarStyle}>
        <div style={sideBarBtnDivStyle}>{pages.map(page => 
            <button className='side-bar-btn' style={sideBarBtnStyle} onClick={scrollFunc}>
            {capFirst(page)}
            </button>)}</div>
        <div className='side-bar-hdiv'></div>
        </div>
    )
}

function AnimatedSidebar({ pages, scrollFunc }) {
    return (
        <motion.div style={{position:'fixed'}} initial={{ x: -100 }} animate={{ x: 0 }}>
            <Sidebar pages={pages} scrollFunc={scrollFunc}/>
        </motion.div>
    )
}

export { AnimatedSidebar }