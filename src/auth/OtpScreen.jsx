import React, { useState, useRef } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const OtpScreen = ({ navigation }) => {
	const [otp, setOtp] = useState(["", "", "", ""]);
	const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

	const handleOtpChange = (value, index) => {
		if (isNaN(value)) return;
		let newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		if (value && index < 3) {
			inputRefs[index + 1].current.focus();
		}
	};

	const handleSubmit = () => {
		if (otp.join("").length === 4) {
			navigation.navigate("MainTabNavigator");
		}
	};

	return (
		<ImageBackground
			source={require("../../assets/images/logo/bg1.jpg")}
			style={styles.background}
		>
			<View style={styles.container}>
				{/* Back Button */}
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<Ionicons name="arrow-back" size={24} color="#1E3A5F" />
				</TouchableOpacity>

				<View style={styles.upperSection}>
					<Text style={styles.title}>Nhập mã xác thực</Text>
					<Text style={styles.infoText}>
						Vui lòng nhập mã bạn nhận được từ tin nhắn của Beauté
					</Text>

					<View style={styles.otpContainer}>
						{otp.map((digit, index) => (
							<TextInput
								key={index}
								ref={inputRefs[index]}
								style={styles.otpInput}
								keyboardType="numeric"
								maxLength={1}
								value={digit}
								onChangeText={(value) =>
									handleOtpChange(value, index)
								}
							/>
						))}
					</View>

					<TouchableOpacity style={styles.resendButton}>
						<Text style={styles.resendText}>Gửi lại</Text>
					</TouchableOpacity>

					<Text style={styles.checkNumberText}>
						Không nhận được mã?
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("SignupScreen")}
						style={styles.underlineText}
					>
						<Text style={styles.checkNumberLink}>
							Kiểm tra lại số điện thoại của bạn
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[
							styles.submitButton,
							{ opacity: otp.join("").length === 4 ? 1 : 0.5 },
						]}
						onPress={handleSubmit}
						disabled={otp.join("").length !== 4}
					>
						<Text style={styles.submitText}>Xác nhận</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
		paddingVertical: 50,
	},
	backButton: {
		position: "absolute",
		top: 40,
		left: 20,
	},
	upperSection: {
		width: "85%",
		alignItems: "center",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		color: "#1E3A5F",
	},
	infoText: {
		fontSize: 14,
		color: "#666",
		marginVertical: 10,
		textAlign: "center",
	},
	otpContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 20,
	},
	otpInput: {
		width: 50,
		height: 50,
		borderWidth: 1,
		borderColor: "#1E3A5F",
		borderRadius: 8,
		textAlign: "center",
		fontSize: 18,
		marginHorizontal: 10,
		backgroundColor: "white",
	},
	resendButton: {
		marginTop: 10,
	},
	resendText: {
		color: "#1E3A5F",
		fontSize: 16,
		fontWeight: "bold",
	},
	checkNumberText: {
		fontSize: 14,
		color: "#666",
		marginTop: 15,
		textAlign: "center",
	},
	underlineText: {
		borderBottomWidth: 1,
		borderBottomColor: "#1E3A5F",
		marginBottom: 20,
	},
	checkNumberLink: {
		fontSize: 14,
		color: "#1E3A5F",
		textAlign: "center",
	},
	submitButton: {
		backgroundColor: "#1E3A5F",
		padding: 15,
		borderRadius: 8,
		alignItems: "center",
		width: "85%",
		marginTop: 20,
	},
	submitText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default OtpScreen;
