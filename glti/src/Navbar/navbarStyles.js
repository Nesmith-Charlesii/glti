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
        height: "62px",
        backgroundColor: "#1E0C30",
        padding: "0 60px",
        fontFamily: "Raleway",
    },
    logo: {
        fontWeight: 700,
        color: "#FEF4F4"
    },
    navLinks: {
        width: "240px",
        display: "flex",
        justifyContent: "space-between",
        '& a': {
            fontSize: "16px",
            color: "#FEF4F4",
            textDecoration: "none",
            fontWeight: 600
        }
    }
})