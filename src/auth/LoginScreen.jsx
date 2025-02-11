import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View style={styles.container}>
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

			<TouchableOpacity style={styles.loginButton}>
				<Text style={styles.loginButtonText}>Đăng nhập</Text>
			</TouchableOpacity>

			<Text style={styles.copyright}>
				© Bản quyền thuộc về Beauté 2025
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: "100%",
		height: 50,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 10,
		paddingHorizontal: 10,
		marginBottom: 15,
	},
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 10,
		paddingHorizontal: 10,
		marginBottom: 15,
	},
	inputPassword: {
		flex: 1,
		height: 50,
	},
	signupText: {
		color: "blue",
		marginBottom: 20,
	},
	loginButton: {
		width: "100%",
		backgroundColor: "#007AFF",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	loginButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	copyright: {
		marginTop: 30,
		color: "gray",
		fontSize: 14,
	},
});

export default LoginScreen;
