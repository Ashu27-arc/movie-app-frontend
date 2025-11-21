import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import { TMDB_IMG } from "../services/api";

export default function MovieCard({ movie }: any) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/movie-details",
          params: {
            title: movie.title,
            overview: movie.overview || movie.description,
            poster_path: movie.poster_path,
            rating: movie.vote_average || "N/A",
          },
        })
      }
    >
      {movie.poster_path ? (
        <Image
          source={{ uri: TMDB_IMG + movie.poster_path }}
          style={styles.poster}
        />
      ) : null}

      <Text numberOfLines={1} style={styles.title}>
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginRight: 12,
    width: 140,
  },
  poster: {
    width: 140,
    height: 210,
    borderRadius: 12,
    backgroundColor: "#1a1a1a",
  },
  title: {
    color: "#fff",
    marginTop: 8,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
