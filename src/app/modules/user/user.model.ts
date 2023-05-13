  //creating schema using interface
  // note: interface type small letter hobe first letter jeikhane schema te capital letter
  //following schema types from mongoose docs

import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String, //interface jehetu optional tai aikhane required dibo nah,, mongoose aita chck korbe nah, mongoose -> typescript docs a bola ace
    },
    // gender: {
    //   type: String,
    //   enum: ["male" | "female"],
    // },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  //model
  const User = model<IUser>("User", userSchema);

  export default User;