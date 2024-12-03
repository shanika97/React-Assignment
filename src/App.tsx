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

 
const [human,setHuman] = useState(
  {fname:"shanika",
    lname:"sureka",
    age:20,
    contact_Details:{
address:{
  address_line1 :"no 23,kadawatha",
address_line2 :"Sri Lanka",
},
mobile:{
mobile_no1:123456789,
mobile_no2:987654321
}
    }
  }
);

const [address,setAddress] = useState({
  
  city:"colombo",
  country:"sri lanka",
  addressLine:"no 23"
});

{/* create object with state ,props */}


const [book,setBook] = useState({
  title:"javascript",
  author:"john",
  price:100 
})

const [lastname,setLastname] = useState("sureka");


const click=()=>{
  // //create object
  // const newBook={
  //   title :"Java",
  //   author:"kamal",
  //   price:200
  // }


  // if we want change to only price we can use spred operator

  // const newBook = {
  
  // ...book,price:200};

// without using object

setBook({...book,price:400});
  // setBook(newBook);
  setLastname("kamal")}


  const [name,setName] = useState({

    fname:"shanika",
    lname:"sureka",
    age:24
  }
  );

  // const click2=()=>{
  //   setName({...name,age:27})
    
  // }

  //option 1
  const click2=()=>{
    setName({...name,age:name.age+1})
    
  }

  //option2
  // const click2 = () => {
  //   setName((prevName) => ({ ...prevName, age: prevName.age + 1 }));
  // };

//  change nested object address line 2==>India

const click3 =()=>{
  setHuman({
    ...human,
    contact_Details:{
      ...human.contact_Details,
      address:{
        ...human.contact_Details.address,
        address_line1:"Kolkata",
        address_line2:"India"
      },
      mobile:
      {
        ...human.contact_Details.mobile,
        mobile_no2:756381178
      }
    }
  })
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


<h3>
  {human.fname +" "+human.lname} {human.age};
  Address: {address.city+" "+address.country+" "+address.addressLine}
</h3>


{/* create object with state ,props */}

{book.price}
 {lastname}

 <button onClick={click}>click me</button>

 <br/>

 {/* <button onClick={click2}>click me</button> */}
age incremnt to click button :{name.age}
 <button onClick={click2}>click me</button>


 <br>
 </br>

 {/* nested object change example this one address line 2==>India
 const [human,setHuman] = useState(
  {fname:"shanika",
    lname:"sureka",
    age:20,
    contact_Details:{
address:{
  address_line1 :"no 23,kadawatha",
address_line2 :"Sri Lanka"
}
    }
  }
); */}

{human.contact_Details.address.address_line1+ "  "+ human.contact_Details.address.address_line2 + " "+ human.contact_Details.mobile.mobile_no2}

<button className='btn btn-primary' onClick={click3}>click me</button>
 </>
  )
}

export default App;