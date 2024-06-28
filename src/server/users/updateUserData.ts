"use server";

import { ClanniPrisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export default async function updateUserByAddress(
  address: string,
  data: Prisma.UserUpdateInput,
) {
  try {
    const updatedUser = await ClanniPrisma.user.update({
      where: { address },
      data,
    });
    console.log("User updated:", updatedUser);
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  } finally {
    await ClanniPrisma.$disconnect();
  }
}
