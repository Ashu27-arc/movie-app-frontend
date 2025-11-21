import { View, ScrollView, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import MovieCarousel from "../components/MovieCarousel";
import CategoryList from "../components/CategoryList";
import HeroBanner from "../components/HeroBanner";
import Loading from "../components/Loading";
import API from "../services/api";
import React, { useEffect, useState } from "react";

export default function HomeScreen() {
    const [trending, setTrending] = useState<any[]>([]);
    const [popular, setPopular] = useState<any[]>([]);
    const [topRated, setTopRated] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        Promise.all([
            API.get("/tmdb/trending").catch(e => ({ data: [] })),
            API.get("/tmdb/popular").catch(e => ({ data: [] })),
            API.get("/tmdb/top-rated").catch(e => ({ data: [] })),
        ]).then(([t, p, tr]) => {
            setTrending(Array.isArray(t.data) ? t.data : []);
            setPopular(Array.isArray(p.data) ? p.data : []);
            setTopRated(Array.isArray(tr.data) ? tr.data : []);
            setLoading(false);
        }).catch(err => {
            console.error("Error loading movies:", err);
            setError("Failed to load movies");
            setLoading(false);
        });
    }, []);

    if (loading) return <Loading />;

    if (error) {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                    <Text style={styles.errorSubtext}>Please check your backend connection</Text>
                </View>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Header />

            {trending.length > 0 && <HeroBanner movie={trending[0]} />}

            <CategoryList />

            <Text style={styles.section}>Trending</Text>
            <MovieCarousel data={trending} />

            <Text style={styles.section}>Popular</Text>
            <MovieCarousel data={popular} />

            <Text style={styles.section}>Top Rated</Text>
            <MovieCarousel data={topRated} />

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#0a0a0a", 
        flex: 1 
    },
    section: {
        color: "#fff",
        fontSize: 24,
        marginTop: 24,
        marginLeft: 16,
        fontWeight: "800",
        letterSpacing: 0.5,
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#0a0a0a",
    },
    errorText: {
        color: "#ff6b6b",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
    },
    errorSubtext: {
        color: "#888",
        fontSize: 15,
        textAlign: "center",
    },
});
