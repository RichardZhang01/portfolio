import React, { useState } from 'react'
import './DrawerButton.css'

export default function DrawerButton(props) {
  const [menuButton, setMenuButton] = useState('burger');
  console.log(menuButton)

  function toggleButton() {
    setMenuButton((prevMenuButton => {
      if(prevMenuButton === 'burger') {
        return 'X'
      }
      return 'burger'
    }))
  }

  function clickHandler() {
    toggleButton();
    props.drawerToggleHandler();
  }

  return (
    <button 
      className='drawer-toggle'
      onClick={clickHandler}
    >   
        {
          menuButton === 'burger' ?
          (
            <>
              <div className='hamburger-line'/>
              <div className='hamburger-line'/>
              <div className='hamburger-line'/>
            </>
          ) :
          (
            <div className='close' />
          )
        }
    </button>
  )
}
