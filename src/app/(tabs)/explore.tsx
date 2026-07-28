import { View, Text, StyleSheet } from "react-native";

export default function ExploreTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.subtitle}>Discover new destinations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#374151",
  },
  subtitle: {
    fontSize: 14,
    color: "#9ca3af",
    marginTop: 8,
  },
});
