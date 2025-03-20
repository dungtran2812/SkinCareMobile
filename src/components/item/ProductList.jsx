import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ stepName }) => {
	const products = {
		"Rửa mặt": [
			{
				name: "Sữa rửa mặt A",
				price: 150000,
				productDiscount: 20,
				image: "https://via.placeholder.com/150",
				brand: "Brand A",
			},
			{
				name: "Sữa rửa mặt B",
				price: 180000,
				productDiscount: 15,
				image: "https://via.placeholder.com/150",
				brand: "Brand B",
			},
			{
				name: "Sữa rửa mặt C",
				price: 170000,
				productDiscount: 10,
				image: "https://via.placeholder.com/150",
				brand: "Brand C",
			},
		],
		"Tẩy trang": [
			{
				name: "Tẩy trang C",
				price: 200000,
				productDiscount: 25,
				image: "https://via.placeholder.com/150",
				brand: "Brand C",
			},
			{
				name: "Tẩy trang D",
				price: 250000,
				productDiscount: 10,
				image: "https://via.placeholder.com/150",
				brand: "Brand D",
			},
		],
	};

	return (
		<View>
			<Text style={styles.productTitle}>
				Sản phẩm gợi ý cho bước: {stepName}
			</Text>
			<FlatList
				data={products[stepName] || []}
				renderItem={({ item }) => <ProductItem product={item} />}
				keyExtractor={(item, index) => index.toString()}
				horizontal={true} // Cuộn ngang
				showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
				contentContainerStyle={{
					paddingHorizontal: 10, // Căn lề hai bên
					gap: 10, // Giảm khoảng cách giữa các card
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	productTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginVertical: 10,
	},
	cardContainer: {
		width: 150, // Định nghĩa kích thước cụ thể
		marginRight: 10, // Khoảng cách giữa các card
	},
});

export default ProductList;
