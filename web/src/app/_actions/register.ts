"use server";

import prisma from "@/prisma";
import { Address } from "viem";
import { generatePrivateKey } from "viem/accounts";

export async function register(
  address: Address,
  height: number,
  weight: number,
  gender: string
) {
  const chatKey = generatePrivateKey();
  await prisma.user.upsert({
    where: {
      address,
    },
    create: {
      address,
      height,
      weight,
      gender,
      chatKey,
    },
    update: {
      height,
      weight,
      gender,
    },
  });
}
