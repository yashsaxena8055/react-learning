import React from 'react'
import "./component.css";
import { useEffect } from 'react';


export function InputBox({
    className="",
    label,
   
    ...props

}) {
 
 
  return (
    <div 
    className={`editableDiv  ${className} `} 
    {...props} 
    label={label}
    contentEditable="true" onChange={(event)=>(console.log(event.target.value))}>
        Click here to edit this text.
    </div>
  )
}onsole.log("+++++++="+ document.getElementsByClassName('editableDiv').innerText)

