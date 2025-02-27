// NotificationScreen.js
import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	FlatList,
} from "react-native";
import PromotionCard from "../components/promotion/PromotionCard"; // Import component PromotionCard
import { promotionData } from "../components/promotion/PromotionData"; // Import dữ liệu giả lập

export default function NotificationScreen() {
	const [activeTab, setActiveTab] = useState("promotions"); // Quản lý tab hiện tại

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.title}>Thông báo</Text>
			</View>

			{/* Tab buttons */}
			<View style={styles.tabsContainer}>
				<TouchableOpacity
					style={[
						styles.tab,
						activeTab === "promotions" && styles.activeTab,
					]}
					onPress={() => handleTabChange("promotions")}
				>
					<Text style={styles.tabText}>Khuyến mãi</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.tab,
						activeTab === "userNotifications" && styles.activeTab,
					]}
					onPress={() => handleTabChange("userNotifications")}
				>
					<Text style={styles.tabText}>Của bạn</Text>
				</TouchableOpacity>
			</View>

			{/* Content */}
			<ScrollView style={styles.contentContainer}>
				{activeTab === "promotions" ? (
					<FlatList
						data={promotionData}
						renderItem={({ item }) => (
							<PromotionCard content={item} />
						)}
						keyExtractor={(item) => item.id.toString()}
					/>
				) : (
					<View style={styles.content}>
						<Text style={styles.contentTitle}>
							Thông báo của bạn
						</Text>
						<Text>
							Bạn có một tin nhắn mới từ bộ phận hỗ trợ khách
							hàng.
						</Text>
						<Text>
							Đơn hàng #12345 của bạn đã được giao thành công!
						</Text>
					</View>
				)}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		backgroundColor: "#B3E5FC", // Màu xanh cho header
		paddingVertical: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000", // Chữ màu đen
	},
	tabsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "#f0f0f0",
	},
	tab: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 10,
	},
	tabText: {
		fontSize: 16,
		color: "#000",
	},
	activeTab: {
		backgroundColor: "#B3E5FC", // Màu nền khi tab đang được chọn
		borderRadius: 5,
	},
	contentContainer: {
		flex: 1,
		padding: 20,
	},
	content: {
		paddingBottom: 20,
	},
	contentTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
});
