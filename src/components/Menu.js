import './menu.css';
import React, { useState } from 'react';
// import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ChevRight } from '../icons/chevron-right-solid.svg';
import { ReactComponent as ChevLeft } from '../icons/chevron-left-solid.svg';

import { ReactComponent as HomeIcon } from '../icons/house-solid.svg';
import { ReactComponent as SeasonsIcon } from '../icons/wind-solid.svg';
import { ReactComponent as SpringSeedling } from '../icons/seedling-solid.svg';
import { ReactComponent as SummerUmbrella } from '../icons/umbrella-beach-solid.svg';
import { ReactComponent as FallLeaf } from '../icons/canadian-maple-leaf-brands.svg';
import { ReactComponent as WinterSnowflake } from '../icons/snowflake-solid.svg';
// import { ReactComponent as XmasTreeIcon } from '../icons/tree-solid.svg';
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
  // set current state then change state for menus. Main menu is Default and parent; Wrapping the dropdown components in a CSS transition component to animate the content.
  const [activeMenu, setActiveMenu] = useState('main') //
  // Dynamic way to manage height for when Old menu still shows up on the DOM using useState and calculating height with a DOM element as its argument since there is a property to offset height.
  const [menuHeight, setMenuHeight] = useState(null);
  
  function calcHeight(ele) {
    // offsetHeight contains the actual height and pixels of the element
    // const height = ele.offsetHeight; 
    const height = ele.offsetHeight;
    // CSS transition has lifecycle hooks that provide information on enter and intiates a callback when onEnter is first added to the element    
    setMenuHeight(height);
  }

  function DropdownItem(props){

    return (
      // pass in props to control the link text; onClick looks for a prop that's passed down from the parent component and confirms prop exists before calling setActiveMenu function
      <a href='#' className='dropdown-menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {/* if left or right Icon prop is passed, then it will be rendered. If blank, nothing happens. Text is taken as a child. */}
        <span className='icon-button left-icon'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-button right-icon'>{props.rightIcon}</span>
      </a> 
    );
  }

  return(
  <div className='dropdown' style={{height: menuHeight}}>
    {/* Looks for a prop of in={} when true will animate the children into the UI. unmountOnExit removes the children when not active with a timeout that defines the duration of the animation. Adds or removes classes based on the state of the animation and CSS handles the animation. */}
    <CSSTransition 
    in={activeMenu === 'main'} 
    unmountOnExit 
    timeout={500}
    // element is provided as an argument which allows use of function as the prop value and the height is pulled from the style attribute which pulls that from the state. 
    onEnter={calcHeight}
    classNames="menu-default">
      <div className='menu'>
        <DropdownItem 
        leftIcon={<HomeIcon />}
        >
        <div>
          <Link to="/">Main Page</Link>
        </div>
        </DropdownItem>
        <DropdownItem 
          leftIcon={<SeasonsIcon />}
          rightIcon={<ChevRight />}
          goToMenu="seasons-menu"
          >Seasons
        </DropdownItem>
      </div>
    </CSSTransition>

    <CSSTransition 
    in={activeMenu === 'seasons-menu'} 
    unmountOnExit 
    timeout={500}
    onEnter={calcHeight}
    classNames="menu-secondary">
      <div className='menu'>
        <DropdownItem 
          leftIcon={<ChevLeft />}
          goToMenu="main"          
          >Return
        </DropdownItem>
        <DropdownItem 
          leftIcon={<SpringSeedling />}>
            <div>
              <Link to="/spring">Spring</Link>
            </div>
        </DropdownItem>
        <DropdownItem 
          leftIcon={<SummerUmbrella />}>
            <div>
              <Link to="/summer">Summer</Link>
            </div>
        </DropdownItem>
        <DropdownItem 
          leftIcon={<FallLeaf />}>
            <div>
              <Link to="/autumn">Autumn</Link>
            </div>
        </DropdownItem>
        <DropdownItem 
          leftIcon={<WinterSnowflake />}>
            <div>
              <Link to="/winter">Winter</Link>
            </div>
        </DropdownItem>
      </div>
    </CSSTransition>
  </div>
  )
};

export { Menu, MenuItem, DropdownMenu };