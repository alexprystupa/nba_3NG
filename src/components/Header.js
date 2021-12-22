import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const logClick = () => {
        console.log('TESTING')
    }

    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button 
                color = 'green'
                text = 'Add Player'
                onClick = {logClick}
            />
        </header>
    )
}

// default Prop will say title unless I change it in App.js
Header.defaultProps = {
    title: 'NBA 3NG App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header