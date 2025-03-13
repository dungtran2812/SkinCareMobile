import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Dimensions,
} from "react-native";
import Header from "../components/Header";
import ProductItem from "../components/item/ProductItem";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

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
		type: "srm",
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
		type: "xịt khoáng",
	},
	// Thêm các sản phẩm khác
];

const filterOptions = {
	skinTypes: ["Tất cả", "Da dầu", "Da khô", "Da thường", "Da hỗn hợp"],
	productTypes: ["Tất cả", "srm", "tbc", "toner", "xịt khoáng"],
};

export default function SuggestScreen() {
	const [selectedSkinType, setSelectedSkinType] = useState("Tất cả");
	const [selectedProductType, setSelectedProductType] = useState("Tất cả");
	const navigation = useNavigation();

	const handleFilterChange = (type, value) => {
		if (type === "skinType") {
			setSelectedSkinType(value);
		} else if (type === "productType") {
			setSelectedProductType(value);
		}
	};

	const filteredProducts = products.filter((product) => {
		return (
			(selectedSkinType === "Tất cả" ||
				product.tag === selectedSkinType) &&
			(selectedProductType === "Tất cả" ||
				product.type === selectedProductType)
		);
	});

	const renderProduct = ({ item }) => (
		<TouchableOpacity
			style={styles.productContainer}
			onPress={() =>
				navigation.navigate("ProductItemDetail", { product: item })
			}
		>
			<ProductItem product={item} />
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.filterContainer}>
				<Text style={styles.filterTitle}>Loại da:</Text>
				<View style={styles.filterOptions}>
					{filterOptions.skinTypes.map((type) => (
						<TouchableOpacity
							key={type}
							style={[
								styles.filterButton,
								selectedSkinType === type &&
									styles.selectedFilterButton,
							]}
							onPress={() => handleFilterChange("skinType", type)}
						>
							<Text
								style={[
									styles.filterButtonText,
									selectedSkinType === type &&
										styles.selectedFilterButtonText,
								]}
							>
								{type}
							</Text>
						</TouchableOpacity>
					))}
				</View>
				<Text style={styles.filterTitle}>Loại sản phẩm:</Text>
				<View style={styles.filterOptions}>
					{filterOptions.productTypes.map((type) => (
						<TouchableOpacity
							key={type}
							style={[
								styles.filterButton,
								selectedProductType === type &&
									styles.selectedFilterButton,
							]}
							onPress={() =>
								handleFilterChange("productType", type)
							}
						>
							<Text
								style={[
									styles.filterButtonText,
									selectedProductType === type &&
										styles.selectedFilterButtonText,
								]}
							>
								{type}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
			<FlatList
				data={filteredProducts}
				renderItem={renderProduct}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				contentContainerStyle={styles.productList}
				columnWrapperStyle={styles.row} // Thêm dòng này để đảm bảo các cột được căn đều
				key={`${selectedSkinType}-${selectedProductType}`} // Thêm key để buộc FlatList render lại
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	filterContainer: {
		padding: 10,
	},
	filterTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	filterOptions: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: 20,
	},
	filterButton: {
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderRadius: 5,
		marginRight: 10,
		marginBottom: 10,
	},
	selectedFilterButton: {
		backgroundColor: "#1E3A5F",
	},
	filterButtonText: {
		color: "#000",
	},
	selectedFilterButtonText: {
		color: "#fff",
	},
	productList: {
		paddingHorizontal: 10,
	},
	productContainer: {
		flex: 1,
		margin: 5,
	},
	row: {
		justifyContent: "space-between",
	},
});
