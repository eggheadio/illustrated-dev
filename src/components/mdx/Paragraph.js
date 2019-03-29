import styled from '@emotion/styled'
import { bpMinSM } from '../../utils/breakpoints'

export default styled.p`
  text-align: left;
  ${bpMinSM} {
    line-height: 1.7;
    font-size: 22px;
  }
  line-height: 1.5;
  font-size: 20px;
  font-family: 'ff-tisa-web-pro', serif;
`;
