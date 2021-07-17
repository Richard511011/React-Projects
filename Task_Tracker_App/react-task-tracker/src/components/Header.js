import PropTypes from 'prop-types'
import React from 'react';
import Button from './Button'
const Header = ({title,  name}) => {
    return (
        <header>
         <h1>Task Tracker {title} {name}</h1>
         <Button />
        </header>

    )
}
Header.defaultProps = {
    title:'Task Tracker',
    name: 'Richard',
}
Header.propTypes = {
    title: PropTypes.string,

}
    export default Header
