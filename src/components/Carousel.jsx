import React, { useRef, useState, useEffect } from "react";
import {
	View,
	ScrollView,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = width - CARD_MARGIN * 2;
const aspectRatio = 0.5625; // Tỷ lệ 16:9 (9/16)
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
			<View style={styles.carouselWrapper}>
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
							<View style={styles.imageShadow} />
						</View>
					))}
				</ScrollView>

				<View style={styles.controls}>
					<TouchableOpacity
						style={[styles.controlButton, styles.leftButton]}
						onPress={handlePrevious}
					>
						<Ionicons name="chevron-back" size={20} color="#fff" />
					</TouchableOpacity>

					<TouchableOpacity
						style={[styles.controlButton, styles.rightButton]}
						onPress={handleNext}
					>
						<Ionicons
							name="chevron-forward"
							size={20}
							color="#fff"
						/>
					</TouchableOpacity>
				</View>
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
		marginVertical: 10,
	},
	carouselWrapper: {
		position: "relative",
		backgroundColor: "#fff",
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.15,
				shadowRadius: 6,
			},
			android: {
				elevation: 4,
			},
		}),
	},
	scrollContent: {
		paddingHorizontal: CARD_MARGIN,
	},
	cardContainer: {
		width: CARD_WIDTH,
		marginRight: CARD_MARGIN,
		borderRadius: 12,
		overflow: "hidden",
		position: "relative",
	},
	image: {
		width: CARD_WIDTH,
		height: imageHeight,
		resizeMode: "cover",
	},
	imageShadow: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: "30%",
		backgroundColor: "rgba(0,0,0,0.2)",
		backgroundGradient:
			"linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
	},
	controls: {
		position: "absolute",
		top: "50%",
		left: 0,
		right: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		transform: [{ translateY: -15 }],
	},
	controlButton: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "rgba(0,0,0,0.4)",
		justifyContent: "center",
		alignItems: "center",
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.2,
				shadowRadius: 2,
			},
			android: {
				elevation: 2,
			},
		}),
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
		marginTop: 12,
		gap: 6,
	},
	indicator: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: "#D1D1D1",
		opacity: 0.8,
	},
	activeIndicator: {
		width: 18,
		backgroundColor: "#1E3A5F",
		opacity: 1,
	},
});

export default Carousel;
