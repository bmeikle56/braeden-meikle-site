import { motion } from 'motion/react'

/* String util func to captilize first letter */
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
    position: 'absolute',
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

function Sidebar({ pages }) {
    return (
        <div style={sidebarStyle}>
        <div style={sideBarBtnDivStyle}>{pages.map(page => 
            <button style={sideBarBtnStyle}>
            {capFirst(page)}
            </button>)}</div>
        <div className='side-bar-hdiv'></div>
        </div>
    )
}

function AnimatedSidebar({ pages }) {
    return (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
            <Sidebar pages={pages}/>
        </motion.div>
    )
}

export { AnimatedSidebar }