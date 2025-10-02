import React from 'react'
import Parent from './Parent';

const Child = () => {
  const carName = 'Maruthi';
  return (
    <div>
      {/* Sending prop as "name" */}
      <Parent name={carName} />
    </div>
  )
}

export default Child;
