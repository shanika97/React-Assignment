import React, { useState } from 'react'
import "./ListGroup3.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeIcon from '@mui/icons-material/Home';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

interface ListGroup3Props {
    countries: string[];
    onSelectedItem: (item: string) => void
}
function ListGroup3({countries,onSelectedItem}: ListGroup3Props) {
    const[selectedIndexItem, setSelectedIndexItem] = useState(-1);

  return (
    <>
    <h1>
      {/* icon add */}
        <AcUnitIcon/>
        <HomeIcon color="success" />

        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
  Here is a gentle confirmation that your action was successful.
</Alert>

    </h1>
    <h2 >function pass props</h2>
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