import mongoose from "mongoose";
import { CreateCaseCall, Role, SearchQuery } from "../../../typings/custom";
import { CASES, USERS } from "./Models";

mongoose.connect(process.env.DB_URI!!);

/* 
    value -> user
    null -> user exists
    undefined -> error
*/
const addUser = async (
  email: string,
  role: Role,
  name: string | undefined = undefined
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
      name,
    });

    return createdUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const findUser = async (email: string, role: Role | undefined = undefined) => {
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

const findCases = async (searchObject: SearchQuery) => {
  try {
    const casesFound = await CASES.find(searchObject);

    return casesFound;
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
  findCases,
};
