import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TMDB_IMG } from "../services/api";
import { useLocalSearchParams } from "expo-router";

export default function MovieDetailsScreen() {
    const { title, overview, poster_path, rating } = useLocalSearchParams();

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: TMDB_IMG + poster_path }} style={styles.poster} />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.rating}>⭐ {rating}</Text>

            <Text style={styles.overview}>{overview}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#0a0a0a", 
        flex: 1 
    },
    poster: { 
        width: "100%", 
        height: 500,
        resizeMode: "cover",
    },
    title: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "900",
        marginTop: 20,
        marginHorizontal: 16,
        letterSpacing: 0.5,
    },
    rating: {
        color: "#ffd700",
        marginLeft: 16,
        marginTop: 8,
        fontSize: 18,
        fontWeight: "600",
    },
    overview: {
        color: "#c0c0c0",
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 24,
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 0.3,
    },
});
