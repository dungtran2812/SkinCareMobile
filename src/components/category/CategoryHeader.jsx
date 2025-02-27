// CategoryHeader.js
import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Dimensions,
} from "react-native";
import CategoryCard from "./CategoryCard"; // Import CategoryCard component

const { width } = Dimensions.get("window");

const CategoryHeader = () => {
	// Dữ liệu giả cho các danh mục
	const categories = [
		{
			id: 1,
			name: "Sửa rửa mặt",
			image: "https://caobangedu.vn/wp-content/uploads/2025/02/nhung-san-pham-sua-rua-mat-chua-niacinamide-hien-nay.png",
		},
		{
			id: 2,
			name: "Xịt khoáng",
			image: "https://6.img.izshop.vn/ecom123/images/xit-khoang-loai-nao-tot-cho-da-hon-hop-1.jpg",
		},
		{
			id: 3,
			name: "Dưỡng ẩm",
			image: "https://img.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2022/09/sua-duong-the-cho-da-nhay-cam-16-jpg-1664433658-29092022134058.jpg",
		},
		{
			id: 4,
			name: "Kem chống nắng",
			image: "https://cdn.tgdd.vn/Files/2018/12/10/1137032/top-6-kem-chong-nang-nhat-ban-duoc-ua-chuong-nhat-nam-2021-202109181638485053.jpg",
		},
		{
			id: 5,
			name: "Toner",
			image: "https://cdn.tgdd.vn/News/Thumb/1437668/top-10-toner-khong-con-diu-nhe-duoc-yeu-thich-thumbb-1200x628.jpg",
		},
		{
			id: 6,
			name: "Tẩy trang",
			image: "https://blogchamsoc.com/wp-content/uploads/2019/12/oswsbbu4mlzkq-1.jpg",
		},
		{
			id: 7,
			name: "Tẩy tế bào chết",
			image: "https://api.hasaki.vn/wysiwyg?id=e3ttZWRpYSB1cmw9Ind5c2l3eWcvQ2hhdS9zdWEtcnVhLW1hdC10YXktdGUtYmFvLWNoZXQtc3QtaXZlcy0xNzBnLTEuanBnIn19/",
		},
		{
			id: 8,
			name: "Kem trị mụn",
			image: "https://cdn.chiaki.vn/unsafe/0x800/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/news/2023/05/top-12-gel-tri-mun-danh-bay-moi-loai-mun-thuong-gap-hien-nay-09052023165104.jpg",
		},
		{
			id: 9,
			name: "Serum",
			image: "https://tiki.vn/blog/wp-content/uploads/2023/05/serum-duong-trang-da-2.jpg",
		},
		{
			id: 10,
			name: "Mặt nạ",
			image: "https://cdn.prod.website-files.com/5eb51614ce7c0b6b10d42789/6088c5bbb2a9f76319f1a10f_mat-na-duong-da-tot-nhat-1.jpg",
		},
	];

	// Chia danh mục thành 2 nhóm để hiển thị trên 2 hàng
	const firstRowCategories = categories.slice(0, 5); // 5 mục đầu tiên
	const secondRowCategories = categories.slice(5, 10); // 5 mục tiếp theo

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Danh mục</Text>
				<TouchableOpacity>
					<Text style={styles.viewAll}>Xem tất cả</Text>
				</TouchableOpacity>
			</View>

			{/* Hàng đầu tiên */}
			<FlatList
				data={firstRowCategories}
				renderItem={({ item }) => <CategoryCard category={item} />}
				keyExtractor={(item) => item.id.toString()}
				horizontal // Lướt ngang
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.flatListContentContainer}
			/>

			{/* Hàng thứ hai */}
			<FlatList
				data={secondRowCategories}
				renderItem={({ item }) => <CategoryCard category={item} />}
				keyExtractor={(item) => item.id.toString()}
				horizontal // Lướt ngang
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.flatListContentContainer}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		backgroundColor: "#FFFFFF", // Nền màu trắng cho CategoryHeader
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between", // Căn đều các phần tử
		alignItems: "center", // Căn giữa các phần tử theo chiều dọc
		width: width - 20,
		marginBottom: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	viewAll: {
		fontSize: 14,
		color: "#1E90FF",
		fontWeight: "bold",
	},
	flatListContentContainer: {
		paddingBottom: 10, // Khoảng cách dưới cho FlatList
	},
});

export default CategoryHeader;
