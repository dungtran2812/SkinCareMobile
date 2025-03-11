import React, { useState } from "react";
import {
	View,
	Text,
	Button,
	StyleSheet,
	TouchableOpacity,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Dữ liệu giả lập cho các câu hỏi và câu trả lời
const questions = [
	{
		question:
			"Câu hỏi 1: Bạn cảm thấy da của mình như thế nào vào buổi sáng?",
		options: [
			{ text: "Khô", point: 1 },
			{ text: "Dầu", point: 3 },
			{ text: "Bình thường", point: 2 },
			{ text: "Hỗn hợp", point: 2 },
		],
	},
	{
		question: "Câu hỏi 2: Bạn có cảm thấy da bị bong tróc không?",
		options: [
			{ text: "Có", point: 1 },
			{ text: "Không", point: 3 },
			{ text: "Thỉnh thoảng", point: 2 },
			{ text: "Không rõ", point: 2 },
		],
	},
	{
		question:
			"Câu hỏi 3: Vùng nào trên khuôn mặt bạn thường xuyên bị bóng dầu?",
		options: [
			{ text: "Chỉ T-zone", point: 2 },
			{ text: "Cả mặt", point: 3 },
			{ text: "Chỉ má", point: 1 },
			{ text: "Không có", point: 2 },
		],
	},
	{
		question: "Câu hỏi 4: Da của bạn thường xuyên xuất hiện mụn không?",
		options: [
			{ text: "Có", point: 3 },
			{ text: "Không", point: 1 },
			{ text: "Thỉnh thoảng", point: 2 },
			{ text: "Không rõ", point: 2 },
		],
	},
	{
		question:
			"Câu hỏi 5: Bạn cảm thấy da của mình thế nào sau khi dùng các sản phẩm dưỡng da?",
		options: [
			{ text: "Khô", point: 1 },
			{ text: "Bóng dầu", point: 3 },
			{ text: "Mịn màng", point: 2 },
			{ text: "Vẫn cảm giác nặng nề", point: 2 },
		],
	},
];

const QuizzScreen = () => {
	const navigation = useNavigation();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // To store the answers

	// Handle the answer selection
	const handleSelectAnswer = (index) => {
		const updatedAnswers = [...answers];
		updatedAnswers[currentQuestion] = index;
		setAnswers(updatedAnswers);
	};

	// Handle the next button click
	const handleNext = () => {
		if (answers[currentQuestion] !== null) {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	// Handle the back button click
	const handleBack = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	const handleFinish = () => {
		// Calculate total points based on the answers
		const totalPoints = answers.reduce(
			(sum, answerIndex, questionIndex) => {
				return (
					sum + questions[questionIndex].options[answerIndex].point
				);
			},
			0
		);

		// Tạm thời hiển thị kết quả loại da dựa trên tổng điểm
		let skinType = "";
		if (totalPoints <= 5) {
			skinType = "dry"; // Da khô
		} else if (totalPoints <= 8) {
			skinType = "combination"; // Da hỗn hợp
		} else if (totalPoints <= 11) {
			skinType = "normal"; // Da thường
		} else {
			skinType = "oily"; // Da dầu
		}

		// Điều hướng đến trang QuizzAnswer và truyền loại da
		navigation.navigate("QuizzAnswer", { skinType });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.question}>
				{questions[currentQuestion].question}
			</Text>
			{questions[currentQuestion].options.map((option, index) => (
				<TouchableOpacity
					key={index}
					style={[
						styles.optionButton,
						answers[currentQuestion] === index &&
							styles.selectedOption,
					]}
					onPress={() => handleSelectAnswer(index)}
				>
					<Text style={styles.optionText}>{option.text}</Text>
				</TouchableOpacity>
			))}
			<View style={styles.buttonContainer}>
				<Button
					title="Back"
					onPress={handleBack}
					disabled={currentQuestion === 0}
				/>
				{currentQuestion < questions.length - 1 ? (
					<Button
						title="Next"
						onPress={handleNext}
						disabled={answers[currentQuestion] === null}
					/>
				) : (
					<Button
						title="Hoàn tất"
						onPress={handleFinish}
						disabled={answers[currentQuestion] === null}
					/>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	question: {
		fontSize: 20,
		marginBottom: 20,
		fontWeight: "bold",
	},
	optionButton: {
		padding: 15,
		backgroundColor: "#fff",
		borderRadius: 5,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	selectedOption: {
		backgroundColor: "#d0eaff",
	},
	optionText: {
		fontSize: 16,
	},
	buttonContainer: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default QuizzScreen;
