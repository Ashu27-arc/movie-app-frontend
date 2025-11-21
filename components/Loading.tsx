import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0a0a0a",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#888",
        marginTop: 16,
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0.5,
    },
});