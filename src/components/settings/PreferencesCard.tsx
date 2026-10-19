export default function PreferencesCard() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
      <h2 className="text-lg font-semibold text-slate-800">
        Account Preferences
      </h2>

      {/* Theme Toggle */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Theme
        </label>
        <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
          <button
            type="button"
            className="px-4 py-1.5 text-xs font-medium rounded-lg bg-white text-slate-800 shadow-sm cursor-pointer"
          >
            ☀️ Light Mode
          </button>
          <button
            type="button"
            className="px-4 py-1.5 text-xs font-medium rounded-lg text-slate-500 cursor-pointer"
          >
            🌙 Dark Mode
          </button>
        </div>
      </div>

      {/* Language Dropdown */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Language
        </label>
        <select
          defaultValue="English (Current)"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF7A59] text-sm bg-white"
        >
          <option value="English (Current)">English (Current)</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
  );
}
