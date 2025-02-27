// ProfileHeader.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProfileHeader = ({ user, navigation }) => {
	return (
		<View style={styles.container}>
			{/* Avatar */}
			<Image
				source={{ uri: user.avatar }} // Dùng avatar của người dùng
				style={styles.avatar}
			/>

			{/* User info */}
			<Text style={styles.userName}>{user.name}</Text>
			<Text style={styles.userEmail}>{user.email}</Text>
			<Text style={styles.points}>Điểm tích luỹ: {user.points}</Text>

			{/* Buttons */}
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("ProfileUser")}
				>
					<Text style={styles.buttonText}>Sửa hồ sơ</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("ProfilePoint")}
				>
					<Text style={styles.buttonText}>Tích điểm</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		backgroundColor: "#B3E5FC", // Đặt màu nền là #B3E5FC
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	userName: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 5,
	},
	userEmail: {
		fontSize: 16,
		color: "#555",
		marginBottom: 10,
	},
	points: {
		fontSize: 16,
		color: "#009999",
		marginBottom: 5,
		fontWeight: "bold",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center", // Canh giữa 2 nút
		width: "35%",
	},
	button: {
		backgroundColor: "#fff", // Nền nút sẽ là trắng để đối lập với nền #B3E5FC
		paddingVertical: 8,
		paddingHorizontal: 25,
		borderRadius: 25, // Viền bo tròn cho nút
		marginHorizontal: 5,
		elevation: 5, // Đổ bóng nhẹ cho nút
		shadowColor: "#000", // Màu bóng
		shadowOffset: { width: 0, height: 3 }, // Đổ bóng xuống dưới
		shadowOpacity: 0.1, // Độ mờ của bóng
		shadowRadius: 5, // Độ lớn của bóng
	},
	buttonText: {
		color: "#1E3A5F", // Màu chữ của nút
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ProfileHeader;
