import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width - 40;

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    fit: {
        fontWeight: "bold"
    },
    logo_container: {
        borderRadius: deviceWidth / 2,
        width: deviceWidth,
        height: deviceWidth,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    logo_bg: {
        backgroundColor: "#2b2e39",
        borderRadius: deviceWidth / 2,
        width: deviceWidth,
        height: deviceWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    logo_text: {
        fontSize: 100,
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        position: "absolute",
        opacity: 0
    },
    logo: {
        width: deviceWidth,
        height: deviceWidth,
        borderRadius: deviceWidth / 2
    },
    button_container: {
        backgroundColor: "#2749f8",
        borderRadius: 15,
        width: "100%",
        height: 50,
        justifyContent: "center",
        marginTop: 10
    },
    button_text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
