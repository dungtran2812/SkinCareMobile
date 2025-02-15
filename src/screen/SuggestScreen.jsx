import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function SuggestScreen() {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<Text style={styles.text}>SuggestScreen</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#1E3A5F",
	},
});
