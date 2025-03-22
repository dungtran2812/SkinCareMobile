import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const QuizzHistory = () => {
	const navigation = useNavigation();

	// Sửa lại cấu trúc dữ liệu mẫu để đồng nhất
	const historyData = [
		{
			id: "1",
			date: "20/03/2024",
			result: {
				skinType: "Da hỗn hợp thiên dầu",
				points: 35,
				cause: "Tuyến bã nhờn hoạt động mạnh ở vùng chữ T, nhưng hai bên má lại khô hơn.",
				symptom: "Vùng chữ T dễ bị bóng dầu, đặc biệt vào cuối ngày...",
				treatment:
					"Sử dụng sữa rửa mặt dịu nhẹ giúp làm sạch mà không làm mất cân bằng độ ẩm...",
			},
			answers: [
				{
					question: "Da bạn có xu hướng bóng dầu ở vùng nào?",
					answer: "Vùng chữ T (trán, mũi, cằm)",
					point: 8,
				},
				{
					question: "Kích thước lỗ chân lông của bạn như thế nào?",
					answer: "To ở vùng chữ T, nhỏ ở hai má",
					point: 7,
				},
				{
					question: "Tình trạng da của bạn vào cuối ngày?",
					answer: "Dầu ở vùng T, khô ở hai má",
					point: 10,
				},
			],
		},
		{
			id: "2",
			date: "15/02/2024",
			result: {
				skinType: "Da khô",
				points: 25,
				cause: "Thiếu độ ẩm và dầu tự nhiên",
				symptom: "Da căng, khô ráp, dễ bong tróc...",
				treatment: "Sử dụng sản phẩm dưỡng ẩm đậm đặc...",
			},
			answers: [
				{
					question: "Độ ẩm của da bạn như thế nào?",
					answer: "Da thường xuyên khô và căng",
					point: 8,
				},
				{
					question: "Da bạn có hay bị bong tróc không?",
					answer: "Thường xuyên bị bong tróc",
					point: 7,
				},
			],
		},
		{
			id: "3",
			date: "10/01/2024",
			result: {
				skinType: "Da dầu",
				points: 40,
				cause: "Tuyến bã nhờn hoạt động quá mức",
				symptom: "Da bóng nhờn, lỗ chân lông to...",
				treatment: "Sử dụng sản phẩm kiểm soát dầu...",
			},
			answers: [
				{
					question: "Tình trạng dầu trên da như thế nào?",
					answer: "Da rất dầu, nhất là vào giữa ngày",
					point: 10,
				},
				{
					question: "Bạn có hay bị mụn không?",
					answer: "Thường xuyên bị mụn",
					point: 8,
				},
			],
		},
	];

	const handleViewDetail = (item) => {
		navigation.navigate("QuizzDetail", item);
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.historyCard}
			onPress={() => handleViewDetail(item)}
		>
			<View style={styles.cardHeader}>
				<View style={styles.dateContainer}>
					<Icon name="calendar-outline" size={16} color="#1E3A5F" />
					<Text style={styles.date}>{item.date}</Text>
				</View>
				<View style={styles.pointsContainer}>
					<Text style={styles.points}>{item.result.points} điểm</Text>
				</View>
			</View>

			<View style={styles.cardContent}>
				<View style={styles.skinTypeContainer}>
					<Text style={styles.skinTypeLabel}>Loại da của bạn</Text>
					<Text style={styles.skinType}>{item.result.skinType}</Text>
				</View>

				<View style={styles.answersInfo}>
					<Icon name="list-outline" size={16} color="#666" />
					<Text style={styles.answersCount}>
						{item.answers.length} câu trả lời
					</Text>
				</View>
			</View>

			<View style={styles.viewButtonContainer}>
				<Text style={styles.viewButtonText}>Xem chi tiết</Text>
				<Icon name="chevron-forward" size={20} color="#1E3A5F" />
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<Icon name="arrow-back" size={24} color="#1E3A5F" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Lịch sử kiểm tra da</Text>
			</View>

			<FlatList
				data={historyData}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.listContainer}
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
	listContainer: {
		padding: 15,
	},
	historyCard: {
		backgroundColor: "#fff",
		borderRadius: 12,
		marginBottom: 15,
		padding: 15,
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
	cardHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
	},
	dateContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	date: {
		fontSize: 14,
		color: "#1E3A5F",
		fontWeight: "500",
	},
	pointsContainer: {
		backgroundColor: "#E3F2FD",
		paddingHorizontal: 12,
		paddingVertical: 4,
		borderRadius: 12,
	},
	points: {
		color: "#1E3A5F",
		fontSize: 14,
		fontWeight: "500",
	},
	cardContent: {
		marginBottom: 15,
	},
	skinTypeContainer: {
		marginBottom: 10,
	},
	skinTypeLabel: {
		fontSize: 13,
		color: "#666",
		marginBottom: 4,
	},
	skinType: {
		fontSize: 16,
		color: "#1E3A5F",
		fontWeight: "600",
	},
	answersInfo: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	answersCount: {
		fontSize: 14,
		color: "#666",
	},
	viewButtonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		paddingTop: 10,
		borderTopWidth: 1,
		borderTopColor: "#f0f0f0",
	},
	viewButtonText: {
		fontSize: 14,
		color: "#1E3A5F",
		fontWeight: "500",
		marginRight: 5,
	},
});

export default QuizzHistory;
