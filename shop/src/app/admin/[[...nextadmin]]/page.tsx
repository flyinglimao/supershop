import { NextAdmin, PageProps } from "@premieroctet/next-admin";
import { getNextAdminProps } from "@premieroctet/next-admin/appRouter";
import { prisma } from "../../../../prisma";

export default async function AdminPage({ params, searchParams }: PageProps) {
  const props = await getNextAdminProps({
    params: params.nextadmin,
    searchParams,
    basePath: "/admin",
    apiBasePath: "/api/admin",
    prisma,
    /*options*/
  });

  return <NextAdmin {...props} />;
}
