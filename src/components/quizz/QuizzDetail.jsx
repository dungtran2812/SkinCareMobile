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
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerTitle}>Chi tiết kết quả</Text>
				</View>
			</View>

			<ScrollView style={styles.content}>
				<View style={styles.resultSection}>
					<Text style={styles.date}>Ngày kiểm tra: {date}</Text>
					<Text style={styles.skinType}>
						Kết quả: {result.skinType}
					</Text>
					<Text style={styles.points}>
						Tổng điểm: {result.points}
					</Text>
				</View>

				<View style={styles.detailSection}>
					<Text style={styles.sectionTitle}>Chi tiết</Text>
					<Text style={styles.detailText}>
						Nguyên nhân: {result.cause}
					</Text>
					<Text style={styles.detailText}>
						Dấu hiệu: {result.symptom}
					</Text>
					<Text style={styles.detailText}>
						Cách điều trị: {result.treatment}
					</Text>
				</View>

				<View style={styles.answersSection}>
					<Text style={styles.sectionTitle}>Câu trả lời của bạn</Text>
					{answers.map((item, index) => (
						<View key={index} style={styles.answerCard}>
							<Text style={styles.question}>{item.question}</Text>
							<Text style={styles.answer}>
								Trả lời: {item.answer}
							</Text>
							<Text style={styles.point}>Điểm: {item.point}</Text>
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
	content: {
		flex: 1,
		padding: 15,
	},
	resultSection: {
		backgroundColor: "#f5f5f5",
		padding: 15,
		borderRadius: 10,
		marginBottom: 20,
	},
	date: {
		fontSize: 16,
		color: "#666",
	},
	skinType: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1E3A5F",
		marginTop: 5,
	},
	points: {
		fontSize: 16,
		color: "#666",
		marginTop: 5,
	},
	detailSection: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1E3A5F",
		marginBottom: 10,
	},
	detailText: {
		fontSize: 16,
		color: "#333",
		marginBottom: 8,
	},
	answersSection: {
		padding: 20,
	},
	answerCard: {
		backgroundColor: "#f5f5f5",
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
	},
	question: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#333",
	},
	answer: {
		fontSize: 15,
		color: "#666",
		marginTop: 5,
	},
	point: {
		fontSize: 14,
		color: "#1E3A5F",
		marginTop: 5,
	},
});

export default QuizzDetail;
