import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import ProductItem from "./item/ProductItem"; // Import ProductItem component
import { useNavigation } from "@react-navigation/native";
import { useGetAllProductsQuery } from "../services/skincare.service";

const { width } = Dimensions.get("window");

const Suggest = () => {
	const navigation = useNavigation();
	const { data: products, isLoading, isError } = useGetAllProductsQuery(); // Use the query hook

	if (isLoading) {
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		);
	}

	if (isError) {
		return (
			<View style={styles.container}>
				<Text>Error loading products.</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Gợi ý</Text>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("MainTabNavigator", {
							screen: "Đề xuất",
						})
					}
				>
					<Text style={styles.viewAllText}>Xem tất cả</Text>
				</TouchableOpacity>
			</View>

			{/* Hiển thị danh sách sản phẩm */}
			<FlatList
				data={products.data} // Use the fetched data
				renderItem={({ item }) => <ProductItem product={item} />}
				keyExtractor={(item) => item._id}
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
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	viewAllText: {
		fontSize: 14,
		color: "#1E90FF",
		fontWeight: "bold",
	},
	productList: {
		paddingHorizontal: 10,
		paddingBottom: 20,
	},
});

export default Suggest;
