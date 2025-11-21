import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>MovieApp</Text>

            <TouchableOpacity onPress={() => router.push("/search")}>
                <Text style={styles.search}>🔍</Text>
            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0a0a0a",
        borderBottomWidth: 1,
        borderBottomColor: "#1a1a1a",
    },
    logo: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "900",
        letterSpacing: 1,
    },
    search: {
        fontSize: 24,
        color: "#fff",
    },
});