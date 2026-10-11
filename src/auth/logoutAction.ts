"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const deleteCookie = await cookies();
  deleteCookie.delete("user");
  redirect("/login");
}
