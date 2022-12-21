import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";

import {
  CategoriesScreen,
  MealsOverviewScreen,
  MealDetailScreen,
  FavoritesScreen,
} from "./screens";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#12151D",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#12151D" },
        drawerContentStyle: {
          backgroundColor: "#12151D",
        },
        drawerActiveBackgroundColor: "#171E2B",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#79808A",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Entypo name="grid" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Entypo name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#12151D",
            },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#12151D" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: "Meals Overview",
            }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
