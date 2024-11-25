import React, { useState } from 'react'

function ListGroup2() {

  const selectedCity:number = 1;

    const cities:string[]=["colombo",
        "kandy",
        "Galle",
        "jagffna ",
    ];

    const HandleEvent=(event :React.MouseEvent)=>{
        console.log(event);
    }

    //using hook-->useState
    const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <p>hello</p>
      <ul className="list-group">
        {cities.length !== 0 && cities.map((city, index) => (
          <li key={index} className="list-group-item active" onClick={(HandleEvent)}>{city + " " + index}   </li>
        ))}
      </ul>


      <ul className="list-group">
        {cities.length !== 0 && cities.map((city, index) => (
          <li key={index}
           className={selectedCity === index ? "list-group-item active" : "list-group-item"} 
           onClick={(HandleEvent)}>{city + " " + index} 
             </li>
        ))}
      </ul>

      {/* //use state */}

<ul className="list-group">
  {cities.length !==0 && cities.map((city,index)=>(
    <li key={index} className={selectedIndex==index ? "list-group-item active":"list-group-item"} 
    onClick={()=>setSelectedIndex(index)}>
 {city}
    </li>
  ))}

</ul>
    </>
  )
}

export default ListGroup2