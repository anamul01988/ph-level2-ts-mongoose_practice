import { NextFunction, Request, Response } from "express";
import { createUserToDb, getAdminUserFromDb, getUserByIdFromDb, getUserFromDb } from "./user.service";

export const createUser = async(req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const user = await createUserToDb(data)
  res.status(200).json({
     status:"success",
     data: user,
  })
}
export const getUsers = async(req: Request, res: Response, next: NextFunction) => {
  const user = await getUserFromDb()
  res.status(200).json({
     status:"success",
     data: user,
  })
}

export const getUserById = async(req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params;
  const user = await getUserByIdFromDb(id)
  res.status(200).json({
     status:"success",
     data: user,
  })
}
export const getAdminUsers = async(req: Request, res: Response, next: NextFunction) => {
  const user = await getAdminUserFromDb()
  res.status(200).json({
     status:"success",
     data: user,
  })
}

//Pattern
//Route -> controller-> service