import { createSlice } from "@reduxjs/toolkit";
import { adminComplaint } from "./admin.thunks";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    complaints: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminComplaint.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminComplaint.fulfilled, (state, payload) => {
        state.loading = false;
        state.complaints = payload.payload.data;
      })
      .addCase(adminComplaint.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload.payload?.message;
      });
  },
});

const { reducer, actions } = adminSlice;

const {} = actions;

export const bankOfficerReducer = reducer;
