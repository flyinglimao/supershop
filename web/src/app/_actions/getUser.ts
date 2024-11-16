"use server";

import { Address } from "viem";
import { prisma } from "@/prisma";

export async function getUser(address: Address) {
  const user = await prisma.user.findUnique({
    where: {
      address,
    },
  });

  return user;
}
