"use client";
import { z } from "zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SuccessModal from "./SuccessModal";

const passwordSchema = z.object({
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "The minimum password length is 8")
    .max(15, "The maximum password length is 15"),
  confirmPassword: z
    .string()
    .min(1, "confirm password is required")
    .min(8, "The minimum confirm password length is 8")
    .max(15, "The maximum confirm password length is 15"),
});

export default function PasswordForm() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [errorMessages, setErrorMessages] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  // ? this card if password === confirmpassword will show
  const [showCard, setShowCard] = useState<boolean>(false);

  function validtaion() {
    setErrorMessages({});

    const result = passwordSchema.safeParse({ password, confirmPassword });

    if (!result.success) {
      const errors = result.error.format();
      setErrorMessages({
        password: errors.password?._errors[0],
        confirmPassword: errors.confirmPassword?._errors[0],
      });
      return;
    }

    if (result.data.password !== result.data.confirmPassword) {
      setErrorMessages({
        confirmPassword: "Passwords should match each other",
      });
      return;
    }
    setShowCard(true);
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-800">Change Password</h2>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          new Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF7A59] text-sm "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessages((prev) => ({
                ...prev,
                password: "",
              }));
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {errorMessages.password && (
        <p className="text-rose-500 text-xs mt-1">{errorMessages.password}</p>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF7A59] text-sm"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorMessages((prev) => ({
                ...prev,
                confirmPassword: "",
              }));
            }}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      {errorMessages.confirmPassword && (
        <p className="text-rose-500 text-xs mt-1">
          {errorMessages.confirmPassword}
        </p>
      )}

      <button
        type="button"
        className="px-5 py-2.5 bg-[#FF7A59] text-white text-sm font-medium rounded-xl hover:bg-[#e06849] transition cursor-pointer"
        onClick={validtaion}
      >
        Update Password
      </button>
      {showCard && (
        <SuccessModal
          onClose={() => {
            setShowCard(false);
          }}
        />
      )}
    </div>
  );
}