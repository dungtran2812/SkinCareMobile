import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuizzAnswer = ({ route }) => {
	const { skinType } = route.params;

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Loại da của bạn là: {skinType}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#1E3A5F",
	},
});

export default QuizzAnswer;
