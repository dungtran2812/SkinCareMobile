import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ProfileHeader from "../components/profile/ProfileHeader"; // Import ProfileHeader
import OrderHeader from "../components/order/OrderHeader";

export default function ProfileScreen({ navigation }) {
	// Giả sử dữ liệu người dùng
	const user = {
		avatar: "https://cdn-icons-png.freepik.com/512/146/146005.png", // URL hình ảnh avatar
		name: "Đẹp gái",
		email: "depgaicute@example.com",
		points: 1500,
	};

	return (
		<ScrollView style={styles.container}>
			<ProfileHeader user={user} navigation={navigation} />
			<View>
				<OrderHeader />
				<View style={styles.separator} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
		marginVertical: 10,
	},
});
