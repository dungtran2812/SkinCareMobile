import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

const Consult = ({ navigation }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [consultType, setConsultType] = useState("Sản phẩm");
	const [content, setContent] = useState("");

	const handleSubmit = () => {
		// Xử lý gửi thông tin tư vấn ở đây
		Alert.alert("Thông báo", "Gửi đơn thành công!");
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.backButton}
				>
					<FontAwesome name="arrow-left" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Tư vấn</Text>
			</View>
			<View style={styles.form}>
				<Text style={styles.label}>Tên:</Text>
				<TextInput
					style={styles.input}
					placeholder="Nhập tên của bạn"
					value={name}
					onChangeText={setName}
				/>
				<Text style={styles.label}>Số điện thoại:</Text>
				<TextInput
					style={styles.input}
					placeholder="Nhập số điện thoại của bạn"
					value={phone}
					onChangeText={setPhone}
					keyboardType="phone-pad"
				/>
				<Text style={styles.label}>Loại tư vấn:</Text>
				<View style={styles.pickerContainer}>
					<Picker
						selectedValue={consultType}
						style={styles.picker}
						onValueChange={(itemValue) => setConsultType(itemValue)}
					>
						<Picker.Item label="Sản phẩm" value="Sản phẩm" />
						<Picker.Item label="Lộ trình" value="Lộ trình" />
						<Picker.Item label="Dịch vụ" value="Dịch vụ" />
						<Picker.Item label="Giao hàng" value="Giao hàng" />
						<Picker.Item label="Khác" value="Khác" />
					</Picker>
				</View>
				<Text style={styles.label}>Nội dung:</Text>
				<TextInput
					style={styles.textArea}
					placeholder="Nhập nội dung tư vấn"
					value={content}
					onChangeText={setContent}
					multiline
				/>
				<TouchableOpacity
					style={styles.submitButton}
					onPress={handleSubmit}
				>
					<Text style={styles.submitButtonText}>Gửi</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#B3E5FC",
		paddingVertical: 20,
		paddingHorizontal: 10,
		marginHorizontal: -20, // Loại bỏ khoảng trắng hai bên
		marginBottom: 20,
	},
	backButton: {
		marginRight: 10,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		flex: 1,
	},
	form: {
		flex: 1,
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 15,
	},
	pickerContainer: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		marginBottom: 15,
		overflow: "hidden",
	},
	picker: {
		width: "100%",
	},
	textArea: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		height: 100,
		marginBottom: 15,
		textAlignVertical: "top",
	},
	submitButton: {
		backgroundColor: "#007BFF",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
	},
	submitButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Consult;
