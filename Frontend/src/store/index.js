import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/authSlice";
import { complaintReducer } from "./features/complaint/userComp.slice";
import { bankOfficerReducer } from "./features/complaint/bankOfficer.slice";
import { adminReducer } from "./features/complaint/admin.slice";
import { getAllUsers } from "./features/complaint/admin.thunks";
const store = configureStore({
  reducer: {
    authReducer,
    admin: adminReducer,
    complaint: complaintReducer,
    bankOfficer: bankOfficerReducer,
  },
});

export default store;
