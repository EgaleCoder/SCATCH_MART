import React, { useState } from "react";
import Profile from "../Home/Profile";
import { UserIcon } from "@heroicons/react/24/outline";

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleProfile}
        className="p-2 rounded-md flex justify-center items-center gap-1 transition"
      >
        <UserIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="hidden md:inline text-sm font-medium">Profile</span>
      </button>

      {showProfile && (
        <div className="absolute right-0 z-50 w-[90vw] sm:w-80 rounded-md p-4 transition-all">
          <Profile />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
