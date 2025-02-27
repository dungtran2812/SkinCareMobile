import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Countdown from "react-native-countdown-component";
import ProductCard from "./ProductCard"; // Import ProductCard component

const { width } = Dimensions.get("window");

const FlashDeals = () => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("FlashDeals"); // Chuyển đến màn hình FlashDeals khi nhấn vào "Xem tất cả"
	};

	// Dữ liệu giả cho sản phẩm
	const products = [
		{
			id: 1,
			name: "Bioderma Cicabio Creme",
			originalPrice: 70000,
			discount: 20,
			image: "https://bizweb.dktcdn.net/100/443/867/products/kem-duong-phuc-hoi-bioderma-cicabio-40ml.png?v=1695090777257",
			tag: "Da dầu", // Thử với loại da "Da dầu"
		},
		{
			id: 2,
			name: "Product 2",
			originalPrice: 50,
			discount: 10,
			image: "https://via.placeholder.com/150",
			tag: "Da khô", // Thử với loại da "Da khô"
		},
		{
			id: 3,
			name: "Product 2",
			originalPrice: 50,
			discount: 10,
			image: "https://via.placeholder.com/150",
			tag: "Da khô", // Thử với loại da "Da khô"
		},
		{
			id: 4,
			name: "Product 2",
			originalPrice: 50,
			discount: 10,
			image: "https://via.placeholder.com/150",
			tag: "Da khô", // Thử với loại da "Da khô"
		},
		{
			id: 5,
			name: "Product 2",
			originalPrice: 50,
			discount: 10,
			image: "https://via.placeholder.com/150",
			tag: "Da khô", // Thử với loại da "Da khô"
		},
	];

	return (
		<View style={styles.container}>
			{/* Tiêu đề và đồng hồ đếm ngược */}
			<View style={styles.header}>
				<View style={styles.leftSide}>
					<Text style={styles.title}>Flash Deals</Text>
					<Countdown
						until={3600} // Thời gian đếm ngược trong giây (1 giờ)
						size={15} // Giảm kích thước đồng hồ
						onFinish={() => alert("Time's up!")}
						digitStyle={{
							backgroundColor: "#999999",
							width: 20, // Giảm chiều rộng của mỗi số
							height: 20, // Giảm chiều cao của mỗi số
							borderRadius: 5, // Bo góc
						}}
						digitTxtStyle={{ color: "#fff", fontSize: 12 }} // Giảm kích thước chữ
						timeLabelStyle={{
							color: "transparent", // Ẩn nhãn 'day', 'hour', 'minute', 'second'
						}}
						separatorStyle={{ color: "transparent" }} // Ẩn dấu phân cách
					/>
				</View>
				<TouchableOpacity
					onPress={handlePress}
					style={styles.viewAllContainer}
				>
					<Text style={styles.viewAll}>Xem tất cả</Text>
				</TouchableOpacity>
			</View>

			{/* Danh sách sản phẩm */}
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductCard product={item} />}
				keyExtractor={(item) => item.id.toString()}
				horizontal // Hiển thị theo dạng cuộn ngang
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		backgroundColor: "#F0F8FF",
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between", // Căn đều các phần tử
		alignItems: "center", // Căn giữa các phần tử theo chiều dọc
		width: width - 20,
	},
	leftSide: {
		flexDirection: "row", // Đặt chữ "Flash Deals" và đồng hồ theo chiều ngang
		alignItems: "center", // Căn giữa chữ và đồng hồ theo chiều dọc
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginRight: 10, // Khoảng cách giữa chữ và đồng hồ
	},
	viewAllContainer: {
		justifyContent: "center", // Căn giữa cho nút "Xem tất cả"
	},
	viewAll: {
		fontSize: 14,
		color: "#1E90FF",
		fontWeight: "bold",
	},
});

export default FlashDeals;
