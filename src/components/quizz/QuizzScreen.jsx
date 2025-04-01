import React, { useState } from "react";
import {
	View,
	Text,
	Button,
	StyleSheet,
	TouchableOpacity,
	Alert,
	ActivityIndicator,
	SafeAreaView,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
	useAnalysisSkinTypeMutation,
	useGetAllQuizQuestionQuery,
} from "../../services/skincare.service";
import { useDispatch } from "react-redux";
import { setSkinType } from "../../feature/authentication";

const QuizzScreen = () => {
	const dispatch = useDispatch();
	const { data: quizData, isLoading, isError } = useGetAllQuizQuestionQuery();
	const [
		analysisSkinType,
		{
			data: analysisData,
			isLoading: analysisLoading,
			isError: analysisError,
		},
	] = useAnalysisSkinTypeMutation();
	const navigation = useNavigation();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState({}); // Key-value store for answers

	if (isLoading)
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color="#1E3A5F" />
				<Text style={styles.loadingText}>Đang tải câu hỏi...</Text>
			</View>
		);

	if (isError)
		return (
			<View style={styles.errorContainer}>
				<Text style={styles.errorText}>
					Có lỗi xảy ra khi tải câu hỏi.
				</Text>
			</View>
		);

	const currentQuestion = quizData[currentQuestionIndex];

	// Handle the answer selection
	const handleSelectAnswer = (index) => {
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[currentQuestion._id]: index, // Use question ID as the key
		}));
	};

	// Handle the next button click
	const handleNext = () => {
		if (answers[currentQuestion._id] !== undefined) {
			// Check if an answer is selected
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	// Handle the back button click
	const handleBack = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	const handleFinish = async () => {
		// Calculate total points based on the answers
		const totalPoints = Object.keys(answers).reduce((sum, questionId) => {
			const answerIndex = answers[questionId];
			if (answerIndex !== undefined) {
				const question = quizData.find((q) => q._id === questionId);
				return sum + question.answers[answerIndex].point;
			}
			return sum; // If no answer is selected, return the current sum
		}, 0);

		const { data } = await analysisSkinType({
			points: totalPoints,
		}).unwrap();
		dispatch(setSkinType(data?.skinType?._id));
		console.log(data.skinType._id);
		// Navigate to the result screen with the determined skin type
		navigation.navigate("QuizzAnswer");
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.progressContainer}>
					<Text style={styles.progressText}>
						Câu hỏi {currentQuestionIndex + 1}/{quizData.length}
					</Text>
					<View style={styles.progressBar}>
						<View
							style={[
								styles.progressFill,
								{
									width: `${
										((currentQuestionIndex + 1) /
											quizData.length) *
										100
									}%`,
								},
							]}
						/>
					</View>
				</View>

				<ScrollView
					style={styles.scrollContent}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.questionContainer}>
						<Text style={styles.questionTitle}>
							{currentQuestion.title}
						</Text>
						<Text style={styles.questionDescription}>
							{currentQuestion.description}
						</Text>
					</View>

					<View style={styles.answersContainer}>
						{currentQuestion.answers.map((option, index) => (
							<TouchableOpacity
								key={option._id}
								style={[
									styles.optionButton,
									answers[currentQuestion._id] === index &&
										styles.selectedOption,
								]}
								onPress={() => handleSelectAnswer(index)}
							>
								<Text
									style={[
										styles.optionText,
										answers[currentQuestion._id] ===
											index && styles.selectedOptionText,
									]}
								>
									{option.text}
								</Text>
							</TouchableOpacity>
						))}
					</View>

					<View style={styles.bottomPadding} />
				</ScrollView>

				<View style={styles.navigationContainer}>
					<View style={styles.navigationButtons}>
						<TouchableOpacity
							style={[
								styles.navButton,
								styles.backButton,
								currentQuestionIndex === 0 &&
									styles.disabledButton,
							]}
							onPress={handleBack}
							disabled={currentQuestionIndex === 0}
						>
							<Text
								style={[
									styles.navButtonText,
									styles.backButtonText,
								]}
							>
								Quay lại
							</Text>
						</TouchableOpacity>

						{currentQuestionIndex < quizData.length - 1 ? (
							<TouchableOpacity
								style={[
									styles.navButton,
									styles.nextButton,
									!answers[currentQuestion._id] &&
										styles.disabledButton,
								]}
								onPress={handleNext}
								disabled={
									answers[currentQuestion._id] === undefined
								}
							>
								<Text
									style={[
										styles.navButtonText,
										styles.nextButtonText,
									]}
								>
									Tiếp theo
								</Text>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								style={[
									styles.navButton,
									styles.finishButton,
									!answers[currentQuestion._id] &&
										styles.disabledButton,
								]}
								onPress={handleFinish}
								disabled={
									answers[currentQuestion._id] === undefined
								}
							>
								<Text
									style={[
										styles.navButtonText,
										styles.nextButtonText,
									]}
								>
									Hoàn thành
								</Text>
							</TouchableOpacity>
						)}
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	loadingText: {
		marginTop: 10,
		color: "#1E3A5F",
		fontSize: 16,
	},
	errorContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	errorText: {
		color: "#FF5252",
		fontSize: 16,
	},
	progressContainer: {
		marginBottom: 25,
	},
	progressText: {
		fontSize: 16,
		color: "#1E3A5F",
		marginBottom: 10,
		fontWeight: "500",
	},
	progressBar: {
		height: 6,
		backgroundColor: "#E0E0E0",
		borderRadius: 3,
	},
	progressFill: {
		height: "100%",
		backgroundColor: "#1E3A5F",
		borderRadius: 3,
	},
	questionContainer: {
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 15,
		marginBottom: 25,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
		borderWidth: 1,
		borderColor: "#F0F0F0",
	},
	questionTitle: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#1E3A5F",
		marginBottom: 12,
		lineHeight: 28,
	},
	questionDescription: {
		fontSize: 16,
		color: "#666",
		lineHeight: 22,
	},
	answersContainer: {
		marginBottom: 25,
	},
	optionButton: {
		backgroundColor: "#fff",
		padding: 16,
		borderRadius: 12,
		marginBottom: 12,
		borderWidth: 1,
		borderColor: "#E0E0E0",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.05,
		shadowRadius: 2,
		elevation: 2,
	},
	selectedOption: {
		backgroundColor: "#1E3A5F",
		borderColor: "#1E3A5F",
	},
	optionText: {
		fontSize: 16,
		color: "#1E3A5F",
		lineHeight: 22,
	},
	selectedOptionText: {
		color: "#fff",
		fontWeight: "500",
	},
	scrollContent: {
		flex: 1,
		padding: 20,
	},
	bottomPadding: {
		height: 20,
	},
	navigationContainer: {
		backgroundColor: "#fff",
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderTopWidth: 1,
		borderTopColor: "#f0f0f0",
	},
	navigationButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 12,
	},
	navButton: {
		flex: 1,
		padding: 16,
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
	},
	backButton: {
		backgroundColor: "#F5F5F5",
	},
	nextButton: {
		backgroundColor: "#1E3A5F",
	},
	finishButton: {
		backgroundColor: "#1E3A5F",
	},
	disabledButton: {
		opacity: 0.5,
	},
	navButtonText: {
		fontSize: 16,
		fontWeight: "600",
	},
	backButtonText: {
		color: "#1E3A5F",
	},
	nextButtonText: {
		color: "#fff",
	},
});

export default QuizzScreen;
