import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({products, stepNumber}) => {
	
	return (
		<View>
			<Text style={styles.productTitle}>
				Sản phẩm gợi ý cho bước: {stepNumber}
			</Text>
			<FlatList
				data={products || []}
				renderItem={(product) => <ProductItem product={product.item} />}
				keyExtractor={(item, index) => item._id}
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
