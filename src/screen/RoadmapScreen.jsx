import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RoadmapScreen = ({ route }) => {
	// Get the skinType passed from QuizzAnswer
	const { skinType } = route.params || {};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lộ trình chăm sóc da</Text>
			<View style={styles.skinTypeContainer}>
				{skinType === "dry" && (
					<Text style={styles.skinText}>
						Da khô - Lộ trình chăm sóc da khô.
					</Text>
				)}
				{skinType === "combination" && (
					<Text style={styles.skinText}>
						Da hỗn hợp - Lộ trình chăm sóc da hỗn hợp.
					</Text>
				)}
				{skinType === "normal" && (
					<Text style={styles.skinText}>
						Da thường - Lộ trình chăm sóc da thường.
					</Text>
				)}
				{skinType === "oily" && (
					<Text style={styles.skinText}>
						Da dầu - Lộ trình chăm sóc da dầu.
					</Text>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	skinTypeContainer: {
		padding: 20,
		backgroundColor: "#f0f0f0",
		borderRadius: 10,
		alignItems: "center",
	},
	skinText: {
		fontSize: 18,
		color: "#333",
	},
});

export default RoadmapScreen;
