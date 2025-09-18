import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],   // array of skills/tech stack
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  experience: {
    type: Number, // in years
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  jobtype: {
    type: String,
    enum: ["fulltime", "parttime", "internship", "contract", "remote"], // add as needed
    required: true,
  },
  position: {
    type: Number, // number of openings
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);
