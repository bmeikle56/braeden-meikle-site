import { txtCol, specialColor } from '../styles/colors'
import { useNavigate } from 'react-router-dom'

const footerDivs = [
  {txt: 'Created November 26, 2024', nav: false},
  {txt: 'Email', link: 'mailto:braedenmeikle@gmail.com', icon: 'fa fa-envelope', nav: false},
  {txt: 'LinkedIn', link: 'https://www.linkedin.com/in/bmeikle3/', icon: 'fa fa-linkedin-square', nav: false},
  {txt: 'GitHub', link: 'https://github.com/bmeikle56', icon: 'fa fa-github', nav: false},
  {txt: 'Projects', icon: 'fa fa-folder', nav: true},
]

function Footer() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}> 
      <div className='footer'>
        {footerDivs.map((footerDiv, i) => {
          return <div key={i} style={{display: 'flex', alignItems:'center'}}>
            {!footerDiv.nav && <i className={footerDiv.icon} style={{fontSize: '12px', color: txtCol}}/>}
            {footerDiv.nav && <i className={footerDiv.icon} style={{fontSize: '12px', color: specialColor}}/>}
            {footerDiv.nav && 
              <button style={{textDecoration:'none', background: 'transparent', border: 'none'}} onClick={() => navigate('/projects')}>
                <p className='footer-txt' style={{color: specialColor}}>{footerDiv.txt}</p>
              </button>}
            {footerDiv.link ? 
              <a rel='noreferrer' target='_blank' href={footerDiv.link} style={{textDecoration:'none'}}><p className='footer-txt' style={{paddingLeft:'4px', color: 'gray'}}>{footerDiv.txt}</p></a>
              : !footerDiv.nav && <p className='footer-txt' style={{color: 'gray'}}>{footerDiv.txt}</p>}
          </div>
        })}
        
      </div>
    </div>
  )
}

export { Footer }