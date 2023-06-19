import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    heroContent: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        padding: "112px 0px 70px 152px",
        borderBottom: "1px solid #CAC9CC",
        position: "relative"
    },
    heroContext: {
        width: "629px",
        color: "#1E0C30"
    },
    heroHeader: {
        fontSize: "48px",
        // fontFamily: "Inter",
        fontWeight: 700,
        marginBottom: "20px"
    },
    heroText: {
        fontFamily: "Arial",
        fontSize: "20px",
        fontWeight: 600,
        marginBottom: "0px",
        width: "89%"
    },
    heroSubtext: {
        fontFamily: "Inter",
        fontSize: "20px",
        width: "89%"
    },
    heroImage: {
        position: "absolute",
        right: 0,
        zIndex: -1,
        height: "500px",
        '& img': {
            height: "100%",
        }
    },
    quickstartContext: {
        fontFamily: "Inter",
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
        fontFamily: "Inter",
        fontSize: "34px",
        fontWeight: 500,
        marginBottom: "21px"
    },
    overviewContent: {
        fontFamily: "Inter",
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