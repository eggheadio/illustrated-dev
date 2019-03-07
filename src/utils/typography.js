import Typography from 'typography'

const typography = new Typography ({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "sans-serif"
  ],
  bodyFontFamily: ["Roboto", "sans-serif"]
}
)



export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

