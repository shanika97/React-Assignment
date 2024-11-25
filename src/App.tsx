import React from 'react'
import ListGroup from './components/ListGroup'
import ListGroup2 from './components/ListGroup2'
import Counter from './counter/Counter.'
import InputForm from './counter/InputForm'
import ToggleVisibility from './counter/ToggleVisibility'
// import InputForm from './counter/InputForm'
 

function App() {
  return (
    <>
   
   {/* <p>Hello world</p>
   <ListGroup />
   <ListGroup2 /> */}
   <Counter/>
   <InputForm/>


   <ToggleVisibility/>
 

    </>
  )
}

export default App