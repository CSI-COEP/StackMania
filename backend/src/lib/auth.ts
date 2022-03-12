import { auth } from "firebase-admin";
import { UserRecord } from "firebase-admin/lib/auth/user-record";

const verifyToken = async (token: string) => {
  try {
    const user = await auth().verifyIdToken(token);

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createUser = async (
  email: string,
  password: string
): Promise<UserRecord | null> => {
  try {
    const user = await auth().createUser({
      email,
      password,
    });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { verifyToken, createUser };
