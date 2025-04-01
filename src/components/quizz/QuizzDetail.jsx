import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const QuizzDetail = ({ route }) => {
	const navigation = useNavigation();
	const { date, result, answers } = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<Icon name="arrow-back" size={24} color="#1E3A5F" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Chi tiết kết quả</Text>
			</View>

			<ScrollView
				style={styles.content}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.resultCard}>
					<View style={styles.dateContainer}>
						<Icon name="calendar-outline" size={16} color="#666" />
						<Text style={styles.date}>{date}</Text>
					</View>

					<View style={styles.resultInfo}>
						<Text style={styles.skinType}>{result.skinType}</Text>
						<View style={styles.pointsContainer}>
							<Text style={styles.points}>
								{result.points} điểm
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Phân tích chi tiết</Text>
					<View style={styles.detailItem}>
						<Text style={styles.detailLabel}>Nguyên nhân</Text>
						<Text style={styles.detailText}>{result.cause}</Text>
					</View>
					<View style={styles.detailItem}>
						<Text style={styles.detailLabel}>Dấu hiệu</Text>
						<Text style={styles.detailText}>{result.symptom}</Text>
					</View>
					<View style={styles.detailItem}>
						<Text style={styles.detailLabel}>Cách điều trị</Text>
						<Text style={styles.detailText}>
							{result.treatment}
						</Text>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Câu trả lời của bạn</Text>
					{answers.map((item, index) => (
						<View key={index} style={styles.answerCard}>
							<Text style={styles.questionText}>
								{item.question}
							</Text>
							<View style={styles.answerInfo}>
								<Text style={styles.answerText}>
									{item.answer}
								</Text>
								<View style={styles.answerPoints}>
									<Text style={styles.answerPointsText}>
										{item.point} điểm
									</Text>
								</View>
							</View>
						</View>
					))}
				</View>
			</ScrollView>
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
	content: {
		flex: 1,
		padding: 15,
	},
	resultCard: {
		backgroundColor: "#fff",
		borderRadius: 12,
		padding: 15,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: "#f0f0f0",
	},
	dateContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
		marginBottom: 10,
	},
	date: {
		fontSize: 14,
		color: "#666",
	},
	resultInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	skinType: {
		fontSize: 18,
		fontWeight: "600",
		color: "#1E3A5F",
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
	section: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#1E3A5F",
		marginBottom: 15,
	},
	detailItem: {
		marginBottom: 15,
	},
	detailLabel: {
		fontSize: 14,
		color: "#666",
		marginBottom: 5,
	},
	detailText: {
		fontSize: 15,
		color: "#333",
		lineHeight: 22,
	},
	answerCard: {
		backgroundColor: "#fff",
		borderRadius: 12,
		padding: 15,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#f0f0f0",
	},
	questionText: {
		fontSize: 15,
		fontWeight: "500",
		color: "#1E3A5F",
		marginBottom: 10,
	},
	answerInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	answerText: {
		flex: 1,
		fontSize: 14,
		color: "#666",
		marginRight: 10,
	},
	answerPoints: {
		backgroundColor: "#E3F2FD",
		paddingHorizontal: 10,
		paddingVertical: 3,
		borderRadius: 10,
	},
	answerPointsText: {
		fontSize: 13,
		color: "#1E3A5F",
		fontWeight: "500",
	},
});

export default QuizzDetail;
