import React, { useState } from 'react'
import ListGroup from './components/ListGroup'
import ListGroup2 from './components/ListGroup2'

import Counter from './counter/Counter'
import InputForm from './counter/InputForm'
import ToggleVisibility from './counter/ToggleVisibility'
import Properties from './components/Properties'
import Animal from './components/Animal'
import ListGroup3 from './components/ListBox3'
import Alret from './components/Alret'
import ExampleChild from './components/ExampleChild'
import { Button } from '@mui/material'
import Buttons from './components/ListBox3/Buttons'
import AlretClose from './components/ListBox3/AlretClose'
// import InputForm from './counter/InputForm'
 

function App() {

  const countries :string[] = ["India","Pakistan","Nepal","Bhutan"];
  const Animals:string[]=["Dog","Cat","Tiger","Lion"];
const heading :string = "List of Animals";

const handleselectItems = (item:string) =>{
  console.log(item);
alert("country name :"+item);
};


const [visibleAlert, setVisibleAlert] = useState(false);


const handleclick=()=>{
  console.log("day 5");
  setVisibleAlert(true);
}

const handleClose=()=>{
  console.log("close alert");
  setVisibleAlert(false);
}


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

{/* funticon pass props method 1 */}
 <ListGroup3 countries={countries} onSelectedItem={handleselectItems}/>

 {/* <ListGroup3 countries={countries} onSelectedItem={(item:string)=>{
  console.log(item);
 }}/> */}

{/* children */}

 <Alret>
  <h1>hello world</h1>
 </Alret>

<ExampleChild>
  <h2> example child information</h2>
</ExampleChild>




{/* Day 5 */}

{visibleAlert && <AlretClose onClose={handleClose}> Hiii welcome to coding world</AlretClose>}

 <Buttons color='info' onClick={handleclick}>click me</Buttons>
 <Buttons color='success' onClick={handleclick}>click me2</Buttons>
{/* 
 mekedi buton eka click krnwa it passe altert eken clocse krnwa  childern vidiyt click me,hii pass wenawa  */}
 


 </>
  )
}

export default App;