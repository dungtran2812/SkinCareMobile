import React, { useRef, useState, useEffect } from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Tính tỷ lệ chiều cao / chiều rộng của ảnh gốc
const aspectRatio = 227 / 736;
const imageHeight = width * aspectRatio; // Tính chiều cao dựa trên tỷ lệ

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

	// Hàm theo dõi sự kiện scroll và cập nhật currentIndex
	const onScroll = (event) => {
		const contentOffsetX = event.nativeEvent.contentOffset.x;
		const index = Math.floor(contentOffsetX / width); // Lấy index từ vị trí cuộn
		setCurrentIndex(index);
	};

	// Cập nhật tự động sau mỗi 5 giây
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
		<View style={[styles.carouselContainer, { height: imageHeight }]}>
			<ScrollView
				ref={scrollViewRef}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={onScroll} // Thêm sự kiện onScroll
				scrollEnabled // Đảm bảo người dùng có thể cuộn nhanh
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
		backgroundColor: "#B3E5FC",
		alignItems: "center",
	},
	imageWrapper: {
		width: width,
		height: "100%", // Đảm bảo chiều cao là 100% của container
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: width, // Đảm bảo ảnh vừa với chiều rộng màn hình
		height: "100%", // Đảm bảo ảnh vừa với chiều cao container
		resizeMode: "contain", // Giữ nguyên tỷ lệ ảnh
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
