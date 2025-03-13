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
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");

const FlashDeals = () => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("FlashDeals");
	};

	// Dữ liệu giả cho sản phẩm
	const products = [
		{
			id: 1,
			name: "Bioderma Cicabio Creme",
			originalPrice: 385000,
			discount: 20,
			image: {
				uri: "https://bizweb.dktcdn.net/100/443/867/products/kem-duong-phuc-hoi-bioderma-cicabio-40ml.png?v=1695090777257",
			},
			tag: "Da dầu",
		},
		{
			id: 2,
			name: "Uriage Thermal Water 300ml",
			originalPrice: 305000,
			discount: 10,
			image: {
				uri: "https://product.hstatic.net/200000551679/product/untitled_design__1__3e45e226b2514d6883fdfa77830913c9.png",
			},
			tag: "Da khô",
		},
		{
			id: 3,
			name: "La Roche-Posay Anthelios Gel-Cream",
			originalPrice: 320000,
			discount: 15,
			image: {
				uri: "https://file.hstatic.net/200000868185/file/1_9a98b940f78a476890550d392bd4aeac.png",
			},
			tag: "Da dầu",
		},
		{
			id: 4,
			name: "Kem Chống Nắng d'Alba Nâng Tông Tím  ",
			originalPrice: 485000,
			discount: 10,
			image: {
				uri: "https://product.hstatic.net/200000150709/product/4_73363329a10c4195aa66439eb8827039.png",
			},
			tag: "Da thường",
		},
		{
			id: 5,
			name: "Kem Dưỡng La Roche-Posay",
			originalPrice: 50,
			discount: 10,
			image: {
				uri: "https://product.hstatic.net/200000775601/product/screen_shot_2023-11-21_at_17.25.39_f2f48f8023f74601a3d7e04a2052d325.png",
			},
			tag: "Da khô",
		},
		{
			id: 6,
			name: "Nước Hoa Hồng Dr.Pepti",
			originalPrice: 270000,
			discount: 15,
			image: {
				uri: "https://hasaki.vn/_next/image?url=https%3A%2F%2Fmedia.hcdn.vn%2Fcatalog%2Fproduct%2Fn%2Fu%2Fnuoc-hoa-hong-dr-pepti-cap-am-cang-bong-da-180ml-3-1720150702.jpg&w=3840&q=75",
			},
			tag: "Da thường",
		},
		{
			id: 7,
			name: "Tẩy Tế Bào Chết Eucerin ",
			originalPrice: 320000,
			discount: 10,
			image: {
				uri: "https://bizweb.dktcdn.net/thumb/1024x1024/100/482/555/products/thiet-ke-chua-co-ten-25-040b26a7-35a5-403f-af81-9dadf5aacf45.png?v=1719570833297",
			},
			tag: "Da dầu",
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
