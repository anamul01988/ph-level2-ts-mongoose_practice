import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser):Promise<IUser> => {
  //user create korte class and instance use korbo sudhu
    const user = new User(payload); //user =-> user is class in which new is instance
    await user.save()  //save() is built in instace method cause user to class tar sathe method
    console.log(user.fullName()); //custom instance method
    return user;
  };

  export const getUserFromDb = async():Promise<IUser[]>=>{ //IUser namer object er array return korbe
    const users = await User.find();
    return users;
  }
 
//route => controller => service aita maintain korei api creation data maintain korte pari
export const getUserByIdFromDb = async(payload:string):Promise<IUser | null>=>{//async await use korle promise return korbe
  // const user =  await User.findOne({id: payload})//sob data peye jacci
  const user =  await User.findOne({id: payload},{name: 1, contactNo: 1})//field filtering kore name ar contact k dekhabo sudhu
  return user;
}

export const getAdminUserFromDb = async()=>{ 
  const admins = await User.getAdminUsers();
  return admins;
}

//class -> attach -> method -> directly call using class
//usr -> new user
// User. -> instance method
//User.getAdminUsers()//class diye method k call korai hocce static er kaje