import { StyleSheet, Text, View, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoriesItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPressed={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
