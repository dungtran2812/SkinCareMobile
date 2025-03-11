import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CombinationSkin from "./../skin/CombinationSkin";
import DrySkin from "./../skin/DrySkin";
import NormalSkin from "./../skin/NormalSkin";
import OilySkin from "./../skin/OilySkin";

const QuizzAnswer = ({ route }) => {
	const { skinType } = route.params;

	let SkinComponent;
	switch (skinType) {
		case "dry":
			SkinComponent = DrySkin;
			break;
		case "combination":
			SkinComponent = CombinationSkin;
			break;
		case "normal":
			SkinComponent = NormalSkin;
			break;
		case "oily":
			SkinComponent = OilySkin;
			break;
		default:
			SkinComponent = () => (
				<Text style={styles.text}>Không xác định được loại da</Text>
			);
	}

	return (
		<View style={styles.container}>
			<SkinComponent />
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
