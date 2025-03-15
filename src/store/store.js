import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "../redux/rootReducer";
import skincareApi from "../services/skincare.service";

const store = configureStore({
	reducer: {
		rootReducer,
		[skincareApi.reducerPath]: skincareApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(skincareApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
