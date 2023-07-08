import { StyleSheet, View } from "react-native";
import Home from "./src/components/Home";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: "fff",
  },
});
