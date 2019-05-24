import React from 'react'
import styled from '@emotion/styled'

const Section = styled.div`
  height: 90vh;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.p`
  text-align: center;
`

const ReactHooks = () => {
  return (
    <div>
      <Section>
        <Text>Things on things</Text>
      </Section>
      <Section>
        <Text>Things on thing on things</Text>
      </Section>
      <Section>
        <Text>Things on thing on things</Text>
      </Section>
      <Section>
        <Text>Things on thing on things</Text>
      </Section>
    </div>
  )
}

export default ReactHooks
