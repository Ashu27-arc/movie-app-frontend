import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { TMDB_IMG } from "../services/api";

export default function HeroBanner({ movie }: any) {
    return (
        <ImageBackground
            source={{ uri: TMDB_IMG + movie?.backdrop_path }}
            style={styles.banner}
        >
            <View style={styles.overlay} />

            <Text style={styles.title}>{movie?.title}</Text>
            <Text style={styles.overview} numberOfLines={3}>
                {movie?.overview}
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    banner: {
        width: "100%",
        height: 400,
        justifyContent: "flex-end",
        padding: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    title: {
        fontSize: 32,
        fontWeight: "900",
        color: "#fff",
        letterSpacing: 0.5,
        textShadowColor: "rgba(0, 0, 0, 0.8)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    overview: {
        color: "#e0e0e0",
        marginTop: 12,
        fontSize: 15,
        lineHeight: 22,
        letterSpacing: 0.3,
        textShadowColor: "rgba(0, 0, 0, 0.8)",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
});
