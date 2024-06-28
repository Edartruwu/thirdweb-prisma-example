"use server";

import { ClanniPrisma } from "@/lib/prisma";

export default async function getUserInfo(address: string) {
  try {
    const user = await ClanniPrisma.user.findUnique({
      where: {
        address: address,
      },
      include: {
        posts: true,
        clannis: {
          include: {
            organization: true,
          },
        },
        accessPosts: {
          include: {
            post: true,
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user by address:", error);
    throw error;
  } finally {
    await ClanniPrisma.$disconnect();
  }
}
