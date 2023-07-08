import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Output = (props) => {
  const { bmi1, bmi2 } = props;

  // Output Card
  const output = (bmi1, bmi2, comment, statusColor) => {
    return (
      <>
        <Text style={styles.bmiText}>Your BMI is:{bmi1 || bmi2}</Text>
        <Text style={styles.bmiStatus}>
          You are{" "}
          <Text style={[styles.boldStatus, { color: `${statusColor}` }]}>
            {comment}
          </Text>
        </Text>
      </>
    );
  };

  // Output Conditions
  const showOutput = () => {
    if ((bmi1 || bmi2) == 0) {
      return null;
    } else if ((bmi1 || bmi2) >= 30) {
      return output(bmi1, bmi2, "Obesity", "red");
    } else if ((bmi1 || bmi2) >= 25 && (bmi1 || bmi2 < 30)) {
      return output(bmi1, bmi2, "Overweight", "orange");
    } else if ((bmi1 || bmi2) >= 18.5 && (bmi1 || bmi2) < 25) {
      return output(bmi1, bmi2, "Normal Weight", "green");
    } else {
      return output(bmi1, bmi2, "Underweight", "tomato");
    }
  };

  return <View style={styles.container}>{showOutput()}</View>;
};

export default Output;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 20,
    color: "indianred",
  },
  bmiText: {
    color: "#6699CC",
    fontSize: 22,
  },
  bmiStatus: {
    fontSize: 22,
  },
  boldStatus: {
    fontWeight: "bold",
  },
});
