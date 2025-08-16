import { txtCol } from '../../styles/colors'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import '@fortawesome/fontawesome-free/css/all.min.css'

const footerDivs = [
  {txt: 'Email', link: 'mailto:braedenmeikle@gmail.com', icon: 'fas fa-envelope', nav: false},
  {txt: 'LinkedIn', link: 'https://www.linkedin.com/in/bmeikle3/', icon: 'fab fa-linkedin', nav: false},
  {txt: 'GitHub', link: 'https://github.com/bmeikle56', icon: 'fab fa-github', nav: false},
  {txt: 'Projects', icon: 'fas fa-folder', nav: true},
]

function Footer() {
  const navigate = useNavigate()

  return (
    <div style={{zIndex: 1, position: 'relative'}}>
      <div id='footer'> 
        {footerDivs.map((footerDiv, i) => {
          return <motion.div key={i} style={{display: 'flex', alignItems:'center', background: 'black', padding: '0 16px 0 16px', borderRadius: 12}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: (.25 * i) + .25
          }}
          >
            {!footerDiv.nav && <i className={footerDiv.icon} style={{fontSize: '12px', color: txtCol}}/>}
            {footerDiv.nav && <i className={footerDiv.icon} style={{fontSize: '12px', color: 'rgb(12,123,0)', textShadow: '0px 0px 15px rgb(12,123,0), 0px 0px 12px rgb(12,123,0), 0px 0px 15px rgb(12,123,0)'}}/>}
            {footerDiv.nav && 
              <button style={{textDecoration:'none', background: 'transparent', border: 'none'}} onClick={() => navigate('/projects')}>
                <pre className='footer-txt' style={{color: 'rgb(12,123,0)', textShadow: '0px 0px 15px rgb(12,123,0), 0px 0px 12px rgb(12,123,0), 0px 0px 15px rgb(12,123,0)'}}>{footerDiv.txt}</pre>
              </button>}
            {footerDiv.link ? 
              <a rel='noreferrer' target='_blank' href={footerDiv.link} style={{textDecoration:'none'}}><pre className='footer-txt' style={{paddingLeft:'4px', color: 'gray'}}>{footerDiv.txt}</pre></a>
              : !footerDiv.nav && <pre className='footer-txt' style={{color: 'gray'}}>{footerDiv.txt}</pre>}
          </motion.div>
        })}
      </div>
    </div>
  )
}

export default Footer