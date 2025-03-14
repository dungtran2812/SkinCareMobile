import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import ProductItem from "../item/ProductItem"; // Import ProductItem component
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const ProductFavourite = () => {
	const navigation = useNavigation();
	const [favouriteProducts, setFavouriteProducts] = useState([]);

	useEffect(() => {
		const fetchFavourites = async () => {
			try {
				let favourites = await AsyncStorage.getItem("favourites");
				favourites = favourites ? JSON.parse(favourites) : [];
				setFavouriteProducts(favourites);
			} catch (error) {
				console.error("Error fetching favourites", error);
			}
		};

		fetchFavourites();
	}, []);

	const renderProduct = ({ item }) => (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("ProductItemDetail", { product: item })
				}
				style={styles.productItem}
			>
				<ProductItem product={item} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.heartIcon}>
				<FontAwesome name="heart" size={24} color="red" />
			</TouchableOpacity>
		</View>
	);

	return (
		<View style={styles.container}>
			{favouriteProducts.length === 0 ? (
				<Text style={styles.emptyText}>
					Bạn chưa có sản phẩm nào yêu thích
				</Text>
			) : (
				<FlatList
					data={favouriteProducts}
					renderItem={renderProduct}
					keyExtractor={(item) => item.id.toString()}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
	},
	emptyText: {
		fontSize: 18,
		color: "#888",
		textAlign: "center",
		marginTop: 20,
	},
	productItem: {
		flex: 1,
		marginBottom: 20,
	},
	heartIcon: {
		position: "absolute",
		top: 10,
		right: 10,
		backgroundColor: "rgba(255, 255, 255, 0.7)",
		borderRadius: 15,
		padding: 5,
	},
});

export default ProductFavourite;
