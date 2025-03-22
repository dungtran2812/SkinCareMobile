import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const GiftHeader = () => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate("GiftChange")}
		>
			<View style={styles.content}>
				<View style={styles.leftContent}>
					<View style={styles.iconContainer}>
						<Ionicons
							name="gift-outline"
							size={22}
							color="#1E3A5F"
						/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.title}>Đổi quà tặng</Text>
						<Text style={styles.subtitle}>
							Đổi điểm thành quà hấp dẫn
						</Text>
					</View>
				</View>
				<Ionicons name="chevron-forward" size={22} color="#1E3A5F" />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		marginHorizontal: 15,
		marginVertical: 10,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#f0f0f0",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	content: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 15,
	},
	leftContent: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
	iconContainer: {
		width: 40,
		height: 40,
		backgroundColor: "#E3F2FD",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		gap: 2,
	},
	title: {
		fontSize: 15,
		fontWeight: "600",
		color: "#1E3A5F",
	},
	subtitle: {
		fontSize: 13,
		color: "#666",
	},
});

export default GiftHeader;
