import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartHeader = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("MyCart")}
			>
				<View style={styles.buttonContent}>
					<FontAwesome
						name="shopping-cart"
						size={24}
						color="#1E3A5F"
					/>
					<Text style={styles.buttonText}>Giỏ hàng của tôi</Text>
				</View>
				<FontAwesome name="angle-right" size={24} color="#1E3A5F" />
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
		color: "#1E3A5F",
		marginBottom: 10,
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

export default CartHeader;
