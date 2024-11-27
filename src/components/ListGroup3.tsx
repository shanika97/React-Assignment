import React, { useState } from 'react'

interface ListGroup3Props {
    countries: string[];
    onSelectedItem: (item: string) => void
}
function ListGroup3({countries,onSelectedItem}: ListGroup3Props) {
    const[selectedIndexItem, setSelectedIndexItem] = useState(-1);

  return (
    <>
    <h2>function pass props</h2>
  <ul className='list-group'>
    {countries.length !== 0 && countries.map((country,index)=>(
        <li
         key={index} className={selectedIndexItem===index ? 'list-group-item active' : 'list-group-item'} 
        onClick={(event)=>{
            setSelectedIndexItem(index);
        onSelectedItem(country)
        }}> 
         {country}
        </li>
    
   
  ))}

  </ul>

    
    </>
  )
}

export default ListGroup3