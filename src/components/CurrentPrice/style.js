import { StyleSheet } from "react-native"
import CurrentPrice from "."

const styles = StyleSheet.create({
    headerPrice: {
        width: "100%",
        height: "auto",
        alignItems: "center",
    },
    currentPrice: {
        color: "#f50d41",
        fontSize: 32,
        fontWeight: "bold"
    },
    textPrice: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 10,
    }
})

export default styles