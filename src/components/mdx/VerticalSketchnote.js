import React from 'react'

const VerticalSketchnote = props => {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '0' }}>
        The Whole Illustrated Note
      </h2>
      <br />
      <div
        style={{
          border: '1px solid #e8f3f7',
          boxSizing: 'border-box',
          borderRadius: '4px',
          boxShadow: '0px 8px 16px -12px rgba(120, 134, 138, 0.75)',
          maxWidth: '300px',
          margin: '0 auto',
        }}>
        {props.children}
      </div>
      <h3
        style={{
          textAlign: 'center',
          fontSize: '1.5em',
          marginTop: '1.2em',
        }}>
        Want to learn more?
      </h3>
      <p
        style={{
          fontSize: '1.1em',
          textAlign: 'center',
          margin: '0 auto',
          maxWidth: '500px',
        }}>
        A high-res & printable version of the illustrated note, plus the full
        course is avaliable here on the{' '}
        <a href={props.courselink} rel='noopener noreferrer' target='_blank'>
          {props.coursename}
        </a>{' '}
        page.
      </p>
    </>
  )
}

export default VerticalSketchnote
