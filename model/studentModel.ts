import mongoose from "mongoose";

type Student = {
  Name: string;
  class: string;
  AdmissionNo: number;
  Session: string;
};

interface TheStudent extends Student, mongoose.Document {}

const studentShema = new mongoose.Schema(
  {
    Name: String,
    Class: String,
    Admission: Number,
    Session: String,
  },
  { timestamps: true }
);

export default mongoose.model<TheStudent>("Student", studentShema);
