import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import StepCard from "./StepCard"; // Assuming StepCard is a component that displays individual steps

const RoutineCard = ({ routine }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.routineTitle}>{routine.routineName}</Text>
      <Text style={styles.routineTitle}>{routine.routineDescription}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {routine.steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // For Android shadow
  },
  routineTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default RoutineCard; 