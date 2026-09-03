import { headers } from "next/headers";

export async function getDomain() {
  const headersList = await headers();
  return headersList.get("host");
}
