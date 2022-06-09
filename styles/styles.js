import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    h1: {
        fontSize: 20,
        marginBottom: 10,
        color: "rgb(35, 110, 35)",
    },
    text: {
        color: "rgb(35, 110, 35)",
    },
    linearGradient: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    imageBackgroundImage: {
        opacity: 0.05,
    },
    container: {
        marginTop: 100,
        marginHorizontal: 30,
        alignItems: "center",
        flex: 1,
    },
    inputContainer: {
        backgroundColor: "white",
        elevation: 3,
        paddingHorizontal: 50,
        paddingVertical: 20,
        shadowColor: "#ccc",
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        alignItems: "center",
        marginTop: 20,
    },
    input: {
        width: 100,
        height: 50,
        fontSize: 32,
        fontWeight: "bold",
        backgroundColor: "white",
        marginBottom: 10,
        textAlign: "center",
        borderBottomColor: "rgb(120, 222, 123)",
        borderBottomWidth: 2,
        color: "rgb(35, 110, 35)",
    },
    button: {
        backgroundColor: "rgb(176, 225, 155)",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        width: 130,
        textAlign: "center",
        marginBottom: 10,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 3,
        shadowOpacity: 0.2,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "rgb(35, 110, 35)",
        textTransform: "uppercase",
    },
});
