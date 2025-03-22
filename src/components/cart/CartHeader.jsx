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
					<View style={styles.iconContainer}>
						<FontAwesome
							name="shopping-cart"
							size={20}
							color="#1E3A5F"
						/>
					</View>
					<Text style={styles.buttonText}>Giỏ hàng của tôi</Text>
				</View>
				<FontAwesome name="angle-right" size={20} color="#1E3A5F" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		paddingHorizontal: 15,
		paddingVertical: 12,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#F8F9FA",
		borderRadius: 10,
		padding: 15,
		borderWidth: 1,
		borderColor: "#E9ECEF",
	},
	buttonContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconContainer: {
		backgroundColor: "#E3F2FD",
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 15,
		color: "#1E3A5F",
		fontWeight: "600",
		marginLeft: 12,
	},
});

export default CartHeader;
