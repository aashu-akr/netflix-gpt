import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,

  reducers: {
    addUser: (state, action) => {
      return action.payload;
      //state will become action.payload instead of null
    },
    removeUser: (state, action) => {
      return null;
    },
    //as we login, this action will be dispatched and this user will be added to our appStore
  },
});
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
