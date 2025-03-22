import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const GiftHeader = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("GiftChange")}
			>
				<View style={styles.buttonContent}>
					<Ionicons name="gift-outline" size={24} color="#1E3A5F" />
					<Text style={styles.buttonText}>Đổi quà</Text>
				</View>
				<Ionicons name="chevron-forward" size={24} color="#1E3A5F" />
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
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 15,
		backgroundColor: "#f5f5f5",
		borderRadius: 15,
		borderWidth: 0.2,
		borderColor: "#ddd",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	buttonContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	buttonText: {
		color: "#1E3A5F",
		fontSize: 16,
		marginLeft: 10,
		fontWeight: "500",
	},
});

export default GiftHeader;
