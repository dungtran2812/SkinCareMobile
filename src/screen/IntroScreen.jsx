import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Animated,
	StyleSheet,
	Image,
	ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const slides = [
	{
		text: "Phân tích, trắc nghiệm từng loại da để đưa ra giải pháp chăm sóc da tốt nhất",
	},
	{
		text: "Tạo lộ trình chăm sóc da bài bản và chi tiết theo từng cá nhân",
	},
	{
		text: "Sản phẩm bán và sử dụng trong liệu trình 100% là sản phẩm chính hãng",
	},
];

const IntroScreen = ({ navigation }) => {
	const [slideIndex, setSlideIndex] = useState(0);
	const fadeAnim = new Animated.Value(1);

	useEffect(() => {
		const interval = setInterval(() => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 500,
				useNativeDriver: true,
			}).start(() => {
				setSlideIndex((prev) => (prev + 1) % slides.length);
				fadeAnim.setValue(1);
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<ImageBackground
			source={require("../../assets/images/logo/bg.jpg")}
			style={styles.background}
		>
			<View style={styles.container}>
				{/* Logo */}
				<Image
					source={require("../../assets/images/logo/logo-removebg.png")}
					style={styles.logo}
				/>

				{/* Slide Animation */}
				<Animated.View style={styles.textContainer}>
					<Text style={styles.text}>{slides[slideIndex].text}</Text>
				</Animated.View>

				{/* Button */}
				<TouchableOpacity
					onPress={() => navigation.navigate("LoginScreen")}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Bắt đầu ngay</Text>
					<Ionicons
						name="arrow-forward"
						size={20}
						color="white"
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: "cover",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 180,
		height: 180,
		marginBottom: 10,
	},
	textContainer: {
		width: "80%",
		alignItems: "center",
		marginBottom: 20,
	},
	text: {
		fontSize: 17,
		fontWeight: "bold",
		textAlign: "center",
		color: "#1E3A5F",
	},
	button: {
		backgroundColor: "#1E3A5F",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 11,
		paddingHorizontal: 18,
		borderRadius: 15,
	},
	buttonText: {
		color: "white",
		fontSize: 17,
		fontWeight: "bold",
		marginRight: 3,
	},
	icon: {
		marginLeft: 5,
	},
});

export default IntroScreen;
