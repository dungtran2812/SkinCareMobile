import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Alert,
	ScrollView,
	SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

const Consult = ({ navigation }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [consultType, setConsultType] = useState("Sản phẩm");
	const [content, setContent] = useState("");

	const handleSubmit = () => {
		if (!name.trim() || !phone.trim() || !content.trim()) {
			Alert.alert("Thông báo", "Vui lòng điền đầy đủ thông tin!");
			return;
		}
		Alert.alert("Thành công", "Chúng tôi sẽ liên hệ với bạn sớm nhất!");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.backButton}
				>
					<FontAwesome name="arrow-left" size={20} color="#1E3A5F" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Đăng ký tư vấn</Text>
			</View>

			<ScrollView
				style={styles.scrollView}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.formContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Họ và tên</Text>
						<View style={styles.inputWrapper}>
							<FontAwesome
								name="user"
								size={18}
								color="#666"
								style={styles.inputIcon}
							/>
							<TextInput
								style={styles.input}
								placeholder="Nhập họ tên của bạn"
								value={name}
								onChangeText={setName}
								placeholderTextColor="#999"
							/>
						</View>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>Số điện thoại</Text>
						<View style={styles.inputWrapper}>
							<FontAwesome
								name="phone"
								size={18}
								color="#666"
								style={styles.inputIcon}
							/>
							<TextInput
								style={styles.input}
								placeholder="Nhập số điện thoại của bạn"
								value={phone}
								onChangeText={setPhone}
								keyboardType="phone-pad"
								placeholderTextColor="#999"
							/>
						</View>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>Loại tư vấn</Text>
						<View style={styles.pickerContainer}>
							<FontAwesome
								name="list-ul"
								size={18}
								color="#666"
								style={styles.inputIcon}
							/>
							<Picker
								selectedValue={consultType}
								onValueChange={(itemValue) =>
									setConsultType(itemValue)
								}
								style={styles.picker}
								dropdownIconColor="#666"
							>
								<Picker.Item
									label="Tư vấn sản phẩm"
									value="Sản phẩm"
								/>
								<Picker.Item
									label="Tư vấn lộ trình"
									value="Lộ trình"
								/>
								<Picker.Item
									label="Tư vấn dịch vụ"
									value="Dịch vụ"
								/>
								<Picker.Item
									label="Thông tin giao hàng"
									value="Giao hàng"
								/>
								<Picker.Item label="Vấn đề khác" value="Khác" />
							</Picker>
						</View>
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>Nội dung cần tư vấn</Text>
						<View style={styles.textAreaWrapper}>
							<TextInput
								style={styles.textArea}
								placeholder="Nhập nội dung bạn cần tư vấn..."
								value={content}
								onChangeText={setContent}
								multiline
								numberOfLines={5}
								placeholderTextColor="#999"
								textAlignVertical="top"
							/>
						</View>
					</View>
				</View>
			</ScrollView>

			<TouchableOpacity
				style={styles.submitButton}
				onPress={handleSubmit}
			>
				<Text style={styles.submitButtonText}>Gửi yêu cầu</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

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
		fontSize: 20,
		fontWeight: "600",
		color: "#1E3A5F",
		flex: 1,
		marginLeft: 15,
	},
	scrollView: {
		flex: 1,
	},
	formContainer: {
		padding: 20,
	},
	inputGroup: {
		marginBottom: 20,
	},
	label: {
		fontSize: 15,
		fontWeight: "500",
		color: "#1E3A5F",
		marginBottom: 8,
	},
	inputWrapper: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E0E0E0",
		borderRadius: 12,
		backgroundColor: "#fff",
		paddingHorizontal: 15,
	},
	inputIcon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		paddingVertical: 12,
		fontSize: 15,
		color: "#333",
	},
	pickerContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E0E0E0",
		borderRadius: 12,
		backgroundColor: "#fff",
		paddingLeft: 15,
		height: 50,
	},
	textAreaWrapper: {
		borderWidth: 1,
		borderColor: "#E0E0E0",
		borderRadius: 12,
		backgroundColor: "#fff",
		padding: 15,
	},
	textArea: {
		height: 120,
		fontSize: 15,
		color: "#333",
		lineHeight: 22,
	},
	submitButton: {
		backgroundColor: "#1E3A5F",
		margin: 20,
		padding: 15,
		borderRadius: 12,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	submitButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
	picker: {
		flex: 1,
		marginLeft: -10,
		height: 50,
		color: "#333",
	},
});

export default Consult;
