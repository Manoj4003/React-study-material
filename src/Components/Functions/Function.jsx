import React from 'react'

const Function = () => {
    const brand = "Ford";
    
    // CORRECTED LINE: Using backticks (`) for the template literal
    const text = `Hi, I'm a ${brand} car`; 
    
    return (
        <div>
            <h2>{text}</h2>
        </div>
    )
}

export default Function;