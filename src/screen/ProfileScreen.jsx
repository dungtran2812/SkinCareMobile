import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ProfileHeader from "../components/profile/ProfileHeader";
import OrderHeader from "../components/order/OrderHeader";
import Logout from "../auth/Logout";
import Beaute from "../components/info/Beaute";
import GiftHeader from "../components/gift/GiftHeader";
import CartHeader from "../components/cart/CartHeader";

export default function ProfileScreen() {

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<ProfileHeader/>
			<View style={styles.contentContainer}>
				<OrderHeader />
				<CartHeader />
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
