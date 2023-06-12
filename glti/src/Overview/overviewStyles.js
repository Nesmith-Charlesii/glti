import { createUseStyles } from "react-jss";
import WebFont from "webfontloader";

WebFont.load({
    google: {
        families: ["Raleway"]
    }
})

export const useStyles = createUseStyles({
    heroContent: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        padding: "80px 152px",
        borderBottom: "1px solid #CAC9CC",
    },
    heroContext: {
        width: "629px",
        color: "#1E0C30"
    },
    heroHeader: {
        fontSize: "44px",
        // fontFamily: "Raleway",
        fontWeight: 700,
        marginBottom: "14px"
    },
    heroText: {
        fontFamily: "Raleway",
        fontSize: "28px",
        fontWeight: 600,
        marginBottom: "20px",
        width: "89%"
    },
    heroSubtext: {
        fontFamily: "Raleway",
        fontSize: "20px",
        width: "92%"
    },
    heroImage: {
        '& svg': {
            height: "200px",
            width: "200px",
            marginLeft: "20px"
        }
    },
    quickstartContext: {
        fontFamily: "Raleway",
    },
    quickstartHeader: {
        fontSize: "34px",
        fontWeight: 500,
        marginBottom: "21px"
    },
    quickstartContent: {
        display: "flex",
        flexDirection: "column",
        lineHeight: 2,
        '& a': {
            color: "#1E0C30",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "18px",
        },
        marginBottom: "40px"
    },
    exploreButton: {
        backgroundColor: "#E17614",
        height: "35px",
        width: "155px",
        borderRadius: "6px",
        border: "none",
        color: "#FEF4F4",
        fontSize: "14px",
        fontWeight: "600",
        transition: "background-color 300ms",
        '&:hover': {
            cursor: "pointer",
            backgroundColor: "#e1a014"
        }
    },
    overview: {
        padding: "80px 152px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        position: "relative"
    },
    overviewHeader: {
        fontFamily: "Raleway",
        fontSize: "34px",
        fontWeight: 500,
        marginBottom: "21px"
    },
    overviewContent: {
        fontFamily: "Raleway",
        fontSize: "18px",
        width: "550px",
        color: "#1E0C30",
    },
    overviewContext: {
        display: 'flex',
        alignItems: "center"
    },
    overviewTextGroup: {
        display: "flex",
        flexDirection: "column"
    },
    divider: {
        height: "200px",
        width: "1px",
        backgroundColor: "#bebcbf",
        marginRight: "200px"
    }
})