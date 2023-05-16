import { HydratedDocument, Model } from "mongoose";

 //creating an interface
 export interface IUser {
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
  // statistic by following docs typescript -> statistics
  // interface UserModel extends Model<IUser> {
  //   getAdminUsers(): IUser[];
  // }

  //custom instance mehtod following mongoose docs => mongoose docs -> typescript
  export interface IUserMethods {
    fullName(): string;
  }

  export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }
  