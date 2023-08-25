import React from "react";
import { View, StyleSheet } from "react-native";
import Task from "./Task"; // Make sure the path is correct

const App = () => {
  return (
    <View style={styles.container}>
      <Task title="Complete assignment" />
      <Task title="Go for a walk" />
      {/* Add more Task components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
