import PropTypes from 'prop-types'
import React from 'react';
import Button from './Button'
const Header = ({title,  name,onClick}) => {
    return (
        <header>
         <h1>Task Tracker {title} {name}</h1>
         <Button color='green' text = 'Add'/>
      
        </header>

    )
}
Header.defaultProps = {
    title:'Task Tracker',
    name: 'Richard',
}
Header.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func.isRequired,

}
    export default Header
