import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import { MealsList } from "../components";
import { FavoriteContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  const favMealIds = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favMealIds.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet!</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
