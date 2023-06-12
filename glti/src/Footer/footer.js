import React from 'react';
import { useStyles } from './footerStyles';

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            Copyright @ 2023 GLTI. All Rights Reserved. 
        </div>
    )
}
export default Footer;