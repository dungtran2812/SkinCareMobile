import React, { useRef, useState, useEffect } from "react";
import {
	View,
	ScrollView,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 15;
const CARD_WIDTH = width - CARD_MARGIN * 2;
const aspectRatio = 9 / 16; // Tỷ lệ 16:9 cho ảnh
const imageHeight = CARD_WIDTH * aspectRatio;

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

	const handlePrevious = () => {
		if (currentIndex > 0) {
			const newIndex = currentIndex - 1;
			scrollToIndex(newIndex);
		}
	};

	const handleNext = () => {
		if (currentIndex < images.length - 1) {
			const newIndex = currentIndex + 1;
			scrollToIndex(newIndex);
		}
	};

	const scrollToIndex = (index) => {
		scrollViewRef.current?.scrollTo({
			x: CARD_WIDTH * index + CARD_MARGIN * index,
			animated: true,
		});
		setCurrentIndex(index);
	};

	const onScroll = (event) => {
		const contentOffsetX = event.nativeEvent.contentOffset.x;
		const index = Math.round(contentOffsetX / (CARD_WIDTH + CARD_MARGIN));
		setCurrentIndex(index);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = (currentIndex + 1) % images.length;
			scrollToIndex(nextIndex);
		}, 5000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<View style={styles.container}>
			<ScrollView
				ref={scrollViewRef}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={onScroll}
				contentContainerStyle={styles.scrollContent}
				decelerationRate="fast"
				snapToInterval={CARD_WIDTH + CARD_MARGIN}
			>
				{images.map((image, index) => (
					<View key={index} style={styles.cardContainer}>
						<Image source={image} style={styles.image} />
					</View>
				))}
			</ScrollView>

			<View style={styles.controls}>
				<TouchableOpacity
					style={[styles.controlButton, styles.leftButton]}
					onPress={handlePrevious}
				>
					<Ionicons name="chevron-back" size={24} color="#fff" />
				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.controlButton, styles.rightButton]}
					onPress={handleNext}
				>
					<Ionicons name="chevron-forward" size={24} color="#fff" />
				</TouchableOpacity>
			</View>

			<View style={styles.indicatorContainer}>
				{images.map((_, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => scrollToIndex(index)}
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
	container: {
		marginVertical: 15,
	},
	scrollContent: {
		paddingHorizontal: CARD_MARGIN,
	},
	cardContainer: {
		width: CARD_WIDTH,
		marginRight: CARD_MARGIN,
		borderRadius: 15,
		overflow: "hidden",
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	image: {
		width: CARD_WIDTH,
		height: imageHeight,
		resizeMode: "cover",
	},
	controls: {
		position: "absolute",
		top: "50%",
		left: 0,
		right: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 5,
		transform: [{ translateY: -20 }],
	},
	controlButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "rgba(0,0,0,0.3)",
		justifyContent: "center",
		alignItems: "center",
	},
	leftButton: {
		marginLeft: 5,
	},
	rightButton: {
		marginRight: 5,
	},
	indicatorContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
		gap: 8,
	},
	indicator: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: "#E0E0E0",
	},
	activeIndicator: {
		width: 24,
		backgroundColor: "#1E3A5F",
	},
});

export default Carousel;
