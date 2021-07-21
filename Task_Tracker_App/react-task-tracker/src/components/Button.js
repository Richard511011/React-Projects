
import React from 'react'
import PropTypes from 'prop-types'

//Component for the buttons, takes in a color, text, and onClick  prop
const Button = ({color,text,onClick}) => {
 
    return (
       
        <button 
        className="btn"
         style = {{backgroundColor:color}}
         onClick={onClick}>
             {text}
             </button>
    )
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}
export default Button

