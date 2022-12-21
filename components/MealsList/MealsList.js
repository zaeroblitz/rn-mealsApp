import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const navigation = useNavigation();

  const pressHandler = (itemData) => {
    navigation.navigate("MealDetails", {
      mealData: itemData,
    });
  };

  const renderMealsItem = ({ item }) => {
    return <MealItem {...item} onPressed={() => pressHandler(item)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
