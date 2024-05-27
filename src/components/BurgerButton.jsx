import React from 'react'

export const BurgerButton = ({handleClick,clicked}) => {
  return (
    <>
        <div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? 'open': '' }`}>
            <span></span>
            <span></span>
            <span></span>
         </div> 
    </>
  )
}
