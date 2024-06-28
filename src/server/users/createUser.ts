"use server";
import { ClanniPrisma } from "@/lib/prisma";

export default async function createUser(address: string) {
  try {
    // Check if the user already exists
    const existingUser = await ClanniPrisma.user.findUnique({
      where: { address },
    });

    if (existingUser) {
      console.log("User with this address already exists:", existingUser);
      return existingUser;
    }

    // Create the user if they don't exist
    const user = await ClanniPrisma.user.create({
      data: {
        address,
      },
    });
    console.log("User created:", user);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    await ClanniPrisma.$disconnect();
  }
}
