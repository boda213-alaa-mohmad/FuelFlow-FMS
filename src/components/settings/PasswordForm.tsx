export default function PasswordForm() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-800">Change Password</h2>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Current Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF7A59] text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          New Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF7A59] text-sm"
        />
      </div>

      <button
        type="button"
        className="px-5 py-2.5 bg-[#FF7A59] text-white text-sm font-medium rounded-xl hover:bg-[#e06849] transition"
      >
        Update Password
      </button>
    </div>
  );
}
