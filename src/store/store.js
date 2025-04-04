import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "../redux/rootReducer";
import skincareApi from "../services/skincare.service";
import devtoolsEnhancer from "redux-devtools-expo-dev-plugin";

const store = configureStore({
	reducer: {
		rootReducer,
		[skincareApi.reducerPath]: skincareApi.reducer,
	},
	enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(devtoolsEnhancer()),
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(skincareApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
