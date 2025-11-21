import { View, FlatList, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import API from "../services/api";
import { useLocalSearchParams } from "expo-router";

export default function CategoryScreen() {
    const { genre } = useLocalSearchParams();
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        API.get(`/tmdb/category/${genre}`).then((res) => setMovies(res.data));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{genre} Movies</Text>

            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#0a0a0a", 
        flex: 1, 
        padding: 16 
    },
    heading: {
        color: "#fff",
        fontSize: 28,
        marginBottom: 20,
        fontWeight: "900",
        letterSpacing: 0.5,
    },
});
