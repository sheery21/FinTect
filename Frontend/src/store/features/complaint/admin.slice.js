import { createSlice } from "@reduxjs/toolkit";
import { getAdminComplaint, getAllUsers } from "./admin.thunks";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    complaints: [],
    allUser:[],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminComplaint.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminComplaint.fulfilled, (state, payload) => {
        state.loading = false;
        state.complaints = payload.payload.data;
      })
      .addCase(getAdminComplaint.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload.payload?.message;
      })
        .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, payload) => {
        state.loading = false;
        state.allUser = payload.payload.users;
      })
      .addCase(getAllUsers.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload.payload?.message;
      });
  },
});

const { reducer, actions } = adminSlice;

const {} = actions;

export const adminReducer = reducer;
