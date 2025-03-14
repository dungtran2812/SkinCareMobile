import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderSuccess = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bạn đã đặt đơn thành công!</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Home")}
				>
					<Text style={styles.buttonText}>Quay về trang chủ</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("OrderStatus", { position: 0 })
					}
				>
					<Text style={styles.buttonText}>
						Ghé xem đơn hàng của tôi
					</Text>
				</TouchableOpacity>
			</View>
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
		marginBottom: 20,
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
	button: {
		backgroundColor: "#1E90FF",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
		flex: 1,
		marginHorizontal: 10,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default OrderSuccess;
