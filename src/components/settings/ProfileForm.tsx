"use client";

import Image from "next/image";
import { useRef, useState, useContext } from "react";
import { Upload, Trash2 } from "lucide-react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { ThemeContext } from "../../../context/ThemeContext";

interface ProfileFormProps {
  user: {
    email: string;
    fullName: string;
  };
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<string | undefined>(() => {
    if (typeof window === "undefined") return undefined;
    return localStorage.getItem("src-image") || undefined;
  });
  const [isOpen, setIsOpen] = useState(false);

  function handleFileChange(selectedFile?: File) {
    if (selectedFile === undefined) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const base64 = fileReader.result as string;
      localStorage.setItem("src-image", base64);
      setFile(base64);
    };
    fileReader.readAsDataURL(selectedFile);
  }

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm space-y-6 transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-gray-100 text-slate-900"
      }`}
    >
      <h2
        className={`text-lg font-semibold ${
          isDark ? "text-white" : "text-slate-800"
        }`}
      >
        Profile Settings
      </h2>

      <div className="flex flex-col items-center sm:items-start gap-4">
        {file ? (
          <Image
            src={file}
            alt="Avatar"
            width={120}
            height={120}
            className="w-24 h-24 rounded-full object-cover border border-slate-700"
          />
        ) : (
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border ${
              isDark
                ? "bg-slate-800/80 text-slate-500 border-slate-700"
                : "bg-slate-200 text-slate-400 border-gray-200"
            }`}
          >
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              fileInputRef.current?.click();
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition shadow-sm cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            Upload Photo
          </button>

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const chosenFile = e.target.files?.[0];
              handleFileChange(chosenFile);
            }}
          />

          <button
            type="button"
            disabled={file === undefined}
            onClick={() => {
              setIsOpen(true);
            }}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition ${
              file
                ? isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer border border-slate-700"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
                : isDark
                  ? "bg-slate-900/40 text-slate-600 cursor-not-allowed border border-slate-800"
                  : "bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100"
            }`}
          >
            <Trash2
              className={`w-4 h-4 ${
                file
                  ? isDark
                    ? "text-slate-400"
                    : "text-slate-500"
                  : "text-slate-600"
              }`}
            />
            Delete Avatar
          </button>
        </div>
      </div>

      <div
        className={`space-y-4 pt-2 border-t transition-colors duration-300 ${
          isDark ? "border-slate-800" : "border-slate-100"
        }`}
      >
        <div>
          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">
            Full Name
          </span>
          <p
            className={`text-base font-semibold ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            {user.fullName}
          </p>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">
            Email Address
          </span>
          <p
            className={`text-base font-semibold ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            {user.email}
          </p>
        </div>
      </div>

      {isOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            localStorage.removeItem("src-image");
            setFile(undefined);
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
}
