import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const GiftHeader = () => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate("GiftChange")}
		>
			<View style={styles.content}>
				<View style={styles.iconContainer}>
					<Ionicons name="gift-outline" size={22} color="#1E3A5F" />
				</View>
				<Text style={styles.title}>Đổi quà tặng</Text>
			</View>
			<Ionicons name="chevron-forward" size={22} color="#1E3A5F" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#fff",
		padding: 15,
		marginHorizontal: 15,
		marginVertical: 10,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#f0f0f0",
	},
	content: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconContainer: {
		width: 40,
		height: 40,
		backgroundColor: "#E3F2FD",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 12,
	},
	title: {
		fontSize: 15,
		fontWeight: "500",
		color: "#1E3A5F",
	},
});

export default GiftHeader;
