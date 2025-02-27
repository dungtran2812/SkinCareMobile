// ProfileUser.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileUser({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sửa hồ sơ</Text>

			{/* Thêm các trường để người dùng chỉnh sửa hồ sơ */}
			<Text>Thông tin chỉnh sửa ở đây...</Text>

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
