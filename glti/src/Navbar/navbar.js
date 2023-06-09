import React from 'react'; 
import { useStyles } from './navbarStyles';

const Navbar = () => {
    const classes = useStyles()

    return (
        <div className={classes.navBar}>
            <div className={classes.logo}>
                <h3>GLTI</h3>
            </div>
            <div className={classes.navLinks}>
                <a href='/overview'>Overview</a>
                <a href='/content'>Content</a>
                <a href='/tools'>Tools</a>
            </div>
        </div>
    )
}

export default Navbar;