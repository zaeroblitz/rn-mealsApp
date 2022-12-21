import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPressed,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed ? styles.pressedStyle : null,
        ]}
        onPress={onPressed}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />

        {/* Content */}
        <View style={styles.contentContainer}>
          {/* Duration, Complexity, Affordability Container */}
          <View style={styles.tagsContainer}>
            <Text style={styles.tagItem}>{duration} Mins</Text>
            <Text style={styles.tagItem}>
              {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
            </Text>
            <Text style={styles.tagItem}>
              {affordability.charAt(0).toUpperCase() + affordability.slice(1)}
            </Text>
          </View>

          {/* Title */}
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#333",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#171E2B",
    borderRadius: 12,
  },
  pressedStyle: {
    backgroundColor: "#1E2736",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 20,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 2,
  },
  tagItem: {
    color: "#FFE598",
    fontWeight: "500",
    fontSize: 14,
    marginHorizontal: 6,
  },
  titleContainer: {
    flex: 1,
    flexWrap: "wrap",
  },
  title: {
    color: "#FDFDFD",
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 18,
  },
});
