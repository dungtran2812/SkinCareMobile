import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CombinationSkin from "./../skin/CombinationSkin";
import DrySkin from "./../skin/DrySkin";
import NormalSkin from "./../skin/NormalSkin";
import OilySkin from "./../skin/OilySkin";

const QuizzAnswer = ({ route }) => {
	const { skinType } = route.params;
	const navigation = useNavigation();

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
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("MainTabNavigator", {
							screen: "HomeScreen",
						})
					}
				>
					<Text style={styles.buttonText}>Quay Lại Trang Chủ</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("MainTabNavigator", {
							screen: "Lộ trình",
							params: { skinType },
						})
					}
				>
					<Text style={styles.buttonText}>Lộ Trình Sản Phẩm</Text>
				</TouchableOpacity>
			</View>
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
	buttonContainer: {
		flexDirection: "row",
		marginTop: 20,
	},
	button: {
		backgroundColor: "#1E3A5F",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		marginHorizontal: 10,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default QuizzAnswer;
