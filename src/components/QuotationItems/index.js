import { Image, View, Text } from "react-native";
import styles from "./style";

export default function QuotationItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contenxtLeft}>
                <Image style={styles.logoBitcoin} source={require("../../img/logo-bitcoin.png")} />

                <Text style={styles.dayQuotation}>
                    11/09/24
                </Text>
            </View>

            <View style={styles.contextRight}>
                <Text style={styles.price}>$20</Text>
            </View>
        </View>
    )
}