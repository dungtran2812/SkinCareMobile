import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
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
				<Ionicons name="gift-outline" size={24} color="#fff" />
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
		backgroundColor: "#1E90FF",
		padding: 10,
		borderRadius: 8,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		marginLeft: 5,
	},
});

export default GiftHeader;
