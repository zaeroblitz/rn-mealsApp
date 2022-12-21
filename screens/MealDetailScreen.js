import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { MealTag, IconButton } from "../components";

const MealDetailScreen = ({ route, navigation }) => {
  const {
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = route.params.mealData;

  const handleButtonPressHandler = () => {
    console.log("Pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="heart"
          color="white"
          onPress={handleButtonPressHandler}
        />
      ),
    });
  }, [navigation, handleButtonPressHandler]);

  return (
    <ScrollView style={styles.container}>
      {/* Header: Image, Meal Tags */}
      <View style={styles.headerContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.mealTagsContainer}>
          <MealTag>{duration} Mins</MealTag>
          <MealTag>
            {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
          </MealTag>
          <MealTag>
            {affordability.charAt(0).toUpperCase() + affordability.slice(1)}
          </MealTag>

          {isGlutenFree && <MealTag>Glutten Free</MealTag>}
          {isLactoseFree && <MealTag>Lactose Free</MealTag>}
          {isVegan || (isVegetarian && <MealTag>Vegan Food</MealTag>)}
        </View>
      </View>

      {/* Ingredients & Steps */}
      <View style={styles.contentContainer}>
        {/* Ingredients  */}
        <View style={styles.contentItemContainer}>
          <Text style={styles.contentItemTitle}>
            Ingredients ({ingredients.length} items)
          </Text>
          {ingredients.map((ingredient, index) => (
            <Text key={`ingredient-${index}`} style={styles.contentItemText}>
              {ingredient}
            </Text>
          ))}
        </View>

        {/* Steps */}
        <View style={styles.contentItemContainer}>
          <Text style={styles.contentItemTitle}>Steps</Text>
          {steps.map((step, index) => (
            <View key={`step-${index}`} style={styles.stepsContainer}>
              <View style={styles.stepIndexContainer}>
                <Text style={styles.stepIndex}>{index + 1}</Text>
              </View>
              <View style={styles.stepsContainer}>
                <Text style={styles.contentItemText}>{step}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  mealTagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
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
  contentContainer: {
    flex: 1,
    backgroundColor: "#171E2B",
    marginTop: 16,
    paddingTop: 32,
    padding: 24,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
  },
  contentItemContainer: {
    marginBottom: 16,
  },
  contentItemTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
  contentItemText: {
    color: "#79808A",
    fontSize: 14,
  },
  stepsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  stepIndexContainer: {
    backgroundColor: "#D5E984",
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  stepIndex: {
    color: "#171E2B",
    fontWeight: "600",
  },
});
