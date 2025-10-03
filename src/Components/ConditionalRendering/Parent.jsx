import React from 'react'
import Child from './Child';

const Parent = () => {
     const brand="This is a course";
  return (
   
    <div>
      <Child name={brand}/>
    </div>
  )
}

export default Parent
