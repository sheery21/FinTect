import { createSlice } from "@reduxjs/toolkit";
import {
  getAdminComplaint,
  getAllBankOfficers,
  getAllUsers,
} from "./admin.thunks";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    complaints: [],
    allUser: [],
    allBankOfficer: [],
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
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUser = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload.payload?.message;
      })
      .addCase(getAllBankOfficers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBankOfficers.fulfilled, (state, action) => {
        state.loading = false;
        state.allBankOfficer = action.payload;
      })
      .addCase(getAllBankOfficers.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload.payload?.message;
      });
  },
});

const { reducer, actions } = adminSlice;

const {} = actions;

export const adminReducer = reducer;
