import React, { useState } from "react";
import Profile from "../Home/Profile";
import { UserIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";

const UserProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    justify-content: flex-end;
  }
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 640px) {
    height: 2.25rem;
    width: 2.25rem;
  }
`;

const UserIconContainer = styled(UserIcon)`
  @media (min-width: 640px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

// ✅ Use `$showProfile` instead of `showProfile`
const ProfileContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 50;
  width: 100vw;
  max-width: 250px;
  visibility: ${({ $showProfile }) => ($showProfile ? "visible" : "hidden")};
  opacity: ${({ $showProfile }) => ($showProfile ? "1" : "0")};
  transition: all 0.2s ease-in-out;
  pointer-events: ${({ $showProfile }) => ($showProfile ? "auto" : "none")};

  @media (max-width: 640px) {
    position: fixed;
    top: 4.5rem;
    right: 1rem;
    left: 1rem;
    width: auto;
    max-width: none;
    margin: 0 auto;
    transform: ${({ $showProfile }) =>
      $showProfile ? "translateY(0)" : "translateY(-10px)"};
  }
`;

const Overlay = styled.div`
  display: ${({ $showProfile }) => ($showProfile ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 40;

  @media (min-width: 640px) {
    display: none;
  }
`;

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  return (
    <>
      {/* ✅ pass $showProfile instead of showProfile */}
      <Overlay $showProfile={showProfile} onClick={closeProfile} />
      <UserProfileContainer>
        <ToggleButton
          type="button"
          onClick={toggleProfile}
          aria-label="Toggle profile"
        >
          <UserIconContainer />
        </ToggleButton>
        <ProfileContainer
          $showProfile={showProfile}
          onClick={(event) => event.stopPropagation()}
        >
          <Profile />
        </ProfileContainer>
      </UserProfileContainer>
    </>
  );
};

export default UserProfile;
