import React, { useState, useRef } from "react";
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import QuickAccess from "../components/QuickAccess";
import FlashDeals from "../components/deals/FlashDeals";
import CategoryHeader from "../components/category/CategoryHeader";
import BrandHeader from "../components/brand/BrandHeader";
import Suggest from "../components/Suggest";

export default function HomeScreen() {
	// Sử dụng useRef để tham chiếu tới ScrollView
	const scrollViewRef = useRef();

	// Sử dụng state để theo dõi vị trí cuộn
	const [isVisible, setIsVisible] = useState(false);

	// Hàm để cuộn lên đầu trang
	const scrollToTop = () => {
		scrollViewRef.current.scrollTo({ y: 0, animated: true });
	};

	// Hàm theo dõi sự kiện cuộn
	const handleScroll = (event) => {
		const offsetY = event.nativeEvent.contentOffset.y;
		if (offsetY > 100) {
			// Khi cuộn xuống 100px thì nút hiện ra
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	return (
		<ScrollView
			ref={scrollViewRef}
			style={styles.container}
			onScroll={handleScroll}
			scrollEventThrottle={16}
		>
			<Header />
			<Carousel />
			<QuickAccess />
			<FlashDeals />
			<CategoryHeader />
			<BrandHeader />
			<Suggest />

			{/* Nút Scroll to Top */}
			{isVisible && (
				<TouchableOpacity
					style={styles.scrollButton}
					onPress={scrollToTop}
				>
					<Text style={styles.scrollButtonText}>↑</Text>
				</TouchableOpacity>
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20, // Khoảng cách dưới để tránh text bị dính vào đáy
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#1E3A5F",
	},
	scrollButton: {
		position: "absolute", // Đặt nút ở vị trí cố định
		bottom: 20,
		right: 20,
		backgroundColor: "#1E90FF", // Màu nền cho nút
		padding: 10,
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	scrollButtonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
});
