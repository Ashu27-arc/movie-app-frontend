import { View, Text, StyleSheet } from "react-native";

export default function Error({ message }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>⚠️</Text>
            <Text style={styles.text}>{message || "Something went wrong!"}</Text>
            <Text style={styles.subtext}>Please try again later</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0a0a0a",
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
    },
    icon: {
        fontSize: 48,
        marginBottom: 16,
    },
    text: {
        color: "#ff6b6b",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 8,
        letterSpacing: 0.3,
    },
    subtext: {
        color: "#888",
        fontSize: 14,
        textAlign: "center",
    },
});