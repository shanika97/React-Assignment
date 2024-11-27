import React from 'react'
import ListGroup from './components/ListGroup'
import ListGroup2 from './components/ListGroup2'

import Counter from './counter/Counter'
import InputForm from './counter/InputForm'
import ToggleVisibility from './counter/ToggleVisibility'
import Properties from './components/Properties'
import Animal from './components/Animal'
import ListGroup3 from './components/ListGroup3'
// import InputForm from './counter/InputForm'
 

function App() {

  const countries :string[] = ["India","Pakistan","Nepal","Bhutan"];
  const Animals:string[]=["Dog","Cat","Tiger","Lion"];
const heading :string = "List of Animals";

const handleselectItems = (item:string) =>{
  console.log(item);
alert("country name :"+item);
};

  return (
    <>
   
   {/* <p>Hello world</p>
   <ListGroup />
   <ListGroup2 /> */}
   <Counter/>
   <InputForm/>


   <ToggleVisibility/>

   <Properties countries={countries} heading="List of countries"/>
 <Animal animals={Animals} heading={heading}/>

{/* funticon pass props */}
 <ListGroup3 countries={countries} onSelectedItem={handleselectItems}/>
    </>
  )
}

export default App