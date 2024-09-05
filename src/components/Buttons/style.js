import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "space-evenly",
    },
    buttonQuery: {
        width: 70,
        height: 70,
        padding: 10,
        backgroundColor: "#f50d41",
        borderRadius: 50,
        alignItems: "center"
    },
    periodo: {
        fontWeight: "bold",
        color: "white",
    },
    numero: {
        color: "white",
    }
})

export default styles