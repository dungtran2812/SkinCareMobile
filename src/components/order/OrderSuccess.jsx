import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons

const OrderSuccess = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Ionicons
				name="checkmark-circle-outline"
				size={100}
				color="#1E90FF"
			/>
			<Text style={styles.title}>Bạn đã đặt đơn thành công!</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					navigation.navigate("MainTabNavigator", {
						screen: "HomeScreen",
					})
				}
			>
				<Text style={styles.buttonText}>Quay về trang chủ</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		marginVertical: 20,
		textAlign: "center",
	},
	button: {
		backgroundColor: "#1E90FF",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
		width: "80%",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default OrderSuccess;
