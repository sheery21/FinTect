import mongoose from "mongoose";

const bank_officer_Commit_Schema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },

  commentedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  complaintId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Complaint",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BankOfficerCommit = mongoose.model(
  "BankOfficerCommit",
  bank_officer_Commit_Schema
);

export default BankOfficerCommit;