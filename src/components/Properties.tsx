import React, { useState } from 'react'


interface ListProps{
    heading:string;
    countries:string[];
}
function Properties(ListProps:ListProps) {

    // const countries :string[] = ["India","Pakistan","Nepal","Bhutan"];


   const [selectedCountry, setSelectedCountry] = useState(0);



  return (
  <>
  <h1>{ListProps.heading}</h1>
  <ul className='list-group'>
    {ListProps.countries.length !== 0 && ListProps.countries.map((country,index)=>(
        <li
         key={index} className={selectedCountry===index ? 'list-group-item active' : 'list-group-item'} 
        onClick={()=>setSelectedCountry(index)}>  {country}
        </li>
    
   
  ))}

  </ul>
  </>
  )
}

export default Properties