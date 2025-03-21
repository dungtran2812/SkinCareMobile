import React from "react";
import { View, StyleSheet } from "react-native";
import QuizzHistory from "../quizz/QuizzHistory";

const ProfileQuizzResult = () => {
	return (
		<View style={styles.container}>
			<QuizzHistory />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});

export default ProfileQuizzResult;
