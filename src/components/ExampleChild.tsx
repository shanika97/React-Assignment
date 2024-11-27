import React, { ReactNode } from 'react'

interface ExampleChildProps {
    children: ReactNode;
}
const ExampleChild = ({children}:ExampleChildProps) => {
  return (
    <>
    <h3>example</h3>
     <div className="alert alert-info" role="alert">  {children}</div>
    </>
   
  )
}

export default ExampleChild