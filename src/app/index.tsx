import { StyleSheet, View } from "react-native";
import ServingCalculator from "./ServingCalculator";

export default function Index() {
  return (
    <View style={styles.container}>
      <ServingCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60
  },
});
