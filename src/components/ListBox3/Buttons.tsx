import React from 'react'
{/* Day 5 */}
interface buttonsProps {
    children:string;
    onClick:()=>void;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}
const Buttons = ({children,onClick,color="primary"}:buttonsProps) => {

    
  return (
   <>
     <h1 style={{color:"mediumvioletred", fontFamily:"cursive"}}>
        Day 5 using children props</h1>
   <button className={"btn btn-"+ color} onClick={onClick}>
    {children}</button>
   </>
  )
}

export default Buttons