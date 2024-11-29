/* Constant file */

const lastEditDate = 'Friday, November 29'
const location = 'Atlanta, GA'
const pages = ['bio', 'portfolio', 'thoughts', 'journies']

const favFuncMeta = {
  func: 'compactMap',
  link: 'https://developer.apple.com/documentation/swift/sequence/compactmap(_:)'
}

const favSongMeta = {
  song: 'Escape (Remix)',
  imgLink: 'https://i.scdn.co/image/ab67616d0000b273d8f57323c8f338a647193ad8',
  alt: 'Escape (Remix) album cover',
  size: {width: 25, height: 25},
}

const bioMeta = {
  pfpMeta: {
    imgLink: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
    sqSize: 100,
    alt: 'Profile Picture'
  },
  bio: `
    My name is Braeden Meikle. I'm from the Washington, DC perimeter, 
    where I grew up playing tennis and golf. I went to The Potomac School
    in McLean, Virginia, before attending Georgia Tech to study Computer Science.
    In my free time, I enjoy reading, poker, coding, running, and keeping 
    this site up. A fervent supporter of Washington pro sports, I closely
    follow the Capitals, Wizards, and Commanders.
  `
}

export { 
  bioMeta,
  lastEditDate,
  location,
  favFuncMeta,
  favSongMeta,
  pages,
}