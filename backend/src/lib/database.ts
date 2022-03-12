import prisma from "./prisma";

type ROLE = "JUDGE" | "LAWYER" | "USER";

export async function addUser(email: string, role: ROLE) {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        role,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}
