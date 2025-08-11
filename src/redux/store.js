import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import { combineReducers } from "redux";

// 1️⃣ Reducer'ları birleştir
const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

// 2️⃣ Persist config
const persistConfig = {
  key: "localStorage",
  storage,
  whitelist: ["contacts", "filter"], // Kalıcı olacak reducer'lar
};

// 3️⃣ rootReducer'ı persistReducer ile sarmala
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ configureStore ile mağazayı oluştur
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["register"],
      },
    }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

// 5️⃣ persistor oluştur
export const persistor = persistStore(store);
