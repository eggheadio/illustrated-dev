import Typography from 'typography'

const typography = new Typography ({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerWeight: 500,
  headerFontFamily: ['Avenir Next', 'sans-serif'],
  headerColor: '#474751'
}
)



export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

