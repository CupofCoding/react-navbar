import React from 'react';
import './aside.css';

//In React, Props are Data and UI elements can be passed from parent to child as arguments that can be referenced as part of the template.
function Aside(props) {
  return (
    <aside className='aside-container'>
      {/* props has a built-in property called children that will project or reference any UI elements passed inside of the actual tag */}
      <ul className='aside-nav'> { props.children} </ul>
    </aside>
  )
}


//List Item is the main element and 'a' link element is nested inside of it. 'a' element represents the icons
function AsideItem(props) {
  return(
    <li className='aside-item'>
      <a href='#' className='icon-button'>
        {props.icon}
      </a>
    </li>
  )
}

export { Aside, AsideItem };