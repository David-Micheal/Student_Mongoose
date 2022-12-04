import { Request, Response } from "express";
import studentModel from "../model/studentModel";

const postStudent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { Name, Class, Session, AdmissionNo } = req.body;

    const newStudent = await studentModel.create({
      Name,
      Class,
      AdmissionNo: Math.floor(Math.random() * 100000000000),
      Session,
    });
    return res.status(200).json({
      message: "Student Posted Successfully",
      data: newStudent,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occurred",
      error: error,
    });
  }
};

const getStudent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getStud = await studentModel.find();
    return res.status(200).json({
      message: "Students Gotten Successfully",
      data: getStud,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occurred",
      error: error,
    });
  }
};

const getOneStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getOneStud = await studentModel.findById(req.params.id);
    return res.status(200).json({
      message: "One Student Gotten Successfully",
      data: getOneStud,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occurred",
      error: error,
    });
  }
};

export { postStudent, getStudent, getOneStudent };
