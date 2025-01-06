
/*   Global data file for easy access and modification   */

const pages = ['fun', 'portfolio', 'bytes']

/*   Metadata for the fun section   */
const funMeta = {
  activity: [
    [1,1,1,1,1,1,0,1,1,0],
    [1,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0]
  ],
  animMeta: [
    {
      meta: {
        actor: 'Braeden',
        act: 'using',
        obj: 'iPhone'
      }
    },
    {
      meta: {
        lang: 'Swift',
        com: 'is lit',
      }
    },
    {
      meta: {
        out: 1,
        err: 'SIGABRT',
      }
    }
  ],
  favFuncMeta: {
    func: 'compactMap',
    link: 'https://developer.apple.com/documentation/swift/sequence/compactmap(_:)'
  },
  favSongMeta: {
    song: 'Escape',
    imgLink: 'https://i.scdn.co/image/ab67616d0000b273d8f57323c8f338a647193ad8',
    alt: 'Escape (Remix) album cover',
    size: {width: 25, height: 25},
  }
}

/*   Metadata for the portfolio section   */
const portfolioMeta = {
  bioMeta: {
    pfpMeta: {
      imgLink: 'https://i.postimg.cc/GhTKWxyY/IMG-6071.jpg',
      sqSize: 100,
      alt: 'Profile Picture'
    },
    bio: `
      I'm from the Washington, DC perimeter, where I grew up playing 
      tennis and golf. An avid learner, I went to The Potomac 
      School in McLean, Virginia, before attending Georgia Tech to 
      study Computer Science. In my free time, I enjoy reading, poker, 
      coding, running, and keeping this site up. I'm a fervent supporter 
      of Washington pro sports, closely following the Capitals, Wizards, 
      Yellowjackets, and Commanders.
    `
  },
  geicoMeta: {
    alt: 'GEICO iOS App icon',
    clip: 'inset(9.08px 32.3px 8.4px 32.4px round 8px)',
    desc: 'GEICO iOS app',
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e6/5c/9a/e65c9a80-1eaa-606e-ca79-9a0921d0921f/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png',
    imgRect: {width: 100, height: 50},
    imgHOffset: 0,
    imgVOffset: '0px',
    link: 'https://apps.apple.com/us/app/geico-mobile-car-insurance/id331763096',
  },
  hiyaMeta: {
    alt: 'Hiya iOS App icon',
    clip: 'inset(7.98px 32.5px 8.3px 32.5px round 8px)',
    desc: 'Hiya iOS app',
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/40/68/8f/40688f33-758d-52d3-8285-03f632a7cd70/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/1200x600wa.png',
    imgRect: {width: 100, height: 50},
    imgHOffset: 0,
    imgVOffset: '0px',
    link: 'https://apps.apple.com/us/app/hiya-spam-blocker-caller-id/id986999874',
  },
  sessions: [
    {result: 143, stakes: '$1/$3', loc: 'MGM', date: '11/22/24', dur: '2.5 hrs'},
    {result: 31, stakes: '$1/$3', loc: 'MGM', date: '11/27/24', dur: '4 hrs'},
    {result: -476, stakes: '$1/$3', loc: 'MGM', date: '11/29/24', dur: '5.5 hrs'},
    {result: 125, stakes: '$0.25/$0.5', loc: 'online', date: '12/06/24', dur: '1.5 hrs'},
    {result: 65, stakes: '$0.25/$0.5', loc: 'online', date: '12/07/24', dur: '5 hrs'},
    {result: 225, stakes: 'tourney', loc: 'online', date: '12/08/24', dur: '2 hrs'},
    {result: 31, stakes: '$0.25/$0.5', loc: 'online', date: '12/09/24', dur: '2.5 hrs'},
    {result: 44, stakes: '$0.25/$0.5', loc: 'online', date: '12/10/24', dur: '4 hrs'},
    {result: 324, stakes: '$0.25/$0.5', loc: 'online', date: '12/11/24', dur: '4 hrs'},
  ],
  siteMeta: {
    alt: 'Website logo',
    clip: 'inset(45.6px 43px 46px 35.5px round 8px)',
    desc: 'braedenmeikle.dev',
    img: 'https://i.postimg.cc/50C1H771/logo.png',
    imgRect: {width: 110, height: 110},
    imgHOffset: -2.5,
    imgVOffset: '14px',
  }
}

export { 
  funMeta,
  pages,
  portfolioMeta
}