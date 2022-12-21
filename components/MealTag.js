import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealTag = ({ children }) => {
  return (
    <View style={styles.mealTagItem}>
      <Text style={styles.mealTagText}>{children}</Text>
    </View>
  );
};

export default MealTag;

const styles = StyleSheet.create({
  mealTagItem: {
    backgroundColor: "#FFE598",
    padding: 8,
    borderRadius: 8,
    margin: 4,
  },
  mealTagText: {
    color: "#1E2736",
    fontWeight: "500",
    fontSize: 14,
  },
});
