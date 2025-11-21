import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { router } from "expo-router";

export default function SplashScreen() {
    useEffect(() => {
        setTimeout(() => {
            router.replace("/home");
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>🎬 MovieApp</Text>
            <ActivityIndicator size="large" color="#fff" />
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
    logo: {
        color: "#fff",
        fontSize: 42,
        marginBottom: 32,
        fontWeight: "900",
        letterSpacing: 2,
        textShadowColor: "rgba(255, 255, 255, 0.3)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
    },
});