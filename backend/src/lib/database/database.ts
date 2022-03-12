import mongoose from "mongoose";
import { CreateCaseCall, Role } from "../../../typings/custom";
import { CASES, USERS } from "./Models";

mongoose.connect(process.env.DB_URI!!);

/* 
    value -> user
    null -> user exists
    undefined -> error
*/
const addUser = async (
  email: String,
  role: Role
): Promise<any | null | undefined> => {
  try {
    const user = await USERS.findOne({
      email,
    });

    if (user) {
      return null;
    }

    const createdUser = await USERS.create({
      email,
      role,
    });

    return createdUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const findUser = async (email: string, role: Role) => {
  try {
    const user = await USERS.findOne({
      email,
      role,
    });

    return user;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const createCase = async (caseCreateOptions: CreateCaseCall) => {
  try {
    const createdCase = await CASES.create({
      ...caseCreateOptions,
      createdAt: new Date().getTime(),
    });

    return createdCase;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export {
  mongoose,
  // user related
  addUser,
  findUser,
  // case related
  createCase,
};
