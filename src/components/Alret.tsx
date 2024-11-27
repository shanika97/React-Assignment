import React, { ReactNode } from 'react'


interface AlretProps {
  // text :string;
children: ReactNode;
}
const Alret = ({children}:AlretProps) => {
  return (
    <>
    <h1 style={{color:"mediumvioletred", fontFamily:"cursive"}}>Children pass prop</h1>
    <div className="alert alert-danger" role="alert">
      {children }
    </div>
    </>
  )
}

export default Alret