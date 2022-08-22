import React from 'react'

export default function Child({title,onclick}) {


  return (
    <>
    <h1>{title}</h1>
    <button onClick={onclick}>Change Name</button>
    </>
  )
}
