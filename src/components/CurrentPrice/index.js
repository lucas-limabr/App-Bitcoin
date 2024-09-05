import { View, Text } from "react-native"
import styles from './style'

export default function CurrentPrice() {
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 50,80</Text>
            <Text style={styles.textPrice}>última cotação</Text>
        </View>
    )
}