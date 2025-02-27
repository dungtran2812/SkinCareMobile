// BrandHeader.js
import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Dimensions,
} from "react-native";
import BrandCard from "./BrandCard"; // Import BrandCard component

const { width } = Dimensions.get("window");

const brands = [
	{ id: 1, image: "brand1" },
	{ id: 2, image: "brand2" },
	{ id: 3, image: "brand3" },
	{ id: 4, image: "brand4" },
	{ id: 5, image: "brand5" },
	{ id: 6, image: "brand6" },
	{ id: 7, image: "brand7" },
	{ id: 8, image: "brand8" },
	{ id: 9, image: "brand9" },
	{ id: 10, image: "brand10" },
];

const BrandHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Thương Hiệu</Text>
				<TouchableOpacity>
					<Text style={styles.viewAll}>Xem tất cả</Text>
				</TouchableOpacity>
			</View>

			{/* Hiển thị các logo thương hiệu */}
			<FlatList
				data={brands}
				renderItem={({ item }) => <BrandCard brand={item} />}
				keyExtractor={(item) => item.id.toString()}
				horizontal // Lướt ngang
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		backgroundColor: "#FFFFFF", // Nền màu trắng cho Brand
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between", // Căn đều các phần tử
		alignItems: "center", // Căn giữa các phần tử theo chiều dọc
		width: width - 20,
		marginBottom: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	viewAll: {
		fontSize: 14,
		color: "#1E90FF",
		fontWeight: "bold",
	},
});

export default BrandHeader;
