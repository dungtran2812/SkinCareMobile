import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductList from "../item/ProductList";

const StepCard = ({ step }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.stepName}>{step.stepName}</Text>
			<Text style={styles.stepName}>Bước {step.stepNumber}</Text>
			<Text style={styles.stepDescription}>{step.stepDescription}</Text>
			<ProductList products={step.products} stepNumber={step.stepNumber} />
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 20,
		padding: 15,
		backgroundColor: "#f9f9f9",
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	stepName: {
		fontSize: 18,
		fontWeight: "bold",
	},
	stepDescription: {
		fontSize: 14,
		color: "#555",
		marginVertical: 10,
	},
});

export default StepCard;
