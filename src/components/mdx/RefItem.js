import React from 'react'

const RefItem = props => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.url}</p>
      <p>{props.author}</p>
    </>
  )
}

export default RefItem
