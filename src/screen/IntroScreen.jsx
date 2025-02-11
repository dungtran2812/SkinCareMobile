import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Animated,
	StyleSheet,
} from "react-native";

const slides = [
	"Welcome to the App",
	"Discover Amazing Features",
	"Get Started Today!",
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
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<View style={styles.container}>
			<Animated.View style={{ opacity: fadeAnim }}>
				<Text style={styles.text}>{slides[slideIndex]}</Text>
			</Animated.View>
			<TouchableOpacity
				onPress={() => navigation.replace("LoginScreen")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Bắt đầu ngay</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f8f9fa",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 40,
	},
	button: {
		backgroundColor: "#007AFF",
		paddingVertical: 12,
		paddingHorizontal: 25,
		borderRadius: 10,
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default IntroScreen;
