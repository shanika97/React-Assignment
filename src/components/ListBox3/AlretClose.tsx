import React, { ReactNode } from 'react'

interface AlretProps {
    children: ReactNode;
    onClose: () => void;

}
const AlretClose = ({children,onClose}:AlretProps) => {
  return (
    <>
     <div>AlretClose</div>

     <div className="alert alert-warning alert-dismissible fade show" role="alert">
{children}
  <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
    </>
   


  )
}

export default AlretClose