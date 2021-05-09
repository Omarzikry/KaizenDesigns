import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/productsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
