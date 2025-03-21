// ProfileHeader.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Thêm import icon

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
					<Icon name="person-outline" size={24} color="#1E3A5F" />
					<Text style={styles.buttonText}>Sửa hồ sơ</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("ProfileQuizzResult")}
				>
					<Icon
						name="document-text-outline"
						size={24}
						color="#1E3A5F"
					/>
					<Text style={styles.buttonText}>Lịch sử kiểm tra da</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("ProfilePoint")}
				>
					<Icon name="star-outline" size={24} color="#1E3A5F" />
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
		paddingVertical: 20,
		backgroundColor: "#B3E5FC", // Đặt màu nền là #B3E5FC
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderWidth: 3,
		borderColor: "#fff",
		marginBottom: 10,
	},
	userName: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#1E3A5F",
		marginBottom: 5,
	},
	userEmail: {
		fontSize: 16,
		color: "#555",
		marginBottom: 10,
	},
	points: {
		fontSize: 18,
		color: "#1E3A5F",
		fontWeight: "bold",
		marginBottom: 20,
		backgroundColor: "#fff",
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 20,
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		paddingHorizontal: 20,
	},
	button: {
		backgroundColor: "#fff", // Nền nút sẽ là trắng để đối lập với nền #B3E5FC
		padding: 15,
		borderRadius: 15,
		alignItems: "center",
		width: "30%",
		shadowColor: "#000", // Màu bóng
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5, // Đổ bóng nhẹ cho nút
	},
	buttonText: {
		color: "#1E3A5F", // Màu chữ của nút
		fontSize: 12,
		fontWeight: "bold",
		marginTop: 5,
		textAlign: "center",
	},
});

export default ProfileHeader;
