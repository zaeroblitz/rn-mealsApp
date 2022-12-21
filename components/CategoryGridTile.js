import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPressed }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPressed}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 12,
    elevation: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
});
