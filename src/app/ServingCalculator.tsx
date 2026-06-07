import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function ServingCalculator() {
  const [foodName, setFoodName] = useState("Food Name");
  const [foodType, setFoodType] = useState("Food Type (Wet/Type)");

  const [totalGramsPerDay, setTotalGramsPerDay] = useState(40);
  const [totalGramsPerMeal, setTotalGramsPerMeal] = useState((totalGramsPerDay / 2));

  const [petWeight, setPetWeight] = useState(2);
  const [amountOfMeals, setAmountOfMeals] = useState(2);

  function handlePetWeightInput(input : string) {
    const numericValue = input.replace(/[^0-9]/g, '');

    setPetWeight(parseInt(numericValue, 10));
  }

  return (
    <>
      <View accessible={true}>
        <Text> Pet Food Portioning </Text>
      </View>

      <View accessible={true}>
        <Text> {foodName} </Text>
        <Text> Food Type (Wet/Dry) Here. </Text>
      </View>

      <View accessible={true}>
        <Text> {totalGramsPerDay} grams in total </Text>
        <Text> {totalGramsPerMeal} grams per meal </Text>
      </View>

      <View>
        <TextInput
          placeholder="0"
          keyboardType="numeric"
          value = {petWeight !== null ? petWeight.toString() : ''}
          onChangeText = {handlePetWeightInput}
        />
      </View>
    </>
  );
}