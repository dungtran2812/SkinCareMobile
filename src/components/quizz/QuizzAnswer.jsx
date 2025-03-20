import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const QuizzAnswer = ({ route }) => {
	const navigation = useNavigation();

	const handleNavigateToSkinResult = () => {
		navigation.navigate("SkinResult");
	};

	React.useEffect(() => {
		handleNavigateToSkinResult();
	}, []);

	return null;
};

export default QuizzAnswer;
