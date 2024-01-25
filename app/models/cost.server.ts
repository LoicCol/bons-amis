import type { Group, Cost, User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Group } from "@prisma/client";

export function createCost({
  description,
  groupId,
  price,
  title,
  userId,
}: Pick<Cost, "description" | "price" | "title"> & { groupId: Group["id"] } & {
  userId: User["id"];
}) {
  return prisma.group.update({
    where: {
      id: groupId,
    },
    data: {
      costs: {
        create: {
          price,
          title,
          description,
          userId,
        },
      },
    },
    include: {
      costs: true,
    },
  });
}
