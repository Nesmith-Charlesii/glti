import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    contentContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    content: {
        marginTop: "112px",
        width: "580px",
        marginBottom: "112px"
    },
    contentTitle: {
        color: "#1E0C30",
        fontFamily: "Inter",
        fontSize: "38px",
        fontWeight: 700,
        marginBottom: "48px",
    },
    contentBody: {
        fontSize: "20px",
        color: "#1E0C30",
        fontFamily: "Raleway",
        height: "100%"
    }
});