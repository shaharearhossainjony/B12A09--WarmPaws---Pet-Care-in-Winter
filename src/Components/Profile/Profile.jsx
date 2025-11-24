import React from 'react';
import { Link } from 'react-router';

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <title>Profile</title>
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
       
        <div className="flex justify-center mb-5">
          <img
            src="https://i.ibb.co.com/87D4sxCm/profile.jpg"
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-600 shadow-md"
          />
        </div>

        
        <h2 className="text-2xl font-bold text-gray-800">
          Md. Shaharear Hossain Jony
        </h2>

        {/* User Email */}
        <p className="text-gray-600 mt-1">shaharearhossainjony@gmail.com</p>

        {/* Update Button */}
        <Link
          to={"/profile/update"}
          className="text-center mt-6 w-full font-bold bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg text-lg transition inline-block"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#6A5ACD] to-[#836FFF] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    // <div>
    //   this is profile section
    //   <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
    //     Welcome to WarmPaws 🐾
    //   </h2>
    //   <div>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#6C63FF] to-[#A78BFA] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#5BC0EB] to-[#1CABE2] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#89CFF0] to-[#B0E0E6] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00BFFF] to-[#87CEFA] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00CED1] to-[#40E0D0] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#4682B4] to-[#B0C4DE] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#5F9EA0] to-[#AFEEEE] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#ADD8E6] to-[#E0FFFF] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>

    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#6A00F4] to-[#B66DFF] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#5F2EEA] to-[#A293FF] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#4F46E5] to-[#3B82F6] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#0891B2] to-[#06B6D4] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#FF2D55] to-[#FF6B81] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#EC4899] to-[#F43F5E] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //     <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#FFBB00] to-[#FF7700] bg-clip-text text-transparent">
    //       Welcome to WarmPaws 🐾
    //     </h2>
    //   </div>
    // </div>