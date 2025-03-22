import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	ScrollView,
	SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import ProductItem from "../components/item/ProductItem";
import { useNavigation } from "@react-navigation/native";

const SuggestScreen = () => {
	const [selectedCategory, setSelectedCategory] = useState("Tất cả");
	const [selectedSkinType, setSelectedSkinType] = useState("Tất cả");
	const [selectedPriceRange, setSelectedPriceRange] = useState("Tất cả");

	const categories = [
		"Tất cả",
		"Sữa rửa mặt",
		"Toner",
		"Serum",
		"Kem dưỡng",
		"Kem chống nắng",
		"Mặt nạ",
	];

	const skinTypes = [
		"Tất cả",
		"Da dầu",
		"Da khô",
		"Da hỗn hợp",
		"Da nhạy cảm",
	];

	const priceRanges = [
		"Tất cả",
		"Dưới 200k",
		"200k - 500k",
		"500k - 1000k",
		"Trên 1000k",
	];

	const products = [
		{
			id: 1,
			name: "Bioderma Cicabio Creme",
			brand: "Bioderma",
			price: 385000,
			productDiscount: 20,
			image: "https://bizweb.dktcdn.net/100/443/867/products/kem-duong-phuc-hoi-bioderma-cicabio-40ml.png?v=1695090777257",
			category: "Kem dưỡng",
			skinType: "Da dầu",
		},
		{
			id: 2,
			name: "Uriage Thermal Water 300ml",
			brand: "Uriage",
			price: 305000,
			productDiscount: 10,
			image: "https://product.hstatic.net/200000551679/product/untitled_design__1__3e45e226b2514d6883fdfa77830913c9.png",
			category: "Xịt khoáng",
			skinType: "Da khô",
		},
		// Thêm các sản phẩm khác từ data của bạn
	];

	const filterProducts = () => {
		return products.filter((product) => {
			const matchCategory =
				selectedCategory === "Tất cả" ||
				product.category === selectedCategory;
			const matchSkinType =
				selectedSkinType === "Tất cả" ||
				product.skinType === selectedSkinType;

			let matchPrice = true;
			const price = product.price * (1 - product.productDiscount / 100);

			switch (selectedPriceRange) {
				case "Dưới 200k":
					matchPrice = price < 200000;
					break;
				case "200k - 500k":
					matchPrice = price >= 200000 && price <= 500000;
					break;
				case "500k - 1000k":
					matchPrice = price > 500000 && price <= 1000000;
					break;
				case "Trên 1000k":
					matchPrice = price > 1000000;
					break;
			}

			return (
				matchCategory &&
				matchSkinType &&
				(selectedPriceRange === "Tất cả" || matchPrice)
			);
		});
	};

	const renderFilterSection = (
		title,
		options,
		selectedValue,
		setSelectedValue
	) => (
		<View style={styles.filterSection}>
			<Text style={styles.filterTitle}>{title}</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.filterOptions}>
					{options.map((option) => (
						<TouchableOpacity
							key={option}
							style={[
								styles.filterButton,
								selectedValue === option &&
									styles.selectedFilterButton,
							]}
							onPress={() => setSelectedValue(option)}
						>
							<Text
								style={[
									styles.filterButtonText,
									selectedValue === option &&
										styles.selectedFilterButtonText,
								]}
							>
								{option}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<View style={styles.filtersContainer}>
				{renderFilterSection(
					"Danh mục",
					categories,
					selectedCategory,
					setSelectedCategory
				)}
				{renderFilterSection(
					"Loại da",
					skinTypes,
					selectedSkinType,
					setSelectedSkinType
				)}
				{renderFilterSection(
					"Giá",
					priceRanges,
					selectedPriceRange,
					setSelectedPriceRange
				)}
			</View>

			<FlatList
				data={filterProducts()}
				renderItem={({ item }) => <ProductItem product={item} />}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				contentContainerStyle={styles.productList}
				columnWrapperStyle={styles.productRow}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	filtersContainer: {
		paddingVertical: 10,
	},
	filterSection: {
		marginBottom: 15,
	},
	filterTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#1E3A5F",
		marginLeft: 15,
		marginBottom: 10,
	},
	filterOptions: {
		flexDirection: "row",
		paddingHorizontal: 10,
	},
	filterButton: {
		backgroundColor: "#f5f5f5",
		paddingHorizontal: 15,
		paddingVertical: 8,
		borderRadius: 20,
		marginHorizontal: 5,
		borderWidth: 1,
		borderColor: "#E0E0E0",
	},
	selectedFilterButton: {
		backgroundColor: "#1E3A5F",
		borderColor: "#1E3A5F",
	},
	filterButtonText: {
		color: "#666",
		fontSize: 14,
	},
	selectedFilterButtonText: {
		color: "#fff",
		fontWeight: "500",
	},
	productList: {
		padding: 6,
	},
	productRow: {
		justifyContent: "space-between",
		paddingHorizontal: 5,
	},
});

export default SuggestScreen;
