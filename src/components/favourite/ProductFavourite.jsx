import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ProductItem from "../item/ProductItem"; // Import ProductItem component
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductFavourite = ({ product }) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("ProductItemDetail", { product });
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handlePress} style={styles.productItem}>
				<ProductItem product={product} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.heartIcon}>
				<FontAwesome name="heart" size={24} color="red" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "relative",
		marginBottom: 20,
	},
	productItem: {
		flex: 1,
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
