// ProfileHeader.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Thêm import icon
import { useSelector } from "react-redux";

const ProfileHeader = () => {
	const user = useSelector((state) => state?.rootReducer?.user)
	return (
		<View style={styles.container}>
			<View style={styles.userInfoContainer}>
				<Image
					source={{ uri: user.img }} // Dùng avatar của người dùng
					style={styles.avatar}
				/>
				<View style={styles.userInfo}>
					<Text style={styles.userName}>{user.name}</Text>
					<Text style={styles.userEmail}>{user.email}</Text>
				</View>
			</View>

			{/* Buttons */}
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("ProfileUser")}
				>
					<Icon name="person-outline" size={22} color="#1E3A5F" />
					<Text style={styles.buttonText}>Sửa hồ sơ</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("ProfileQuizzResult")}
				>
					<Icon
						name="document-text-outline"
						size={22}
						color="#1E3A5F"
					/>
					<Text style={styles.buttonText}>Lịch sử kiểm tra da</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		paddingTop: 30,
		paddingBottom: 20,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	userInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		marginBottom: 25,
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
		borderWidth: 3,
		borderColor: "#E3F2FD",
	},
	userInfo: {
		marginLeft: 15,
		flex: 1,
	},
	userName: {
		fontSize: 20,
		fontWeight: "600",
		color: "#1E3A5F",
		marginBottom: 5,
	},
	userEmail: {
		fontSize: 14,
		color: "#666",
	},
	buttonsContainer: {
		flexDirection: "row",
		paddingHorizontal: 20,
		gap: 12,
	},
	button: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#E3F2FD",
		padding: 15,
		borderRadius: 12,
		gap: 8,
	},
	buttonText: {
		color: "#1E3A5F",
		fontSize: 13,
		fontWeight: "500",
	},
});

export default ProfileHeader;
