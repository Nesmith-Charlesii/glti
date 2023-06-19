import React from 'react'; 
import { useStyles } from './navbarStyles';
import SearchIcon from './assets/search_icon.svg';

const Navbar = () => {
    const classes = useStyles()

    return (
        <div className={classes.navBar}>
            <div className={classes.logo}>
                <h4>GLTI</h4>
            </div>
            <div className={classes.navLinks}>
                <a href='/'>Overview</a>
                <a href='/content'>Content</a>
                <a href='/tools'>Tools</a>
                <img className={classes.searchIcon} src={SearchIcon} alt="search-icon" />
            </div>
        </div>
    )
}

export default Navbar;