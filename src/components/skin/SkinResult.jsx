import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const SkinResult = ({ route }) => {
	const navigation = useNavigation();
	const skinType = useSelector(
		(state) => state?.rootReducer?.user?.skinType
	);

	// Handle error state
	if (isError) {
		return (
			<View style={styles.errorContainer}>
				<Text style={styles.errorText}>Error fetching skin type information. Please try again later.</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Text style={styles.title}>{skinType?.type}</Text>
				<Image source={skinType?.image} style={styles.image} />
				<Text style={styles.sectionTitle}>
					Thông Tin Về {skinType?.type}
				</Text>
				<Text style={styles.sectionTitle}>Nguyên Nhân</Text>
				<Text style={styles.text}>{skinType?.description}</Text>
				<Text style={styles.sectionTitle}>Dấu Hiệu</Text>
				<Text style={styles.text}>{skinType?.symptom}</Text>
				<Text style={styles.sectionTitle}>Cách Chăm Sóc</Text>
				<Text style={styles.text}>{skinType?.treatment}</Text>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("MainTabNavigator", {
							screen: "HomeScreen",
						})
					}
				>
					<Text style={styles.buttonText}>Quay Lại Trang Chủ</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("MainTabNavigator", {
							screen: "Lộ trình",
						})
					}
				>
					<Text style={styles.buttonText}>Lộ Trình Sản Phẩm</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	scrollContainer: {
		padding: 20,
		paddingBottom: 100, // Để tránh nội dung bị che bởi các nút
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "center",
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "contain",
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
		marginBottom: 10,
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
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 15,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#ddd",
	},
	button: {
		flex: 1,
		backgroundColor: "#1E3A5F",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		marginHorizontal: 5,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default SkinResult;
