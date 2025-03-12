import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import { useNavigation } from "@react-navigation/native";

const gifts = [
	{
		id: "1",
		name: "Quà tặng 1",
		points: 100,
		image: "https://via.placeholder.com/100",
	},
	{
		id: "2",
		name: "Quà tặng 2",
		points: 200,
		image: "https://via.placeholder.com/100",
	},
	{
		id: "3",
		name: "Quà tặng 3",
		points: 300,
		image: "https://via.placeholder.com/100",
	},
];

const GiftChange = () => {
	const navigation = useNavigation();

	const renderItem = ({ item }) => (
		<View style={styles.giftItem}>
			<Image source={{ uri: item.image }} style={styles.giftImage} />
			<View style={styles.giftDetails}>
				<Text style={styles.giftName}>{item.name}</Text>
				<Text style={styles.giftPoints}>{item.points} điểm</Text>
				<TouchableOpacity style={styles.exchangeButton}>
					<Text style={styles.buttonText}>Đổi quà</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons
						name="arrow-back-outline"
						size={24}
						color="#000"
					/>
				</TouchableOpacity>
				<Text style={styles.title}>Đổi quà</Text>
			</View>
			<FlatList
				data={gifts}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.giftList}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 15,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		marginLeft: 10,
	},
	giftList: {
		paddingBottom: 20,
	},
	giftItem: {
		flexDirection: "row",
		marginBottom: 20,
		backgroundColor: "#f9f9f9",
		borderRadius: 8,
		padding: 10,
	},
	giftImage: {
		width: 100,
		height: 100,
		borderRadius: 8,
		marginRight: 10,
	},
	giftDetails: {
		flex: 1,
		justifyContent: "center",
	},
	giftName: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 5,
	},
	giftPoints: {
		fontSize: 16,
		color: "#666",
		marginBottom: 10,
	},
	exchangeButton: {
		backgroundColor: "#1E90FF",
		padding: 10,
		borderRadius: 8,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default GiftChange;
