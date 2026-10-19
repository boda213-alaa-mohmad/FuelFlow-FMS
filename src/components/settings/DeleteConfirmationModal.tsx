

import { Trash2, X } from "lucide-react";

interface DeleteConfirmType {
  onConfirm: () => void;
  onClose: () => void;
}

export default function DeleteConfirmationModal({
  onConfirm,
  onClose,
}: DeleteConfirmType) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-xl border border-gray-100 space-y-6 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-500 ease-out">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center pt-2">
          <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 border border-rose-100">
            <Trash2 className="w-9 h-9" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-slate-800">Delete Avatar?</h3>

          <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
            Are you sure you want to delete this photo? This action is
            irreversible!
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-200 text-slate-700 font-medium text-sm rounded-2xl hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-3 px-4 bg-rose-500 text-white font-medium text-sm rounded-2xl hover:bg-rose-600 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
