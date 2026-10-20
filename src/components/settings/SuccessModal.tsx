import { CheckCheck, X } from "lucide-react";

interface SuccessModalProps {
  onClose?: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
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
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-2 -left-3 w-3.5 h-3.5 bg-emerald-100 rounded-full opacity-80" />
            <span className="absolute top-1 -right-4 w-2.5 h-2.5 bg-emerald-200 rounded-full opacity-70" />
            <span className="absolute -bottom-1 -left-4 w-2.5 h-2.5 bg-emerald-100 rounded-full opacity-70" />
            <span className="absolute -bottom-2 right-2 w-2 h-2 bg-emerald-200 rounded-full opacity-80" />

            <div className="w-20 h-20 rounded-full bg-emerald-50/80 flex items-center justify-center text-emerald-600 border border-emerald-100/60 shadow-xs">
              <CheckCheck className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-slate-800">Done!</h3>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
            Password updated successfully.
          </p>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 px-4 bg-[#21409A] hover:bg-[#1a337e] text-white font-semibold text-sm rounded-2xl active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
