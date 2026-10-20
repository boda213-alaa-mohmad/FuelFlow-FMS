"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Upload, Trash2 } from "lucide-react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

interface ProfileFormProps {
  user: {
    email: string;
    fullName: string;
  };
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
      <h2 className="text-lg font-semibold text-slate-800">Profile Settings</h2>

      <div className="flex flex-col items-center sm:items-start gap-4">
        {file ? (
          <Image
            src={URL.createObjectURL(file)}
            alt="Avatar"
            width={120}
            height={120}
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 overflow-hidden border">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
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
              setFile(e.target.files?.[0]);
            }}
          />

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-200 transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4 text-slate-500" />
            Delete Avatar
          </button>
        </div>

      </div>

      <div className="space-y-4 pt-2 border-t border-slate-100">
        <div>
          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">
            Full Name
          </span>
          <p className="text-base font-semibold text-slate-800">{user.fullName}</p>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">
            Email Address
          </span>
          <p className="text-base font-semibold text-slate-800">
            {user.email}
          </p>
        </div>
      </div>

      {isOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            setFile(undefined);
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
}
