import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;

/**
 * configureStore() comes from @reduxjs/toolkit
 *  which takes a configuration
 *      {
 *      }
 * this configuration will have reducer  and this reducer will have different reducers
 *
 *
 */
