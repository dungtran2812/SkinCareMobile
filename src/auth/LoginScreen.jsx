import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

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
					<Ionicons name="arrow-back" size={24} color="black" />
				</TouchableOpacity>

				<View style={styles.upperSection}>
					<Text style={styles.title}>
						Chào bạn, hãy đăng nhập để tham gia cùng Beauté nhé!
					</Text>

					<TextInput
						style={styles.input}
						placeholder="Tên đăng nhập"
						value={username}
						onChangeText={setUsername}
					/>

					<View style={styles.passwordContainer}>
						<TextInput
							style={styles.inputPassword}
							placeholder="Mật khẩu"
							secureTextEntry={!showPassword}
							value={password}
							onChangeText={setPassword}
						/>
						<TouchableOpacity
							onPress={() => setShowPassword(!showPassword)}
						>
							<Ionicons
								name={showPassword ? "eye" : "eye-off"}
								size={24}
								color="gray"
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
				</View>

				<TouchableOpacity style={styles.loginButton}>
					<Text style={styles.loginButtonText}>Đăng nhập</Text>
				</TouchableOpacity>
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
		justifyContent: "space-between",
		alignItems: "center",
	},
	container: {
		flex: 1,
		justifyContent: "flex-start",
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
		backgroundColor: "rgba(255, 255, 255, 0.95)",
		padding: 20,
		borderRadius: 10,
		elevation: 3,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 20,
		color: "#1E3A5F",
	},
	input: {
		width: "100%",
		height: 50,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 15,
		backgroundColor: "white",
	},
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 15,
		backgroundColor: "white",
	},
	inputPassword: {
		flex: 1,
		height: 50,
	},
	signupText: {
		color: "#1E3A5F",
		marginBottom: 20,
		fontWeight: "bold",
	},
	loginButton: {
		width: "85%",
		backgroundColor: "#1E3A5F",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		elevation: 3,
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
