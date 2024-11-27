import { 
    favPLang,
    favFuncMeta,
    favSongMeta
} from '../consts.js'
import '../styles.css';

function FavoriteSong({ meta }) {
    return <div style={{textAlign:'center', paddingTop:'20px'}}>
      <p className='tracker'>Favorite song: </p>
      {/* some error here --> <img src={meta.imgLink}> alt={meta.alt} style={{width: meta.width, height: meta.height}}</img> */}
      <p className='tracker'>{meta.song}</p>
    </div>
  }
  
function FavoriteProgrammingLanguage() {
    return (
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <pre className='tracker'>Favorite programming language:  </pre>
        <p style={{color:'white'}}>{favPLang}</p>
      </div>
    )
}
  
function FavoriteFunction({ meta }) {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
        <pre className='tracker'>Favorite function:  </pre>
        <a href={meta.link} target='_blank'>{meta.func}</a>
      </div>
    )
}
  
function RoyalFlushTracker() {
    return (
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <pre className='tracker'>Royal flushes:  </pre>
        <p style={{color:'white'}}>&mdash;</p>
      </div>
    )
}
  
function HoleInOneTracker() {
    return (
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <pre className='tracker'>Hole-in-ones:  </pre>
        <p style={{color:'white'}}>&#9971;</p>
      </div>
    )
}
  
function Canvas() { 
    return (
      <div className='canvas'>
        <FavoriteSong meta={favSongMeta}/>
        <FavoriteProgrammingLanguage/>
        <FavoriteFunction meta={favFuncMeta}/>
        <HoleInOneTracker/>
        <RoyalFlushTracker/>
      </div> 
    )
}

export { Canvas }