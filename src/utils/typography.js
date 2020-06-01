import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.overrideStyles = options => ({
  body: {
    fontSize: '1rem',
  },

  a: {
    color: '#3388cc',
    textShadown: 'none',
    textDecoration: 'none',
    borderBottom: '3px solid #3388cc',
    transition: 'border .3s ease-out',
  },

  'a:hover': {
    borderBottom: '3px solid #ffdd44',
  },
})

const typography = new Typography(oceanBeachTheme)

export default typography
