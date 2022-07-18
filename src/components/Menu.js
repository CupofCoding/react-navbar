import './menu.css';
import React, { useState } from 'react';

//In React, Props are Data and UI elements can be passed from parent to child as arguments that can be referenced as part of the template.
function Menu(props) {
  return (
    <menu className='menu-container'>
      {/* props has a built-in property called children that will project or reference any UI elements passed inside of the actual tag */}
      <ul className='menu-nav'> { props.children} </ul>
    </menu>
  )
}


//List Item is the main element and 'a' link element is nested inside of it. 'a' element represents the icons
function MenuItem(props) {

  // useState hook is needed to open and close menu. useState function is called to return 2 values in an array to be destructured as variables. 
  // 1st value is the state to check boolean condition. 2nd value is function used to change the state. useState(defaultvalue) has set as closed but default. 
  const [open, setOpen] = useState(false);

  return(
    <li className='menu-item'>
      {/* onClick event = setOpen handler will change state to opposite(!bang) of what it currently is. */}
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {/* Set action for open state = true then show props.children which is the direct children. If false than nothing happens.*/}
      {open && props.children}
    </li>
  )
}

export { Menu, MenuItem };