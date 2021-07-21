import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'
const Header = ({title,onAdd,showAdd}) => {
    return (
        <header>
         <h1>{title} </h1>
         <Button color={showAdd? 'red':'green'} onClick={onAdd} text = {showAdd? 'close':'Add'}/>
      
        </header>

    )
}
Header.defaultProps = {
    title:'Task Tracker',
    name: 'Richard',
}
Header.propTypes = {
    title: PropTypes.string,
    // color: PropTypes.string,
    // onclick: PropTypes.func.isRequired,

}
    export default Header
