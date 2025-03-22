import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Cài đặt thư viện icon

const { width } = Dimensions.get("window");

const QuickAccess = () => {
	const navigation = useNavigation();

	// Mảng chứa tên các màn hình, nút, tên icon và màu sắc cho mỗi icon
	const buttons = [
		{
			title: "Blog",
			screen: "Blog",
			icon: "newspaper-o",
			iconColor: "#FF9800",
			bgColor: "#FFF3E0",
		},
		{
			title: "Kiểm tra da",
			screen: "QuizzScreen",
			icon: "check-circle",
			iconColor: "#4CAF50",
			bgColor: "#E8F5E9",
		},
		{
			title: "Tư vấn",
			screen: "Consult",
			icon: "comments",
			iconColor: "#2196F3",
			bgColor: "#E3F2FD",
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				{buttons.map((button, index) => (
					<TouchableOpacity
						key={index}
						style={styles.button}
						onPress={() => navigation.navigate(button.screen)}
					>
						<View
							style={[
								styles.iconContainer,
								{ backgroundColor: button.bgColor },
							]}
						>
							<Icon
								name={button.icon}
								size={24}
								color={button.iconColor}
							/>
						</View>
						<Text style={styles.buttonText}>{button.title}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		marginHorizontal: 15,
		marginVertical: 10,
		borderRadius: 15,
		padding: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 10,
	},
	button: {
		flex: 1,
		backgroundColor: "#fff",
		borderRadius: 12,
		padding: 15,
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#f0f0f0",
	},
	iconContainer: {
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 8,
	},
	buttonText: {
		fontSize: 13,
		color: "#1E3A5F",
		textAlign: "center",
		fontWeight: "500",
	},
});

export default QuickAccess;
