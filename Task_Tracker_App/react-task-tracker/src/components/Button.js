
import React from 'react'
import PropTypes from 'prop-types'

//Component for the buttons, takes in a color, text, and onClick  prop
const Button = ({color,text}) => {
    const onClick = ()=>{
        console.log('click')
    }
    return (
       
        <button 
        className="btn"
         style = {{backgroundColor:{color}}}
         onClick={onClick}>
             {text}
             </button>
    )
}
Button.propTypes = {
    color: 'steelblue'
}
export default Button

