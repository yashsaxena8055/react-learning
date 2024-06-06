import React from 'react'
import "./component.css";
import { useEffect } from 'react';


export function InputBox({
    className="",
    label,
   
    ...props

}) {
   
  const onchangeEvent = (event)=>{
    props.handleInputText(event.currentTarget.innerText);
   
  }
  
 
  return (
    <div 
    className={`editableDiv  ${className} `} 
    {...props} 
    label={label}
    suppressContentEditableWarning={true}
    contentEditable="true" 
    onInput={(e)=>onchangeEvent(e)}
    >
     
        Click here to edit this text.
    </div>
  )
}

