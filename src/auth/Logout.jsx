import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
	const navigation = useNavigation();

	const handleLogout = () => {
		Alert.alert(
			"Đăng xuất",
			"Bạn có muốn đăng xuất khỏi tài khoản không?",
			[
				{
					text: "Không",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{
					text: "Có",
					onPress: () => navigation.navigate("LoginScreen"),
				},
			],
			{ cancelable: false }
		);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handleLogout}>
			<Text style={styles.logoutText}>Đăng xuất</Text>
			<Ionicons name="power-outline" size={24} color="#E53935" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#ddd",
	},
	logoutText: {
		fontSize: 16,
		color: "#E53935",
	},
});

export default Logout;
