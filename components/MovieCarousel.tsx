import { View, FlatList, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";

export default function MovieCarousel({ data }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id?.toString() || item._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  listContent: {
    paddingLeft: 16,
    paddingRight: 4,
  },
});
