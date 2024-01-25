import type { User, Group } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Group } from "@prisma/client";

export function getGroup({
  id,
}: Pick<Group, "id"> & {
  userId: User["id"];
}) {
  return prisma.group.findFirst({
    where: { id },
  });
}

export function createGroup({
  description,
  title,
  userId,
}: Pick<Group, "description" | "title"> & { userId: User["id"] }) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      groups: {
        create: {
          title,
          description,
        },
      },
    },
    include: {
      groups: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
        select: {
          id: true,
        },
      },
    },
  });
}

export function deleteGroup({
  id,
}: Pick<Group, "id"> & { userId: User["id"] }) {
  return prisma.group.deleteMany({
    where: { id },
  });
}
