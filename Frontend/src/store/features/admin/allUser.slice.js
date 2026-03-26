import { createSlice } from "@reduxjs/toolkit";
import { getAdminComplaint } from "../complaint/admin.thunks";
import { getAllUser } from "./allUser.thunk";

const getAllUserSlice = createSlice({
  name: " allUser",
  initialState: {
    complaints: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
 .addCase(getAllUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUser.fulfilled, (state, payload) => {
        state.loading = false;
        state.complaints = payload.payload.data;
      })
      .addCase(getAllUser.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload.payload?.message;
      });
  },
});

const { reducer, actions } = getAllUserSlice;
const {} = actions;

export const allUserReducer = reducer;
