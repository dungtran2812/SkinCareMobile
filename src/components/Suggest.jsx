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
				uri: "https://media.hcdn.vn/catalog/product/g/o/google-shopping-kem-chong-nang-vichy-thoang-nhe-khong-bong-dau-spf-50-50ml-1721901209.jpg",
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
			name: "Nước Tẩy Trang Garnier Micellar Cleansing Water For Oily & Acne-Prone Skin New",
			brand: "Garnier",
			originalPrice: 150000,
			discount: 10,
			image: {
				uri: "https://product.hstatic.net/200000124701/product/ml_nuoc_tay_trang_danh_cho_da_dau_va_da_mun_7325_63f3_large_210157a7df_cbeb32de9cb64ade8fe070c9ac6a6966_master.jpg",
			},
			rating: 4.2,
			monthlySales: 200,
		},
		{
			id: 4,
			name: "Nước Tẩy Trang La Roche-Posay Toleriane Eau Micellar Water",
			brand: "La Roche-Posay",
			originalPrice: 370000,
			discount: 10,
			image: {
				uri: "https://medias.watsons.vn/publishing/WTCVN-200472-extra2-zoom.jpg?version=1740753834",
			},
			rating: 4.2,
			monthlySales: 100,
		},
		{
			id: 5,
			name: "Nước Tẩy Trang Hatomugi Reihaku Hatomugi Cleansing Lotion",
			brand: "Hatomugi",
			originalPrice: 140000,
			discount: 10,
			image: {
				uri: "https://bizweb.dktcdn.net/thumb/1024x1024/100/462/815/products/335121298-212736558091000-4388374225722011663-n.jpg?v=1687784833850",
			},
			rating: 4.2,
			monthlySales: 100,
		},
		{
			id: 6,
			name: "Kem Dưỡng Ẩm Klairs Midnight Blue Calming Cream",
			brand: "Klairs",
			originalPrice: 350000,
			discount: 20,
			image: {
				uri: "https://bizweb.dktcdn.net/100/141/194/products/z3659869425001-e9a9e03e1ae24d290f0543ed09f29602.jpg?v=1661053694067",
			},
			rating: 4.2,
			monthlySales: 100,
		},
		{
			id: 7,
			name: "Serum GoodnDoc Hydra B5 Serum",
			brand: "GoodnDoc",
			originalPrice: 400000,
			discount: 15,
			image: {
				uri: "https://product.hstatic.net/1000134629/product/z4226643852963_e0b422b4b40247ee71266d9bf59378a5_bef2a94c7f8044e3958fe850722e59ea.jpg",
			},
			rating: 4.2,
			monthlySales: 100,
		},
		{
			id: 8,
			name: "Xịt Khoáng Evoluderm Pure Water Atomizer",
			brand: "Evoluderm",
			originalPrice: 150000,
			discount: 10,
			image: {
				uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx6cpk8nb4d7bd",
			},
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
				numColumns={2}
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
