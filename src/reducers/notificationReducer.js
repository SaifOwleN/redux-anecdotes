import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload;
    },
    removeNotification(state, action) {
      return null;
    },
  },
});

export const { showNotification, removeNotification } =
  NotificationSlice.actions;

export const setNotification = (noti, time) => {
  return async (dispatch) => {
    await dispatch(showNotification(noti));
    setTimeout(() => {
      dispatch(removeNotification());
    }, time * 1000);
  };
};

export default NotificationSlice.reducer;
