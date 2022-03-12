import { auth } from "firebase-admin";

const verifyToken = async (token: string) => {
  try {
    const user = await auth().verifyIdToken(token);

    return user;
  } catch (error) {
    return null;
  }
};

export { verifyToken };
