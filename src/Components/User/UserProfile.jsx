import React, { useState } from "react";
import Profile from "../Home/Profile";
import { UserIcon } from "@heroicons/react/24/outline";

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="relative group">
      <UserIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <div className="absolute right-15 z-50 w-[90vw] max-w-sm sm:w-60 rounded-md p-4 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        <Profile />
      </div>
    </div>
  );
};

export default UserProfile;
