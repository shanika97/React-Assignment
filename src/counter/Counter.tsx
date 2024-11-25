import React, { useState } from 'react'

function Counter() {

    const [count,setCount]=useState(0);

  return (
   <>
   
   <h1 style={{color:"green"}}>Counter Application</h1>
   <div className="card" >
  <div className="card-body">
    <h5 className="card-title">Counter: {count}</h5>



    <div>
<button type="button" className="btn btn-primary" style={{marginRight:"10px"}} 
onClick={()=>setCount(count+1)}>Increment</button> 
<button type="button" className="btn btn-success" style={{marginRight:"10px"}} 
onClick={()=>setCount(count-1)}>Decrement</button>
<button type="button" className="btn btn-danger" style={{marginRight:"10px"}}
onClick={()=>setCount(0)}>Reset</button>

    
</div>

  </div>
</div>

<br />

   
   </>
  )
}

export default Counter;