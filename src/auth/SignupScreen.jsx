import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	Alert,
} from "react-native";
import { Checkbox } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Google from "expo-auth-session/providers/google";
import { useRegisterMutation } from "../services/skincare.service";

const SignupScreen = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [email, setEmail] = useState("");

	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: "YOUR_EXPO_CLIENT_ID",
		iosClientId: "YOUR_IOS_CLIENT_ID",
		androidClientId: "YOUR_ANDROID_CLIENT_ID",
	});

	const [register, { isLoading }] = useRegisterMutation();

	const handleGoogleSignup = async () => {
		await promptAsync();
	};

	const handleSignup = async () => {
		if (password !== confirmPassword) {
			Alert.alert("Lỗi", "Mật khẩu không khớp!");
			return;
		}

		try {
			const userData = {
				username: username,
				password: password,
				email: email,
				phone: phoneNumber,
			};

			const response = await register(userData).unwrap();
			Alert.alert(
				"Thành công",
				"Đăng ký thành công! Vui lòng đăng nhập.",
				[
					{
						text: "OK",
						onPress: () => {
							navigation.navigate("LoginScreen", {
								username: username,
								password: password,
							});
						},
					},
				]
			);
		} catch (error) {
			Alert.alert(
				"Lỗi",
				error.data?.message || "Đăng ký thất bại. Vui lòng thử lại!"
			);
		}
	};

	const isFormValid = () => {
		return (
			username.trim() !== "" &&
			phoneNumber.trim() !== "" &&
			email.trim() !== "" &&
			password.trim() !== "" &&
			confirmPassword.trim() !== "" &&
			isChecked
		);
	};

	const emailInput = (
		<View style={styles.inputWrapper}>
			<Text style={styles.infoText}>Vui lòng nhập email của bạn</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Nhập email"
					placeholderTextColor="#888"
					keyboardType="email-address"
					value={email}
					onChangeText={setEmail}
				/>
			</View>
		</View>
	);

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
					<Text style={styles.title}>
						Beauté đang chờ bạn đó, hãy đăng ký ngay nhé!
					</Text>

					<View style={styles.inputWrapper}>
						<Text style={styles.infoText}>
							Vui lòng nhập tên người dùng của bạn
						</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								placeholder="Nhập tên người dùng"
								placeholderTextColor="#888"
								value={username}
								onChangeText={setUsername}
							/>
						</View>
					</View>

					<View style={styles.inputWrapper}>
						<Text style={styles.infoText}>
							Vui lòng nhập số điện thoại của bạn
						</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								placeholder="Nhập số điện thoại"
								placeholderTextColor="#888"
								keyboardType="phone-pad"
								value={phoneNumber}
								onChangeText={setPhoneNumber}
							/>
						</View>
					</View>

					{emailInput}

					<View style={styles.inputWrapper}>
						<Text style={styles.infoText}>
							Vui lòng nhập mật khẩu
						</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								placeholder="Nhập mật khẩu"
								placeholderTextColor="#888"
								secureTextEntry={!showPassword}
								value={password}
								onChangeText={setPassword}
							/>
							<TouchableOpacity
								onPress={() => setShowPassword(!showPassword)}
							>
								<Ionicons
									name={showPassword ? "eye-off" : "eye"}
									size={20}
									color="#888"
								/>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.inputWrapper}>
						<Text style={styles.infoText}>
							Vui lòng nhập lại mật khẩu
						</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								placeholder="Nhập lại mật khẩu"
								placeholderTextColor="#888"
								secureTextEntry={!showConfirmPassword}
								value={confirmPassword}
								onChangeText={setConfirmPassword}
							/>
							<TouchableOpacity
								onPress={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
							>
								<Ionicons
									name={
										showConfirmPassword ? "eye-off" : "eye"
									}
									size={20}
									color="#888"
								/>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.termsContainer}>
						<Checkbox.Android
							status={isChecked ? "checked" : "unchecked"}
							onPress={() => setIsChecked(!isChecked)}
							color="#1E3A5F"
						/>
						<Text style={styles.termsText}>
							Tôi đồng ý với các điều khoản của Beauté
						</Text>
					</View>

					<TouchableOpacity
						style={[
							styles.signupButton,
							{ opacity: isFormValid() ? 1 : 0.5 },
						]}
						onPress={handleSignup}
						disabled={!isFormValid()}
					>
						<Text style={styles.buttonText}>Đăng Ký</Text>
						<Ionicons
							name="arrow-forward"
							size={20}
							color="white"
							style={styles.buttonIcon}
						/>
					</TouchableOpacity>

					<Text style={styles.orText}>Hoặc</Text>

					<TouchableOpacity
						style={styles.googleButton}
						onPress={handleGoogleSignup}
					>
						<Ionicons
							name="logo-google"
							size={20}
							color="white"
							style={{ marginRight: 10 }}
						/>
						<Text style={styles.buttonText}>Google</Text>
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
		paddingTop: 60,
	},
	backButton: {
		position: "absolute",
		top: 40,
		left: 20,
	},
	upperSection: {
		width: "85%",
		alignItems: "center",
		padding: 10,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 20,
		color: "#1E3A5F",
	},
	inputWrapper: {
		width: "100%",
		marginBottom: 10,
	},
	infoText: {
		fontSize: 13,
		color: "#666",
		marginBottom: 5,
		marginLeft: 5,
		alignSelf: "flex-start",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		borderWidth: 0.15,
		borderColor: "#1E3A5F",
		borderRadius: 20,
		paddingHorizontal: 15,
		backgroundColor: "white",
	},
	input: {
		flex: 1,
		height: 50,
		fontSize: 16,
		color: "#1E3A5F",
	},
	termsContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
		width: "100%",
	},
	termsText: {
		fontSize: 14,
		color: "#1E3A5F",
	},
	signupButton: {
		width: "50%",
		backgroundColor: "#1E3A5F",
		padding: 15,
		borderRadius: 20,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonIcon: {
		marginLeft: 10,
	},
	googleButton: {
		flexDirection: "row",
		backgroundColor: "#DB4437",
		padding: 15,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		width: "50%",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	orText: {
		fontSize: 16,
		color: "#1E3A5F",
		marginVertical: 10,
	},
});

export default SignupScreen;
