  //creating schema using interface
  // note: interface type small letter hobe first letter jeikhane schema te capital letter
  //following schema types from mongoose docs

import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>; //Static and methods er jonno interface lagce by following docs tai type ar lagbe nah

  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser, UserModel , IUserMethods>({ //ai 3 ta jinish onekta mukhosto follow mongoose docs -> typescript ->Statics
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


  //class-> this. --> class k pacci
  userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({role: "admin"})
  });

  userSchema.method('fullName', function fullName() {
    return this.name.firstName+ ' ' + this.name.lastName; //this use korle must normal function lagbe
  });
  

  //model
  // const User = model<IUser, UserModel>('User', schema);
  const User = model<IUser, UserModel>("User", userSchema);

  export default User;

//instance methods -> instance er method
//class -> instance + method => instance methods

