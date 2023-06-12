import { createUseStyles } from 'react-jss';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Raleway']
    }
});

export const useStyles = createUseStyles({
    navBar: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        height: "45px",
        backgroundColor: "#1E0C30",
        padding: "0 152px",
        fontFamily: "Arial",
    },
    logo: {
        fontWeight: 700,
        color: "#FEF4F4",
    },
    navLinks: {
        width: "320px",
        display: "flex",
        justifyContent: "space-between",
        '& a': {
            fontSize: "14px",
            color: "#FEF4F4",
            textDecoration: "none",
            fontWeight: 500
        }
    },
    searchIcon: {
        '&:hover': {
            cursor: "pointer"
        }
    }
})