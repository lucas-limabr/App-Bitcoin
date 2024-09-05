import { Pressable, View, Text } from "react-native"
import styles from "./style"

export default function Buttons() {
    return (
        <View style={styles.filters}>
            <Pressable
                style={styles.buttonQuery}
                onPress={() => { }}
            >
                <Text style={styles.numero}>7</Text>
                <Text style={styles.periodo}>Days</Text>
            </Pressable>
            <Pressable
                style={styles.buttonQuery}
                onPress={() => { }}
            >
                 <Text style={styles.numero}>15</Text>
                 <Text style={styles.periodo}>Days</Text>
            </Pressable>
            <Pressable
                style={styles.buttonQuery}
                onPress={() => { }}
            >
                 <Text style={styles.numero}>1</Text>
                 <Text style={styles.periodo}>Month</Text>
            </Pressable>
            <Pressable
                style={styles.buttonQuery}
                onPress={() => { }}
            >
                <Text style={styles.numero}>3</Text>
                <Text style={styles.periodo}>Month</Text>
            </Pressable>
        </View>
    )
}