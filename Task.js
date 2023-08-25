import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = ({ title }) => {
  return (
    <View style={styles.task}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
});

export default Task;
