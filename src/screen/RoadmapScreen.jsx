import React from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import StepCard from "../components/routine/StepCard";
import { useSelector } from "react-redux";
import { useGetRoutineBySkinTypeQuery, useGetSkinTypeByIdQuery } from "../services/skincare.service";

const RoadmapScreen = () => {
  const skinTypeId = useSelector((state) => state?.rootReducer?.user?.skinType);
  const { data: routine, isLoading, isError } = useGetRoutineBySkinTypeQuery(skinTypeId);
  const { data: skinType } = useGetSkinTypeByIdQuery(skinTypeId);

  // Handle loading state
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading routines...</Text>
      </View>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error fetching routines. Please try again later.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lộ trình chăm sóc da</Text>
        <Text style={styles.skinType}>
          Dành cho da: {skinType?.data?.type}
        </Text>
      </View>

      {routine && routine?.steps.map((step, index) => (
        <StepCard key={index} step={step} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure ScrollView takes up the full screen
    backgroundColor: "#fff", // Keep background white
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#B3E5FC",
    paddingVertical: 10,
    justifyContent: "center",
    marginHorizontal: -20, // Push header wider
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  skinType: {
    fontSize: 16,
    color: "#666",
    fontStyle: "italic",
    marginTop: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default RoadmapScreen;