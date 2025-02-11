import React, { useState, useRef } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Dimensions,
	StyleSheet,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const slides = [
	{
		id: "1",
		title: "Chào mừng bạn đến với ứng dụng!",
		description: "Khám phá những tính năng thú vị của chúng tôi.",
		// image: require("../assets/slide1.png"),
	},
	{
		id: "2",
		title: "Dễ dàng sử dụng",
		description: "Giao diện thân thiện, dễ thao tác.",
		// image: require("../assets/slide2.png"),
	},
	{
		id: "3",
		title: "Bắt đầu ngay thôi!",
		description: "Hãy trải nghiệm ngay bây giờ.",
		// image: require("../assets/slide3.png"),
	},
];

const IntroScreen = () => {
	const navigation = useNavigation();
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselRef = useRef(null);

	const renderItem = ({ item }) => (
		<View style={styles.slide}>
			<Image source={item.image} style={styles.image} />
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.description}>{item.description}</Text>
		</View>
	);

	return (
		<View style={styles.container}>
			<Carousel
				ref={carouselRef}
				data={slides}
				renderItem={renderItem}
				sliderWidth={width}
				itemWidth={width}
				onSnapToItem={(index) => setActiveIndex(index)}
			/>

			{/* Thanh chỉ mục (Dots) */}
			<View style={styles.pagination}>
				{slides.map((_, index) => (
					<View
						key={index}
						style={[
							styles.dot,
							activeIndex === index && styles.activeDot,
						]}
					/>
				))}
			</View>

			{/* Nút Bỏ Qua */}
			<TouchableOpacity
				style={styles.skipButton}
				onPress={() => navigation.replace("MainTabNavigator")}
			>
				<Text style={styles.skipText}>Bỏ qua</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	slide: {
		width: width * 0.9,
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: 300,
		resizeMode: "contain",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 20,
	},
	description: {
		fontSize: 16,
		textAlign: "center",
		color: "#666",
		marginTop: 10,
		paddingHorizontal: 20,
	},
	pagination: {
		flexDirection: "row",
		marginTop: 20,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: "#ccc",
		marginHorizontal: 5,
	},
	activeDot: {
		backgroundColor: "#007AFF",
	},
	skipButton: {
		position: "absolute",
		bottom: 40,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	skipText: {
		fontSize: 18,
		color: "#007AFF",
		fontWeight: "bold",
	},
});

export default IntroScreen;
