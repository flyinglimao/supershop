"use server";

import prisma from "@/prisma";
import { Address } from "viem";

export async function register(
  address: Address,
  height: number,
  weight: number,
  gender: string
) {
  await prisma.user.create({
    data: {
      address,
      height,
      weight,
      gender,
    },
  });
}
