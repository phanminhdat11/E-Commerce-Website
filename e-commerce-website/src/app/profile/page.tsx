"use client";

export default function ProfilePage() {
  return (
    <div className="space-y-6 pb-20 md:pb-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">My Profile</h1>
        <p className="text-sm text-slate-500">Manage your account information and contact details.</p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5 md:p-6">
        <div className="flex items-center gap-4">
          <img
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80"
            alt="avatar"
            className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
          />
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-slate-900 sm:text-xl">Nguyen Van A</h2>
            <p className="break-all text-sm text-gray-500">Email: nguyenvana@gmail.com</p>
            <p className="text-sm text-gray-400">Ho Chi Minh - Viet Nam</p>
          </div>
        </div>
      </div>

      <div className="space-y-5 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>
        </div>

        <div className="grid grid-cols-1 gap-5 text-sm sm:grid-cols-2 sm:gap-6">
          <div className="space-y-2">
            <label className="block text-gray-400">Date of Birthday</label>
            <input
              type="date"
              defaultValue="2025-01-01"
              className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-2 text-slate-700 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-400">Sex</label>
            <select
              defaultValue="male"
              className="min-h-11 w-full rounded-xl border border-slate-200 px-4 py-2 text-slate-700 outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400">Address home</p>
            <p className="rounded-xl bg-slate-50 px-4 py-3 font-medium text-slate-800">
              Thu Duc - Ho Chi Minh - Viet Nam
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400">Phone</p>
            <p className="rounded-xl bg-slate-50 px-4 py-3 font-medium text-slate-800">
              +09 345 346 46
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
