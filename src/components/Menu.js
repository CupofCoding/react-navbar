import './menu.css';
import React, { useState } from 'react';
import { ReactComponent as ChevDown } from '../icons/chevron-down-solid.svg';
// transition component to control appear, enter, exit states to control which menus are visible and rendering multiple menus being added or removed from the app
import { CSSTransition } from 'react-transition-group';


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

function DropdownMenu() {

  // DropdownMenu's can have multiple items, nested component for simplicity 
  // set current state then change state for menus. Main menu is Default and parent
  const [activeMenu, setActiveMenu] = useState('main') //

  function DropdownItem(props){

    return (
      // pass in props to control the link text
      <a href='#' className='dropdown-menu-item'>
        {/* if left or right Icon prop is passed, then it will be rendered. If blank, nothing happens. Text is taken as a child. */}
        <span className='icon-button left-icon'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-button right-icon'>{props.rightIcon}</span>
      </a> 
    );
  }

  return(
  <div className='dropdown'>
    <DropdownItem>Menu Item</DropdownItem>
    <DropdownItem 
      // leftIcon={<ItemIcon />}
      rightIcon={<ChevDown />}
      >
    </DropdownItem>
  </div>
  )
};

export { Menu, MenuItem, DropdownMenu };