import React, { useState } from 'react'

const Singlestate = () => {
    const[brand,setBrand]=useState(
        {
            name:"maruthi",
            model:"2024",
            year:"2001"
        }
    )
  return (
    <div>
      <h1>{brand.name}</h1>
      <h1>{brand.model}</h1>
      <h1>{brand.year}</h1>
    </div>
  )
}

export default Singlestate
