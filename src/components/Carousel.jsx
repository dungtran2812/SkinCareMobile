import React, { useRef, useState, useEffect } from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const imageHeight = height * 0.5; // Fit chiều dọc với màn hình
const images = [
	require("../../assets/images/carousel/slide1.jpg"),
	require("../../assets/images/carousel/slide2.jpg"),
	require("../../assets/images/carousel/slide3.jpg"),
	require("../../assets/images/carousel/slide4.jpg"),
	require("../../assets/images/carousel/slide5.jpg"),
	require("../../assets/images/carousel/slide6.jpg"),
	require("../../assets/images/carousel/slide7.jpg"),
	require("../../assets/images/carousel/slide8.jpg"),
	require("../../assets/images/carousel/slide9.jpg"),
	require("../../assets/images/carousel/slide10.jpg"),
];

const Carousel = () => {
	const scrollViewRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = (currentIndex + 1) % images.length;
			setCurrentIndex(nextIndex);
			scrollViewRef.current?.scrollTo({
				x: width * nextIndex,
				animated: true,
			});
		}, 5000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<View style={styles.carouselContainer}>
			<ScrollView
				ref={scrollViewRef}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
			>
				{images.map((image, index) => (
					<View key={index} style={styles.imageWrapper}>
						<Image source={image} style={styles.image} />
					</View>
				))}
			</ScrollView>
			<View style={styles.indicatorContainer}>
				{images.map((_, index) => (
					<View
						key={index}
						style={[
							styles.indicator,
							currentIndex === index && styles.activeIndicator,
						]}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	carouselContainer: {
		width: width,
		height: imageHeight,
		backgroundColor: "#B3E5FC",
		alignItems: "center",
	},
	imageWrapper: {
		width: width,
		height: imageHeight,
	},
	image: {
		width: width,
		height: imageHeight,
		resizeMode: "cover",
		borderRadius: 15,
	},
	indicatorContainer: {
		flexDirection: "row",
		position: "absolute",
		bottom: 10,
		alignSelf: "center",
	},
	indicator: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: "#ccc",
		marginHorizontal: 4,
	},
	activeIndicator: {
		backgroundColor: "#1E3A5F",
	},
});

export default Carousel;
