import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const pressHandler = (itemData) => {
    navigation.navigate("MealDetails", {
      mealData: itemData,
    });
  };

  const renderMealsItem = ({ item }) => {
    return <MealItem {...item} onPressed={() => pressHandler(item)} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
