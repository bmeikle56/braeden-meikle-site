import { txtCol } from '../styles/colors'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerDivs = [
  {txt: 'Email', link: 'mailto:braedenmeikle@gmail.com', icon: 'fa fa-envelope', nav: false},
  {txt: 'LinkedIn', link: 'https://www.linkedin.com/in/bmeikle3/', icon: 'fa fa-linkedin-square', nav: false},
  {txt: 'GitHub', link: 'https://github.com/bmeikle56', icon: 'fa fa-github', nav: false},
  {txt: 'Projects', icon: 'fa fa-folder', nav: true},
]

function Footer() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20vw 0 20vw', height: '10vh' }}> 
      <div className='footer'>
        {footerDivs.map((footerDiv, i) => {
          return <motion.div key={i} style={{display: 'flex', alignItems:'center'}}
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

export { Footer }