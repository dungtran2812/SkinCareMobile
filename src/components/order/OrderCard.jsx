import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const OrderCard = ({ order }) => {
	const { status, products } = order; // Destructuring products array

	const renderStatusOrButtons = () => {
		switch (status) {
			case "newOrders":
				return <Text style={styles.statusText}>Đang chờ xử lý</Text>;
			case "processingOrders":
				return <Text style={styles.statusText}>Đang xử lý</Text>;
			case "successOrders":
				return (
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.buyAgainButton}>
							<Text style={styles.buttonText}>Mua lại</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.reviewButton}>
							<Text style={styles.buttonText}>Đánh giá</Text>
						</TouchableOpacity>
					</View>
				);
			case "canceledOrders":
				return <Text style={styles.statusText}>Đã huỷ</Text>;
			default:
				return null;
		}
	};

	return (
		<View style={styles.card}>
			{/* Tên app */}
			<Text style={styles.appName}>Beauté</Text>

			{/* Thông tin sản phẩm */}
			{products.map((product) => (
				<>
					<View key={product?._id} style={styles.productInfoContainer}>
						<Image
							source={{ uri: product?.image }}
							style={styles.productImage}
						/>
						<View style={styles.productDetails}>
							<Text style={styles.productName}>{product?.productName}</Text>
							<Text style={styles.productBrand}>
								{product?.productBrand}
							</Text>
							<Text style={styles.productQuantity}>
								Số lượng: {product?.quantity}
							</Text>
							<View style={styles.priceContainer}>
								<Text style={styles.oldPrice}>
									{product?.price?.toLocaleString()} VNĐ
								</Text>
								<Text style={styles.newPrice}>
									{(product?.price * (1 - (product?.productDiscount / 100)))?.toLocaleString()} VNĐ
								</Text>
							</View>
						</View>
					</View>
	
				{/* Tổng số tiền */}
				<View style={styles.totalContainer}>
					<Text style={styles.totalText}>
						Tổng số tiền: {product?.totalPriceAfterDiscount?.toLocaleString()} VNĐ
					</Text>
				</View>
				</>
			))}

			{/* Nút mua lại và đánh giá hoặc trạng thái */}
			{renderStatusOrButtons()}
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		padding: 15,
		marginBottom: 10,
		backgroundColor: "#fff", // Nền trắng cho mỗi đơn hàng
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#ddd", // Viền xám
	},
	appName: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1E3A5F",
		marginBottom: 10,
	},
	productInfoContainer: {
		flexDirection: "row",
		marginBottom: 10,
	},
	productImage: {
		width: "30%",
		height: 100,
		borderRadius: 8,
		marginRight: 10,
	},
	productDetails: {
		width: "70%",
		justifyContent: "space-between",
	},
	productName: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
	},
	productBrand: {
		fontSize: 14,
		color: "#666",
		marginBottom: 5,
	},
	productQuantity: {
		fontSize: 14,
		color: "#666",
		marginBottom: 5,
		textAlign: "right",
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	oldPrice: {
		fontSize: 14,
		color: "#999",
		textDecorationLine: "line-through",
		marginRight: 10,
	},
	newPrice: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#E53935",
	},
	totalContainer: {
		marginBottom: 10,
		alignItems: "flex-end",
	},
	totalText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	buyAgainButton: {
		backgroundColor: "#1E3A5F",
		padding: 10,
		borderRadius: 8,
		marginRight: 10,
	},
	reviewButton: {
		backgroundColor: "#E53935",
		padding: 10,
		borderRadius: 8,
	},
	buttonText: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
	},
	statusText: {
		fontSize: 16,
		color: "#666",
		textAlign: "right",
	},
});

export default OrderCard;
