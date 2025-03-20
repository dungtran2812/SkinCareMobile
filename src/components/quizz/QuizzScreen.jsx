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
import { useAnalysisSkinTypeMutation, useGetAllQuizQuestionQuery } from "../../services/skincare.service";
import { useDispatch } from "react-redux";
import { setSkinType } from "../../feature/authentication";

const QuizzScreen = () => {
	const dispatch = useDispatch();
	const { data: quizData, isLoading, isError } = useGetAllQuizQuestionQuery();
	const [ analysisSkinType, { data: analysisData, isLoading: analysisLoading, isError: analysisError }] = useAnalysisSkinTypeMutation();
	const navigation = useNavigation();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState({}); // Key-value store for answers

	if (isLoading) return <Text>Loading...</Text>;
	if (isError) return <Text>There was an error loading the quiz.</Text>;

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
		if (answers[currentQuestion._id] !== undefined) { // Check if an answer is selected
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	// Handle the back button click
	const handleBack = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	const handleFinish = async() => {
		// Calculate total points based on the answers
		const totalPoints = Object.keys(answers).reduce((sum, questionId) => {
			const answerIndex = answers[questionId];
			if (answerIndex !== undefined) {
				const question = quizData.find(q => q._id === questionId);
				return sum + question.answers[answerIndex].point;
			}
			return sum; // If no answer is selected, return the current sum
		}, 0);

		const { data } = await analysisSkinType({points: totalPoints }).unwrap();
		dispatch(setSkinType(data?.skinType?._id));
		console.log(data.skinType._id)
		// Navigate to the result screen with the determined skin type
		navigation.navigate("QuizzAnswer");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{currentQuestion.title}
			</Text>
			<Text style={styles.description}>
				{currentQuestion.description}
			</Text>
			{currentQuestion.answers.map((option, index) => (
				<TouchableOpacity
					key={option._id}
					style={[
						styles.optionButton,
						answers[currentQuestion._id] === index && styles.selectedOption,
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
					disabled={currentQuestionIndex === 0}
				/>
				{currentQuestionIndex < quizData.length - 1 ? (
					<Button
						title="Next"
						onPress={handleNext}
						disabled={answers[currentQuestion._id] === undefined}
					/>
				) : (
					<Button
						title="Finish"
						onPress={handleFinish}
						disabled={answers[currentQuestion._id] === undefined}
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
	title: {
		fontSize: 20,
		marginBottom: 20,
		fontWeight: "bold",
	},
	description: {
		fontSize: 16,
		marginBottom: 20,
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
