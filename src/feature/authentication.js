import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	isFirstLogin: false,
	accessToken: "",
	username: "",
	name: "",
	phoneNumber: "",
	role: "",
	accessTokenExpired: false,
	skinType: "",
	address: "",
	img: "",
	email: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setIsLoggedIn(state, action) {
			state.isLoggedIn = action.payload;
		},
		setFirstLogin(state, action) {
			state.isFirstLogin = action.payload;
		},
		setAccessToken(state, action) {
			state.accessToken = action.payload;
		},
		setUsername(state, action) {
			state.username = action.payload;
		},
		setName(state, action) {
			state.name = action.payload;
		},
		setPhoneNumber(state, action) {
			state.phoneNumber = action.payload;
		},
		setRole(state, action) {
			state.role = action.payload;
		},
		setLoading(state, action) {
			state.isLoading = action.payload;
		},
		setAccessTokenExpired(state, action) {
			state.accessTokenExpired = action.payload;
		},
		setSkinType(state, action) {
			state.skinType = action.payload;
		},
		setAddress(state, action) {
			state.address = action.payload;
		},
		setEmail(state, action) {
			state.email = action.payload;
		},
		setImg(state, action) {
			state.img = action.payload;
		},
		signout(state) {
			state.isLoggedIn = false;
			state.isFirstLogin = false;
			state.accessToken = "";
			state.username = "";
			state.name = "";
			state.phoneNumber = "";
			state.role = "";
			state.accessTokenExpired = false;
			state.skinType = "";
			state.address = "";
			state.img = "";
		},
	},
});

export const {
	setIsLoggedIn,
	setFirstLogin,
	setAccessToken,
	setUsername,
	setPhoneNumber,
	setRole,
	signout,
	setAccessTokenExpired,
	setName,
	setSkinType,
	setAddress,
	setImg,
	setEmail
} = userSlice.actions;

export default userSlice.reducer;
