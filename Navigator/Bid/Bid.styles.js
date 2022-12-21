import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width - 40;

export default StyleSheet.create({
    text_handler: {
        borderRadius: 20,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        backgroundColor: "#2b2e39",
        width: deviceWidth + 40,
        alignItems: "center",
        marginTop: -20,
        marginBottom: 20,
        paddingVertical: 10
    },
    text: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    text_new_handler: {
        borderRadius: 20,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        backgroundColor: "#2b2e39",
        width: deviceWidth + 40,
        alignItems: "center",
        position: "absolute",
        paddingVertical: 10
    },
    text_new: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase"
    },

    input_handler: {
        borderRadius: 10,
        backgroundColor: "#2b2e39",
        width: "100%",
        alignItems: "center",
        paddingVertical: 5
    },
    input: {
        fontSize: 50,
        color: "#fff",
        textTransform: "uppercase"
    },
    input_new_handler: {
        borderRadius: 10,
        backgroundColor: "#2b2e39",
        width: "100%",
        alignItems: "center",
        position: "absolute",
        paddingVertical: 5
    },
    input_new: {
        fontSize: 50,
        color: "#fff",
        textTransform: "uppercase"
    },
    input_container: {
        width: "100%",
        marginBottom: 10
    },
    input_text: {
        textAlign: "center",
        borderColor: "#2b2e39",
        width: "100%",
        borderWidth: 3,
        borderRadius: 20,
        paddingVertical: 5,
        color: "#fff",
        fontSize: 50
    },
    versus: {
        backgroundColor: "#2b2e39",
        width: "100%",
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    versus_item: {},
    versus_name: {
        color: "#fff",
        fontSize: 20
    },
    versus_text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
});
