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
			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.backButton}
				>
					<Ionicons name="arrow-back" size={30} color="#000" />
				</TouchableOpacity>
				<Text style={styles.title}>Thông tin tài khoản</Text>
			</View>

			{/* User info */}
			<View style={styles.userInfoContainer}>
				<Image source={{ uri: user.avatar }} style={styles.avatar} />
				<View style={styles.userDetails}>
					<Text style={styles.userName}>{user.name}</Text>
					<Text style={styles.userEmail}>{user.email}</Text>
				</View>
			</View>

			{/* Form fields */}
			<View style={styles.formContainer}>
				<TextInput
					style={styles.input}
					placeholder="Họ tên"
					value={fullName}
					onChangeText={setFullName}
				/>
				<TextInput
					style={styles.input}
					placeholder="Số điện thoại"
					keyboardType="phone-pad"
					value={phoneNumber}
					onChangeText={setPhoneNumber}
				/>

				{/* Giới tính với Radio Buttons */}
				<View style={styles.radioContainer}>
					<Text>Giới tính</Text>
					<View style={styles.radioButtons}>
						{radioButtonsData.map((button) => (
							<TouchableOpacity
								key={button.id}
								style={[
									styles.radioButton,
									button.selected ? styles.selected : null,
								]}
								onPress={() =>
									handleRadioButtonPress(button.value)
								}
							>
								<Text style={styles.radioText}>
									{button.label}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>

				{/* Chọn ngày sinh */}
				<TouchableOpacity
					onPress={showDatePicker}
					style={styles.birthdayinput}
				>
					<Text style={styles.placeholderText}>
						{dob ? dob : "Ngày sinh"}
					</Text>
				</TouchableOpacity>

				{/* Nút Cập nhật */}
				<TouchableOpacity style={styles.updateButton}>
					<Text style={styles.updateButtonText}>Cập nhật</Text>
				</TouchableOpacity>
			</View>

			{/* Date picker modal */}
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
		backgroundColor: "#fff", // Đặt màu nền của container là trắng
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#B3E5FC", // Màu nền xanh dương
	},
	backButton: {
		position: "absolute",
		left: 20,
		top: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		textAlign: "center",
		flex: 1,
	},
	userInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
		paddingHorizontal: 20,
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginRight: 20,
	},
	userDetails: {
		flexDirection: "column",
		justifyContent: "center",
	},
	userName: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
	},
	userEmail: {
		fontSize: 16,
		color: "#555",
	},
	formContainer: {
		padding: 20,
	},
	input: {
		height: 50,
		borderColor: "#ddd", // Màu viền xám
		borderWidth: 1,
		borderRadius: 10,
		paddingLeft: 10,
		marginBottom: 15,
		color: "#000",
		backgroundColor: "#fff", // Màu nền trắng cho các ô nhập liệu
	},
	birthdayinput: {
		height: 50,
		borderColor: "#ddd", // Màu viền xám
		borderWidth: 1,
		borderRadius: 10,
		paddingLeft: 10,
		paddingTop: 15,
		fontSize: 18,
		marginBottom: 15,
		color: "#000",
		backgroundColor: "#fff", // Màu nền trắng cho các ô nhập liệu
	},
	radioContainer: {
		marginBottom: 15,
	},
	radioButtons: {
		flexDirection: "row", // Đặt các nút radio theo chiều ngang
		justifyContent: "flex-start", // Căn đều các nút
	},
	radioButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "#ddd", // Màu nền của nút radio
		borderRadius: 25,
		margin: 5,
	},
	selected: {
		backgroundColor: "#B3E5FC", // Màu khi nút được chọn
	},
	radioText: {
		fontSize: 16,
		color: "#000", // Màu chữ trong nút
	},
	updateButton: {
		backgroundColor: "#B3E5FC", // Màu nền nút cập nhật
		paddingVertical: 15,
		paddingHorizontal: 40,
		borderRadius: 25,
		alignItems: "center",
		marginTop: 20,
	},
	updateButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#fff",
	},
	placeholderText: {
		color: "#aaa", // Màu chữ placeholder
	},
});
