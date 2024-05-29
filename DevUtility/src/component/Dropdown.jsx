import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export function Dropdown(props) {
  const options = React.Children.toArray(props.object);
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const menuSelected = (option) => {
    setIsOpen(false)
    setOptionSelected(option)
  }




  return (
    <>
      <div id='dropdown'>
        <button  onClick={toggleDropdown}>{optionSelected}</button>

        {isOpen && (<div className='dropdown-content'>
          {options.map((option) => (

            <div className='dropdown-item' key={option} onClick={() => menuSelected(option)}>{option}</div>
          ))}


        </div>)}
      </div>




    </>

  )
}

