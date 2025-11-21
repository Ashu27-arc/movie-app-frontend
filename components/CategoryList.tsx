import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

const genres = [
    "Action",
    "Comedy",
    "Horror",
    "Romance",
    "Drama",
    "Thriller",
    "Sci-Fi",
];

export default function CategoryList() {
    return (
        <View style={styles.container}>
            {genres.map((g) => (
                <TouchableOpacity
                    key={g}
                    style={styles.genre}
                    onPress={() =>
                        router.push({
                            pathname: "/category",
                            params: { genre: g },
                        })
                    }
                >
                    <Text style={styles.text}>{g}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
        marginLeft: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    genre: {
        backgroundColor: "#1a1a1a",
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    text: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 14,
        letterSpacing: 0.5,
    },
});
