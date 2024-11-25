import React, { useState } from 'react'

function ToggleVisibility() {

    const [isVisible, setIsVisible] = useState(true);

  return (

    
    <>
    <h1 style={{color:"red", fontFamily:"cursive",marginTop:"20px"}}>ToggleVisibility</h1>


    <div className="card">
  <div className="card-body">
{/* 
    //using if secondm method */}
{isVisible && <p> Hello, I am visible</p>}

<button type="button" className="btn btn-outline-success" 
onClick={() => setIsVisible(!isVisible)}> Toggle Visible </button>
  </div>
</div>
    </>
  )
}


export default ToggleVisibility;