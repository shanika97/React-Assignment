import React, { useState } from 'react'


interface animal{
    heading :string,
    animals :string[];
}
function Animal({heading ,animals}:animal) {
const[selectedAnimal, setSelectedAnimal] = useState(-1);
   

  return (
   <>
   <h1> {heading}</h1>

   <ul className='list-group'>
    {animals.length !==0 && animals.map((animal,index)=>
        (
        <li key={index}
         className={selectedAnimal===index ? 'list-group-item active' : 'list-group-item'} 
            onClick={()=>setSelectedAnimal(index)}> {animal}</li>
        )) }
   </ul>
   </>
  )
}

export default Animal;