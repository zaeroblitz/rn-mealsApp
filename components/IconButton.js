import { StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <FontAwesome5 name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
