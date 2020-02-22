import styled from '@emotion/styled'

export default styled.blockquote`
  & > p {
    max-width: 90%;
    text-align: center;
    margin: 0.8em auto;
    font-size: 1.8em;
    line-height: 1.4em;
    font-family: 'brandon-grotesque';
  }
  & ::before,
  & ::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 3em;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  padding: 0.8em 0em;
`
