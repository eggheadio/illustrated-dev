import { css } from '@emotion/core'
import { bpMaxSM } from './breakpoints'

const reset = css`
${bpMaxSM} {
  h1 {
  font-size: 1.75rem;
}
h3 {
  font-size: 1.4rem;
  line-height: 1.3;
}
}
h3 {
  margin-bottom: 0.5em;
  margin-top: 1.2em;
}
p {
  font-family: 'ff-tisa-web-pro', serif;
}

.twitter-tweet {
  padding: 10px 0 30px;
}
.active {
  color: #3FCCDC;
}
  form {
    margin: 0;
  }
  ul, ol {
    list-style-position: inside;
    margin-left: 0;
    li {
      margin-left: 0;
    }
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    font-style: normal;
    padding: 0;
    margin: 0; 
    background: #F0F3F4;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    overflow-y: scroll !important;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
  }
  
  ::selection {
  }
  a {
    color: #28C7D9;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  }
  a:not([href]):not([tabindex]) {
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  blockquote {
    border-bottom: 1px solid #3FCCDC;
    border-top: 1px solid #3FCCDC;
    padding-left: 1rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    font-style: italic;
    p {
      line-height: 1.3 !important;
      font-family: 'ff-tisa-web-pro', serif;
    }
  }
  [tabindex='-1']:focus {
    outline: none !important;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    white-space: pre;
    padding: 1em;
  }
  code { padding: 2px 4px; }
  figure {
    margin: 0 0 1rem 0;
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: white;
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  input,
  button,
  select,
  textarea {
    line-height: inherit;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
`;

export default reset
