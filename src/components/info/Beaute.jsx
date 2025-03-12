import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import logo from "../../../assets/images/logo/logo-removebg.png"; // Import ảnh logo từ thư mục assets

const Beaute = () => {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			<Text style={styles.versionText}>Phiên bản: 1.1.1</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	logo: {
		width: 100,
		height: 100,
		marginBottom: 20,
	},
	versionText: {
		fontSize: 16,
		color: "#666",
	},
});

export default Beaute;
