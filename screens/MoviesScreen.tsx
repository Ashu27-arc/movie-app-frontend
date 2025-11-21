import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import API from "../services/api";
import MovieCard from "../components/MovieCard";

export default function MoviesScreen() {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        API.get("/api/movies").then((res) => setMovies(res.data));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0a0a0a",
        flex: 1,
        padding: 16,
    },
});
