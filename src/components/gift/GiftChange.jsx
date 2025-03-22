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
		name: "Bộ cọ trang điểm",
		points: 1000,
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftiki.vn%2Fbo-co-trang-diem-make-up-10-chi-tiet-dung-cu-trang-diem-ca-nhan-kem-hop-dung-sang-trong-p141935372.html&psig=AOvVaw2HOsuOOeKr5ZPVvUbc3UWi&ust=1742715271325000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNC5i7iWnYwDFQAAAAAdAAAAABAJ",
		description: "Bộ dụng cụ trang điểm cao cấp",
	},
	{
		id: "2",
		name: "Kem dưỡng ẩm Beaute",
		points: 2000,
		image: "https://via.placeholder.com/100",
		description: "Kem dưỡng ẩm chuyên sâu, giữ ẩm 24h",
	},
	{
		id: "3",
		name: "Serum Beaute",
		points: 3000,
		image: "https://via.placeholder.com/100",
		description: "Serum dưỡng da chống lão hóa",
	},
];

const GiftChange = () => {
	const navigation = useNavigation();

	const renderItem = ({ item }) => (
		<View style={styles.giftCard}>
			<Image source={{ uri: item.image }} style={styles.giftImage} />
			<View style={styles.giftContent}>
				<View style={styles.giftInfo}>
					<View style={styles.nameContainer}>
						<Text style={styles.giftName}>{item.name}</Text>
						<View style={styles.pointsBadge}>
							<Ionicons name="star" size={14} color="#FF9800" />
							<Text style={styles.pointsBadgeText}>
								{item.points}
							</Text>
						</View>
					</View>
					<Text style={styles.giftDescription}>
						{item.description}
					</Text>
				</View>

				<TouchableOpacity style={styles.exchangeButton}>
					<Text style={styles.exchangeButtonText}>Đổi quà ngay</Text>
					<Ionicons name="arrow-forward" size={18} color="#fff" />
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<Ionicons name="arrow-back" size={24} color="#1E3A5F" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Đổi quà tặng</Text>
			</View>

			<FlatList
				data={gifts}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.giftList}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	backButton: {
		padding: 5,
	},
	headerTitle: {
		flex: 1,
		fontSize: 18,
		fontWeight: "600",
		color: "#1E3A5F",
		textAlign: "center",
		marginRight: 34,
	},
	giftList: {
		padding: 15,
	},
	giftCard: {
		backgroundColor: "#fff",
		borderRadius: 12,
		marginBottom: 15,
		overflow: "hidden",
		borderWidth: 1,
		borderColor: "#f0f0f0",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	giftImage: {
		width: "100%",
		height: 180,
		resizeMode: "cover",
	},
	giftContent: {
		padding: 15,
	},
	giftInfo: {
		marginBottom: 15,
	},
	nameContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 8,
	},
	giftName: {
		fontSize: 16,
		fontWeight: "600",
		color: "#1E3A5F",
		flex: 1,
	},
	pointsBadge: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFF3E0",
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 12,
		gap: 4,
	},
	pointsBadgeText: {
		fontSize: 13,
		color: "#FF9800",
		fontWeight: "600",
	},
	giftDescription: {
		fontSize: 14,
		color: "#666",
		lineHeight: 20,
	},
	exchangeButton: {
		backgroundColor: "#1E3A5F",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		borderRadius: 8,
		gap: 8,
	},
	exchangeButtonText: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "600",
	},
});

export default GiftChange;
