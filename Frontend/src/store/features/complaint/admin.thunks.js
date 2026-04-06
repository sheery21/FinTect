import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdminComplaint = createAsyncThunk(
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

export const getAllUsers = createAsyncThunk(
  "admin/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const URL = import.meta.env.VITE_LOCAL_HOST_GET_ALL_USERS;
      const token = localStorage.getItem("token");

      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.data.users;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const getAllBankOfficers = createAsyncThunk(
  "admin/getBankOfficers",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const URL = import.meta.env.VITE_LOCAL_HOST_GET_ALL_BANK_OFFICER_API;

      console.log("API URL:", URL);
      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.data.officer;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const deleteComplaint = createAsyncThunk(
  "admin/deleteComplaint",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `http://localhost:5000/api/admin/deleteComplaints/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return res.data.id;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
