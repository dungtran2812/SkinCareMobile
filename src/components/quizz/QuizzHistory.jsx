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
		<TouchableOpacity style={styles.historyCard}>
			<View style={styles.dateContainer}>
				<Text style={styles.date}>{item.date}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.skinType}>
					Loại da: {item.result.skinType}
				</Text>
				<Text style={styles.points}>
					Tổng điểm: {item.result.points}
				</Text>
				<Text style={styles.answersCount}>
					Số câu trả lời: {item.answers.length}
				</Text>
			</View>
			<TouchableOpacity
				style={styles.viewButton}
				onPress={() => handleViewDetail(item)}
			>
				<Text style={styles.viewButtonText}>Xem chi tiết</Text>
			</TouchableOpacity>
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
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerTitle}>Lịch sử kiểm tra da</Text>
					<Text style={styles.headerSubtitle}>
						Các kết quả kiểm tra da của bạn
					</Text>
				</View>
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
		backgroundColor: "#B3E5FC",
		padding: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	backButton: {
		padding: 5,
		marginRight: 10,
	},
	headerTextContainer: {
		flex: 1,
		alignItems: "center",
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#1E3A5F",
	},
	headerSubtitle: {
		fontSize: 16,
		color: "#666",
		marginTop: 5,
	},
	listContainer: {
		padding: 15,
	},
	historyCard: {
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		padding: 15,
		marginBottom: 15,
		elevation: 3,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},
	dateContainer: {
		backgroundColor: "#1E3A5F",
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 10,
		alignSelf: "flex-start",
		marginBottom: 10,
	},
	date: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
	},
	infoContainer: {
		marginBottom: 10,
	},
	skinType: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 5,
	},
	points: {
		fontSize: 14,
		color: "#666",
	},
	viewButton: {
		backgroundColor: "#B3E5FC",
		padding: 8,
		borderRadius: 5,
		alignItems: "center",
	},
	viewButtonText: {
		color: "#1E3A5F",
		fontWeight: "bold",
	},
	answersCount: {
		fontSize: 14,
		color: "#666",
		marginTop: 5,
	},
});

export default QuizzHistory;
