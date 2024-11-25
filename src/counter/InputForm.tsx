import React, { useState } from 'react'
import Swal from 'sweetalert2';

function InputForm() {

    const [text, setText] = useState(" Type something...");

//for input value 
    const handleClick=(event:any)=>{setText(event.target.value)};

    //for button click
    // const handleChange=()=>{
    //     alert(`Current Input: ${text}`);
    //     setText(" Type something...");
    // };
  
    const handleChange1=()=>{
        setText(" ");
    }
  // For button click
  const handleChange = () => {
    Swal.fire({
      title: 'Current Input :',
      text: text,
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#544cf0',
    });
    setText("Type something...");
  };


  return (
 <>
 <h1 style={{color:"purple",fontFamily:"cursive"}}>InputForm</h1>



<input
        type="text"
        value={text}
        onChange={handleClick} 
        placeholder="Type something..."
        style={{ padding: "8px", marginRight: "10px" }}
      />

<button type="button" className="btn btn-primary" onClick={handleChange}>click</button>
<button type="button" className="btn btn-danger" style={{marginLeft:"10px"}} onClick={handleChange1}>Reset</button>
 
 </>
  )
}

export default InputForm;