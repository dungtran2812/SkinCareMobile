import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import QuickAccess from "../components/QuickAccess";
import FlashDeals from "../components/FlashDeals";
import CategoryHeader from "../components/category/CategoryHeader";
import BrandHeader from "../components/brand/BrandHeader";

export default function HomeScreen() {
	return (
		<ScrollView style={styles.container}>
			<Header />
			<Carousel />
			<QuickAccess />
			<FlashDeals />
			<CategoryHeader />
			<BrandHeader />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20, // Khoảng cách dưới để tránh text bị dính vào đáy
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#1E3A5F",
	},
});
