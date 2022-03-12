import mongoose, { Schema } from "mongoose";

const USERS_SCHEMA = new Schema({
  name: String,
  email: String,
  role: String,
});

const CASES_SCHEMA = new Schema({
  policeStation: String,
  lawyer: String,
  by: String,
  for: String,
  closed: Boolean,
  createdAt: Number,
  closedAt: {
    type: Schema.Types.Mixed,
    default: null,
  },
  documentId: {
    type: [String],
    default: [],
  },
  bookedUnder: String,
  court: {
    type: Schema.Types.Mixed,
    default: null,
  },
  courtNumber: {
    type: Schema.Types.Mixed,
    default: null,
  },
});

const USERS = mongoose.model("users", USERS_SCHEMA);
const CASES = mongoose.model("cases", CASES_SCHEMA);

export { USERS, CASES };
