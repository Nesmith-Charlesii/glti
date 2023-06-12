import { createUseStyles } from 'react-jss';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Raleway']
    }
});

export const useStyles = createUseStyles({
    navBar: {
        position: "fixed",
        width: "100%",
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        height: "45px",
        backgroundColor: "#1E0C30",
        fontFamily: "Arial",
    },
    logo: {
        fontWeight: 700,
        color: "#FEF4F4",
        paddingLeft: "152px"
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
        },
        paddingRight: "152px"
    },
    searchIcon: {
        '&:hover': {
            cursor: "pointer"
        }
    }
})