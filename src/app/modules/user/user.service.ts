import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser):Promise<IUser> => {
    // const user = new User({  //model er upor query ta hoy
    //   //classuser create korlam new instance kore

    //   id: 4,
    //   role: "student",
    //   password: "3r3r3",
    //   name: {
    //     firstName: "akramul",
    //     middleName: "haque",
    //     lastName: "shanto",
    //   },
    //   dateOfBirth: "dfdf",
    //   gender: "male",
    //   email: "ana@gmail.com",
    //   contactNo: "3f3e",
    //   emergencyContactNo: "dfdf",
    //   permanentAddress: "kakiarchar",
    // });
    const user = new User(payload);
    await user.save()
    console.log(user);
    return user;
  };

  export const getUserFromDb = async():Promise<IUser[]>=>{ //IUser namer object er array return korbe
    const users = await User.find();
    return users;
  }