"use client";

export default function ProfilePage() {
    return (
        <div className="p-6 space-y-6  min-h-screen">

            <h1 className="text-2xl font-semibold">My Profile</h1>

            <div className="bg-white rounded-xl  p-4 flex items-center justify-between shadow-sm">

                <div className="flex items-center gap-4">
                    <img
                        src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="avatar"
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-lg">Nguyen Van A</h2>
                        <p className="text-sm text-gray-500">Email: nguyenvana@gmail.com</p>
                        <p className="text-sm text-gray-400">Ho Chi Mi - Viet Nam</p>
                    </div>
                </div>

            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm space-y-4">

                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Personal Information</h3>

                </div>

                <div className="grid grid-cols-2 gap-6 text-sm">

                    <div>
                        <p className="text-gray-400">Date of Birthday</p>
                        <input type="date" value="01/01/2025" />
                    </div>

                    <div>
                        <p className="text-gray-400">Sex</p>
                        <select value={"male"} name="" id="">
                            <option value="">Male</option>
                            <option value="">Fale</option>
                        </select>
                    </div>

                    <div>
                        <p className="text-gray-400">Address home</p>
                        <p className="font-medium">Thu Duc - Ho Chi Minh - Viet Nam</p>
                    </div>

                    <div>
                        <p className="text-gray-400">Phone</p>
                        <p className="font-medium">+09 345 346 46</p>
                    </div>
                </div>
            </div>


        </div>
    );
}