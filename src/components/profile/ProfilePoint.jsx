// ProfilePoint.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfilePoint({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tích điểm</Text>

			{/* Thêm thông tin tích điểm ở đây */}
			<Text>Số điểm của bạn: 1500</Text>

			{/* Nút quay lại */}
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.goBack()} // Quay lại ProfileScreen
			>
				<Text style={styles.buttonText}>Quay lại</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#1E90FF",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
	},
});
