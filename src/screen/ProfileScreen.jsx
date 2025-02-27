// ProfileScreen.js
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ProfileHeader from "../components/profile/ProfileHeader"; // Import ProfileHeader

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
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
