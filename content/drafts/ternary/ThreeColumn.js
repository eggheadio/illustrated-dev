import styled from '@emotion/styled'

const ThreeColumn = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  align-items: center;
  margin: 0 auto;
  @media (max-width: 545px) {
    grid-template-columns: 1fr;
  }
`
export default ThreeColumn
