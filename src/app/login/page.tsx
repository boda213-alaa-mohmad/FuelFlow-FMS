"use client";
import { z } from "zod";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const UserSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "The minimum password length is 8")
    .max(15, "The maximum password length is 15"),
});

export default function Login() {
  // ? creating user data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // ? eyes for password (true means password disapper eyeopen)
  const [eye, setEye] = useState<boolean>(true);

  // ? creating errors if it happens
  const [errors, setErrors] = useState<{
    // todo: emailError, passwordError
    email?: string;
    password?: string;
  }>({
    email: "",
    password: "",
  });

  // todo: handle submit for form
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = UserSchema.safeParse(userData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      console.log(fieldErrors);
      return;
    }
    // restting errors
    setErrors({
      email: "",
      password: "",
    });
    console.log("success submitting");
  }

  return (
    // container
    <div className={styles.container}>
      {/* LEFT SECTION  */}
      <div className={styles["left-section"]}>
        <div className={styles.content}>
          <h1 className={styles.header}>WELCOME TO FMS</h1>
          <p className={styles.desc}>
            Ask the admin to create an account for you to start viewing our
            Dashboards.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-[#3d5161] text-[#3d5161] bg-transparent hover:bg-[#3d5161] hover:text-white px-8 py-6"
          >
            Request Account
          </Button>
        </div>
      </div>
      {/* RIGHT SECTION */}
      <div className={styles["right-section"]}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Image
            src="/brk-logo-trandy.png"
            alt="logo TAQA"
            width={150}
            height={150}
          />

          <div className={styles.inputsContainer}>
            <input
              type="text"
              placeholder="user@example.com"
              className={styles.input}
              value={userData.email}
              onChange={(e) => {
                setUserData((prev) => ({ ...prev, email: e.target.value }));
              }}
            />

            {errors.email && (
              <p className={styles.errorInput}>{errors.email}</p>
            )}

            <div className={styles.passwordContainer}>
              <input
                type={eye ? "password" : "text"}
                placeholder="password"
                className={styles.input}
                value={userData.password}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
              <span
                className={styles.eye}
                onClick={() => {
                  setEye(!eye);
                }}
              >
                {eye ? <Eye size={20} /> : <EyeOff size={20} />}
              </span>
            </div>
            {errors.password && (
              <p className={styles.errorInput}>{errors.password}</p>
            )}

            <Button
              variant="white"
              size="lg"
              className="mt-4 px-8 py-6 rounded-2xl"
            >
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
