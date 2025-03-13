import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartHeader = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Giỏ hàng</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("MyCart")}
				>
					<FontAwesome name="shopping-cart" size={24} color="black" />
					<Text style={styles.buttonText}>Giỏ hàng của tôi</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("ProductFavourite")}
				>
					<FontAwesome name="heart" size={24} color="red" />
					<Text style={styles.buttonText}>Yêu thích</Text>
				</TouchableOpacity>
			</View>
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
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "left",
		marginBottom: 20,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 16,
		marginLeft: 10,
	},
});

export default CartHeader;
