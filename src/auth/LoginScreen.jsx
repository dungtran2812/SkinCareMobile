import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	Alert,
	ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import {
	setAccessToken,
	setName,
	setPhoneNumber,
	setSkinType,
	setUsername,
} from "../feature/authentication";
import { useLoginMutation } from "../services/skincare.service";

const LoginScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({ username: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const isFormValid =
		values.username.trim() !== "" && values.password.trim() !== "";
	const [login, { isLoading }] = useLoginMutation();

	useEffect(() => {
		if (route.params?.username && route.params?.password) {
			setValues({
				username: route.params.username,
				password: route.params.password,
			});
		}
	}, [route.params]);

	const handleLogin = async () => {
		if (!values.username || !values.password) {
			alert("Please enter both username and password.");
			return;
		}

		try {
			const userData = await login({
				username: values.username,
				password: values.password,
			}).unwrap();
			dispatch(setAccessToken(userData?.access_token));
			dispatch(setUsername(userData?.data?.username));
			dispatch(setName(userData?.data?.name));
			dispatch(setPhoneNumber(userData?.data?.phone));
			dispatch(setSkinType(userData?.data?.skinType));

			navigation.reset({
				index: 0,
				routes: [{ name: "MainTabNavigator" }],
			});
		} catch (loginError) {
			console.error("Login error:", loginError);
			alert(
				loginError.data?.message || "Login failed. Please try again."
			);
		}
	};

	const toggleSecureTextEntry = () => {
		setShowPassword((prev) => !prev);
	};

	const handleChange = (name, value) => {
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
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
					<Text style={styles.title}>
						Chào bạn, hãy đăng nhập để tham gia cùng Beauté nhé!
					</Text>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder="Email hoặc số điện thoại"
							placeholderTextColor="#888"
							value={values.username}
							onChangeText={(text) =>
								handleChange("username", text)
							}
						/>
					</View>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder="Mật khẩu"
							placeholderTextColor="#888"
							secureTextEntry={!showPassword}
							value={values.password}
							onChangeText={(text) =>
								handleChange("password", text)
							}
						/>
						<TouchableOpacity onPress={toggleSecureTextEntry}>
							<Ionicons
								name={showPassword ? "eye" : "eye-off"}
								size={24}
								color="#1E3A5F"
							/>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						onPress={() => navigation.navigate("SignupScreen")}
					>
						<Text style={styles.signupText}>
							Chưa có tài khoản? Đăng ký tại đây
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[
							styles.loginButton,
							{ opacity: isFormValid ? 1 : 0.5 },
						]}
						onPress={handleLogin}
						disabled={!isFormValid || isLoading}
					>
						{isLoading ? (
							<ActivityIndicator color="white" />
						) : (
							<Text style={styles.loginButtonText}>
								Đăng nhập
							</Text>
						)}
					</TouchableOpacity>
				</View>
			</View>

			<Text style={styles.copyright}>
				© Bản quyền thuộc về Beauté 2025
			</Text>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		paddingTop: 80,
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
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		borderWidth: 0.15,
		borderColor: "#1E3A5F",
		borderRadius: 20,
		paddingHorizontal: 15,
		marginBottom: 15,
		backgroundColor: "white",
	},
	input: {
		flex: 1,
		height: 50,
		fontSize: 16,
		color: "#1E3A5F",
	},
	signupText: {
		color: "#1E3A5F",
		marginBottom: 20,
		fontWeight: "bold",
	},
	loginButton: {
		width: "50%",
		backgroundColor: "#1E3A5F",
		padding: 12,
		borderRadius: 20,
		alignItems: "center",
		elevation: 3,
		marginTop: 10,
	},
	loginButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	copyright: {
		color: "gray",
		fontSize: 14,
		textAlign: "center",
		position: "absolute",
		bottom: 20,
	},
});

export default LoginScreen;
