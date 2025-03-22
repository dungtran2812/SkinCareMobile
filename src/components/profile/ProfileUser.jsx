// ProfileUser.js
import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Image,
} from "react-native";
import { Ionicons } from "react-native-vector-icons"; // Import Ionicons cho nút back
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Sử dụng thư viện chọn ngày sinh
import RadioButtonsGroup from "react-native-radio-buttons-group";

export default function ProfileUser({ navigation }) {
	// Giả sử dữ liệu người dùng
	const user = {
		avatar: "https://cdn-icons-png.freepik.com/512/146/146005.png",
		name: "Đẹp gái",
		email: "depgaicute@example.com",
	};

	// Trạng thái cho các trường nhập liệu
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [gender, setGender] = useState("male");
	const [dob, setDob] = useState("");
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirmDate = (date) => {
		setDob(date.toLocaleDateString());
		hideDatePicker();
	};

	// Cập nhật giới tính
	const handleRadioButtonPress = (selected) => {
		setGender(selected);
	};

	const radioButtonsData = [
		{
			id: "1",
			label: "Nam",
			value: "male",
			selected: gender === "male",
		},
		{
			id: "2",
			label: "Nữ",
			value: "female",
			selected: gender === "female",
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.backButton}
				>
					<Ionicons name="arrow-back" size={24} color="#1E3A5F" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Thông tin tài khoản</Text>
			</View>

			<View style={styles.content}>
				<View style={styles.userInfoContainer}>
					<Image
						source={{ uri: user.avatar }}
						style={styles.avatar}
					/>
					<View style={styles.userInfo}>
						<Text style={styles.userName}>{user.name}</Text>
						<Text style={styles.userEmail}>{user.email}</Text>
					</View>
				</View>

				<View style={styles.formContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Họ và tên</Text>
						<TextInput
							style={styles.input}
							placeholder="Nhập họ tên của bạn"
							value={fullName}
							onChangeText={setFullName}
						/>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>Số điện thoại</Text>
						<TextInput
							style={styles.input}
							placeholder="Nhập số điện thoại"
							keyboardType="phone-pad"
							value={phoneNumber}
							onChangeText={setPhoneNumber}
						/>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>Giới tính</Text>
						<View style={styles.genderContainer}>
							<TouchableOpacity
								style={[
									styles.genderButton,
									gender === "male" &&
										styles.genderButtonActive,
								]}
								onPress={() => setGender("male")}
							>
								<Text
									style={[
										styles.genderButtonText,
										gender === "male" &&
											styles.genderButtonTextActive,
									]}
								>
									Nam
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.genderButton,
									gender === "female" &&
										styles.genderButtonActive,
								]}
								onPress={() => setGender("female")}
							>
								<Text
									style={[
										styles.genderButtonText,
										gender === "female" &&
											styles.genderButtonTextActive,
									]}
								>
									Nữ
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>Ngày sinh</Text>
						<TouchableOpacity
							style={styles.input}
							onPress={showDatePicker}
						>
							<Text
								style={
									dob
										? styles.inputText
										: styles.placeholderText
								}
							>
								{dob || "Chọn ngày sinh"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<TouchableOpacity style={styles.updateButton}>
					<Text style={styles.updateButtonText}>Cập nhật</Text>
				</TouchableOpacity>
			</View>

			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirmDate}
				onCancel={hideDatePicker}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	backButton: {
		padding: 5,
	},
	headerTitle: {
		flex: 1,
		fontSize: 18,
		fontWeight: "600",
		color: "#1E3A5F",
		textAlign: "center",
		marginRight: 34,
	},
	content: {
		flex: 1,
		padding: 20,
	},
	userInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 30,
	},
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 15,
	},
	userInfo: {
		flex: 1,
	},
	userName: {
		fontSize: 18,
		fontWeight: "600",
		color: "#1E3A5F",
		marginBottom: 5,
	},
	userEmail: {
		fontSize: 14,
		color: "#666",
	},
	formContainer: {
		gap: 20,
	},
	inputGroup: {
		gap: 8,
	},
	label: {
		fontSize: 14,
		fontWeight: "500",
		color: "#1E3A5F",
	},
	input: {
		height: 48,
		borderWidth: 1,
		borderColor: "#E0E0E0",
		borderRadius: 12,
		paddingHorizontal: 15,
		fontSize: 15,
		color: "#333",
		backgroundColor: "#fff",
	},
	genderContainer: {
		flexDirection: "row",
		gap: 12,
	},
	genderButton: {
		flex: 1,
		height: 48,
		borderWidth: 1,
		borderColor: "#E0E0E0",
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	genderButtonActive: {
		backgroundColor: "#E3F2FD",
		borderColor: "#1E3A5F",
	},
	genderButtonText: {
		fontSize: 15,
		color: "#666",
	},
	genderButtonTextActive: {
		color: "#1E3A5F",
		fontWeight: "500",
	},
	inputText: {
		fontSize: 15,
		color: "#333",
		paddingVertical: 12,
	},
	placeholderText: {
		fontSize: 15,
		color: "#999",
		paddingVertical: 12,
	},
	updateButton: {
		backgroundColor: "#1E3A5F",
		height: 50,
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
	},
	updateButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
});
