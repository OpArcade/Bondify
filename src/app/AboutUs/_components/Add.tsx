 'use client'; //use to  

import React from 'react'

const AddButton = () => {
  return (
    <div>
        <button onClick={()=> console.log('clicked')}>Add to card</button>
    </div>
  )
}

export default AddButton
