import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const GiftHeader = () => {
	const navigation = useNavigation();

	const handleNavigate = () => {
		navigation.navigate("GiftChange");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Quà tặng</Text>
			<TouchableOpacity style={styles.button} onPress={handleNavigate}>
				<Ionicons name="gift-outline" size={24} color="#000" />
				<Text style={styles.buttonText}>Đổi quà</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 10,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderWidth: 0.2,
		borderColor: "#000",
		borderRadius: 15,
		alignSelf: "flex-start",
	},
	buttonText: {
		color: "#000",
		fontSize: 16,
		marginLeft: 5,
		fontWeight: "bold",
	},
});

export default GiftHeader;
