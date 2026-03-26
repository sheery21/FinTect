import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk(
  "/api/admin/getComplaints",
  async (_, { rejectWithValue }) => {
    try {
      const URL = import.meta.env
        .VITE_LOCAL_HOST_OTP_UPDATE_ALL_COMPLAINTS_BY_ADMIN;

      const token = localStorage.getItem("token");

      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Something went wrong" },
      );
    }
  },
);
