import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.overrideStyles = (options) => ({
  a: {
    color: '#3388cc',
    textShadown: 'none',
    textDecoration: 'none',
    borderBottom: '3px solid #3388cc'
  },
})

const typography = new Typography(oceanBeachTheme)

export default typography
