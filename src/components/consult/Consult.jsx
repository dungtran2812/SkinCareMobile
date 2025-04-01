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
	Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Consult = ({ navigation }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [consultType, setConsultType] = useState("Sản phẩm");
	const [content, setContent] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

	const consultTypes = [
		{ label: "Tư vấn sản phẩm", value: "Sản phẩm" },
		{ label: "Tư vấn lộ trình", value: "Lộ trình" },
		{ label: "Tư vấn dịch vụ", value: "Dịch vụ" },
		{ label: "Thông tin giao hàng", value: "Giao hàng" },
		{ label: "Vấn đề khác", value: "Khác" },
	];

	const handleSelectType = (type) => {
		setConsultType(type.value);
		setModalVisible(false);
	};

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
						<TouchableOpacity
							style={styles.selectButton}
							onPress={() => setModalVisible(true)}
						>
							<FontAwesome
								name="list-ul"
								size={18}
								color="#666"
								style={styles.inputIcon}
							/>
							<Text style={styles.selectButtonText}>
								{
									consultTypes.find(
										(type) => type.value === consultType
									)?.label
								}
							</Text>
							<FontAwesome
								name="angle-down"
								size={18}
								color="#666"
							/>
						</TouchableOpacity>
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

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.modalOverlay}>
					<View style={styles.modalContent}>
						<View style={styles.modalHeader}>
							<Text style={styles.modalTitle}>
								Chọn loại tư vấn
							</Text>
							<TouchableOpacity
								onPress={() => setModalVisible(false)}
								style={styles.closeButton}
							>
								<FontAwesome
									name="times"
									size={20}
									color="#666"
								/>
							</TouchableOpacity>
						</View>
						{consultTypes.map((type, index) => (
							<TouchableOpacity
								key={index}
								style={[
									styles.optionItem,
									type.value === consultType &&
										styles.selectedOption,
								]}
								onPress={() => handleSelectType(type)}
							>
								<Text
									style={[
										styles.optionText,
										type.value === consultType &&
											styles.selectedOptionText,
									]}
								>
									{type.label}
								</Text>
								{type.value === consultType && (
									<FontAwesome
										name="check"
										size={18}
										color="#1E3A5F"
									/>
								)}
							</TouchableOpacity>
						))}
					</View>
				</View>
			</Modal>

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
		zIndex: 1,
	},
	input: {
		flex: 1,
		paddingVertical: 12,
		fontSize: 15,
		color: "#333",
	},
	selectButton: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E0E0E0",
		borderRadius: 12,
		backgroundColor: "#fff",
		paddingHorizontal: 15,
		paddingVertical: 12,
		justifyContent: "space-between",
	},
	selectButtonText: {
		flex: 1,
		fontSize: 15,
		color: "#333",
		marginLeft: 10,
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "flex-end",
	},
	modalContent: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingBottom: 20,
	},
	modalHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#E0E0E0",
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#1E3A5F",
	},
	closeButton: {
		padding: 5,
	},
	optionItem: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
	},
	selectedOption: {
		backgroundColor: "#F8F9FA",
	},
	optionText: {
		fontSize: 16,
		color: "#333",
	},
	selectedOptionText: {
		color: "#1E3A5F",
		fontWeight: "500",
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
});

export default Consult;
