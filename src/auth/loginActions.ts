"use server";

import crypto from "crypto";
import { admins } from "@/data/mockAdmins";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const randomValue = crypto.randomBytes(16).toString("hex");

  const adminUser = admins.find(
    (admin) => admin.email === email && admin.password === password,
  );

  await new Promise((res) => setTimeout(res, 2000));

  if (adminUser === undefined) {
    return {
      errorMessage: "Invalid Email or Password. Make sure you are registered.",
    };
  }
  (await cookies()).set("user", randomValue, {
    httpOnly: true,
    // it valid in 8 hours
    maxAge: 60 * 60 * 8,
    // ? for website know the user's cookie so he can navigate whereEver in website
    path: "/",
    // ? for security
    sameSite: "lax",
  });
  redirect("/dashboard");
}


// no you don't understand me look 
// if I submit 1 time second time and the third I will not understand
// I want disable button submit and give toaster message to user to wait a one minute