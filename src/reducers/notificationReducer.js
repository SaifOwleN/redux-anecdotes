import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    removeNotification(state, action) {
      return null;
    },
  },
});

export const { setNotification, removeNotification } =
  NotificationSlice.actions;
export default NotificationSlice.reducer;
