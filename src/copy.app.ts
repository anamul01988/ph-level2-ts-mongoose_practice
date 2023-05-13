import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting a test data into mongodb
  /*
    setp1: interface  //done
    step2: schema   //done
    step3: Model
    step4: database query on model //done
  */
  // res.send('Hello World!')
  //next()

  //creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender?: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    permanentAddress: string;
  }
  //creating schema using interface
  // note: interface type small letter hobe first letter jeikhane schema te capital letter
  //following schema types from mongoose docs
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
  const createUserToDb = async () => {
    const user = new User({
      //classuser create korlam new instance kore

      id: 3,
      role: "student",
      password: "3r3r3",
      name: {
        firstName: "amamul",
        middleName: "haque",
        lastName: "shanto",
      },
      dateOfBirth: "dfdf",
      gender: "male",
      email: "ana@gmail.com",
      contactNo: "3f3e",
      emergencyContactNo: "dfdf",
      permanentAddress: "kakiarchar",
    });
    await user.save()
    console.log(user);
  };
  createUserToDb();
});

export default app;
