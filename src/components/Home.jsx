import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Output from "./Output";

const Home = () => {
  // State Variables
  const [weight, setWeight] = useState(0);
  const [heightInFeet, setHeightInFeet] = useState(0);
  const [heightInInch, setHeightInInch] = useState(0);
  const [bmi1, setBmi1] = useState(0);
  const [bmi2, setBmi2] = useState(0);

  //   BMI Calculation Function
  const bmiCalculationHandler = () => {
    // Convert input from string value to float value
    const kg = parseFloat(weight);
    const feet = parseFloat(heightInFeet);
    const inch = parseFloat(heightInInch);

    // Convert feet and inch to meter
    const meterFromFeet = feet / 3.281;
    const meterFromInch = inch * 0.0254;

    // Calculate BMI
    const BMI1 = Math.round(kg / (meterFromFeet * meterFromFeet));
    const BMI2 = Math.round(kg / (meterFromInch * meterFromInch));
    console.log(BMI1, BMI2);

    setBmi1(BMI1);
    setBmi2(BMI2);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>🏋🏽Your BMI</Text>
      </View>
      <View style={styles.inputFields}>
        <Text htmlFor="height" style={styles.title}>
          Enter Weight
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Weight (kg)"
          onChangeText={(value) => setWeight(value)}
        />
        <Text htmlFor="height" style={styles.title}>
          Enter Height(feet)
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Height (feet)"
          onChangeText={(value) => setHeightInFeet(value)}
        />
        <Text htmlFor="height" style={styles.title}>
          Enter Height(inch)
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Height (inch)"
          onChangeText={(value) => setHeightInInch(value)}
        />
        <TouchableOpacity style={styles.btn} onPress={bmiCalculationHandler}>
          <Text style={styles.btnText}>Calculate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.output}>
        {(bmi1 || bmi2) === 0 ? null : <Output bmi1={bmi1} bmi2={bmi2} />}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  heading: {
    color: "#0039a6",
    textAlign: "center",
    fontSize: "30px",
    marginVertical: 5,
  },
  inputFields: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    color: "#6699CC",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 35,
    width: 300,
    padding: 5,
    border: "1px solid #89CFF0",
    borderRadius: 5,
    marginVertical: 10,
  },
  btn: {
    height: 40,
    width: 100,
    marginTop: 10,
    backgroundColor: "#6699CC",
    borderRadius: 10,
    cursor: "pointer",
    border: "1px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
});
