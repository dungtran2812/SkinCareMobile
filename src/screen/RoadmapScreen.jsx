import React from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import StepCard from "../components/routine/StepCard";
import { useSelector } from "react-redux";
import {
	useGetRoutineBySkinTypeQuery,
} from "../services/skincare.service";
import { store } from "../store/store";

const RoadmapScreen = () => {
	const skinType = useSelector(
		(state) => state?.rootReducer?.user?.skinType
	);
	console.log(store.getState())
	const {
		data: routine,
		isLoading,
		isError,
	} = useGetRoutineBySkinTypeQuery(skinType._id);
  console.log(routine)

	// Handle loading state
	if (isLoading) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color="#0000ff" />
				<Text>Loading routines...</Text>
			</View>
		);
	}

	// Handle error state
	if (isError) {
		return (
			<View style={styles.errorContainer}>
				<Text style={styles.errorText}>
					Error fetching routines. Please try again later.
				</Text>
			</View>
		);
	}

	return (
		<View style={styles.mainContainer}>
			<View style={styles.header}>
				<Text style={styles.title}>Lộ trình chăm sóc da</Text>
				<Text style={styles.skinType}>
					Dành cho da: {skinType?.type}
				</Text>
			</View>

			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.scrollContent}
			>
				{routine &&
					routine?.steps.map((step, index) => (
						<StepCard key={index} step={step} />
					))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		alignItems: "center",
		backgroundColor: "#B3E5FC",
		paddingVertical: 10,
		justifyContent: "center",
	},
	scrollView: {
		flex: 1,
	},
	scrollContent: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
	},
	skinType: {
		fontSize: 16,
		color: "#666",
		fontStyle: "italic",
		marginTop: 5,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	errorContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	errorText: {
		color: "red",
		fontSize: 16,
	},
});

export default RoadmapScreen;
