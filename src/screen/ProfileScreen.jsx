import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ProfileHeader from "../components/profile/ProfileHeader";
import OrderHeader from "../components/order/OrderHeader";
import Logout from "../auth/Logout";
import Beaute from "../components/info/Beaute";
import GiftHeader from "../components/gift/GiftHeader";
import CartHeader from "../components/cart/CartHeader";

export default function ProfileScreen({ navigation }) {
	const user = {
		avatar: "https://cdn-icons-png.freepik.com/512/146/146005.png",
		name: "Đẹp gái",
		email: "depgaicute@example.com",
	};

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<ProfileHeader user={user} navigation={navigation} />
			<View style={styles.contentContainer}>
				<OrderHeader />
				<CartHeader />
				<GiftHeader />
				<Beaute />
				<Logout />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	contentContainer: {
		padding: 15,
		gap: 15,
	},
});
