// Suggest.js
import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import ProductItem from "./item/ProductItem"; // Import ProductItem component

const { width } = Dimensions.get("window");

const Suggest = () => {
	// Dữ liệu giả cho các sản phẩm
	const products = [
		{
			id: 1,
			name: "Kem Chống Nắng Vichy Thoáng Nhẹ Không Bóng Dầu SPF 50",
			brand: "Vichy",
			originalPrice: 369000,
			discount: 20,
			image: {
				uri: "https://product.hstatic.net/200000775601/product/screen_shot_2024-04-03_at_15.01.39_2e9c74771b6b4e07b9689094686841fe.png",
			},
			rating: 4.5,
			monthlySales: 150,
		},
		{
			id: 2,
			name: "Sữa Rửa Mặt Cocoon Chiết Xuất Từ Nghệ Hưng Yên 310ml",
			brand: "Cocoon",
			originalPrice: 236000,
			discount: 15,
			image: {
				uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tUWyim4_BX4oCefE60oKl3razi12Vo8PXg&s",
			},
			rating: 4.8,
			monthlySales: 200,
		},
		{
			id: 3,
			name: "Toner C",
			brand: "Thương hiệu C",
			originalPrice: 150000,
			discount: 10,
			image: { uri: "https://via.placeholder.com/150" },
			rating: 4.2,
			monthlySales: 100,
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Gợi ý</Text>
			</View>

			{/* Hiển thị danh sách sản phẩm */}
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductItem product={item} />}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2} // 2 cột
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.productList}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		backgroundColor: "#FFFFFF",
	},
	header: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	productList: {
		paddingHorizontal: 10,
		paddingBottom: 20,
	},
});

export default Suggest;
