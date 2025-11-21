import { View, TextInput, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import API from "../services/api";
import MovieCard from "../components/MovieCard";

export default function SearchScreen() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);

    const searchMovie = (text: string) => {
        setQuery(text);
        if (text.length < 2) return;

        API.get(`/tmdb/search/${text}`).then((res) => setResults(res.data));
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search movies..."
                placeholderTextColor="#666"
                style={styles.input}
                value={query}
                onChangeText={searchMovie}
            />

            <FlatList
                data={results}
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
    input: {
        backgroundColor: "#1a1a1a",
        padding: 16,
        borderRadius: 12,
        color: "#fff",
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
});
