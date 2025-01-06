
import { txtCol } from "../styles/colors"

const footerDivs = [
  {txt: 'Created November 26, 2024'},
  {txt: 'Email', link: 'mailto:braedenmeikle@gmail.com', icon: 'fa fa-envelope'},
  {txt: 'LinkedIn', link: 'https://www.linkedin.com/in/bmeikle3/', icon: 'fa fa-linkedin-square'},
  {txt: 'GitHub', link: 'https://github.com/bmeikle56', icon: 'fa fa-github'},
]

const iconStyle = {
  fontSize: '12px',
  color: txtCol
}

function Footer() {
  return (
    <div className='footer'>
      {footerDivs.map((footerDiv, i) => {
        return <div key={i} style={{display: 'flex', alignItems:'center'}}>
          <i className={footerDiv.icon} style={iconStyle}></i>
          {footerDiv.link ? 
            <a rel='noreferrer' target='_blank' href={footerDiv.link} style={{textDecoration:'none'}}><p className='footer-txt' style={{paddingLeft:'4px'}}>{footerDiv.txt}</p></a>
            : <p className='footer-txt'>{footerDiv.txt}</p>}
        </div>
      })}
    </div>
  )
}

export { Footer }