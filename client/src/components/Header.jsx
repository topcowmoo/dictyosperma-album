import { Bars3Icon } from "@heroicons/react/24/outline";
import { MdLogin as LoginIcon, MdLogout as LogoutIcon } from "react-icons/md";
import darklogo from "../assets/darklogo.png";
import lightlogo from "../assets/lightlogo.png";
import PropTypes from "prop-types";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { useState } from "react";
import AuthService from '../utils/auth';

export default function Header({
  sidebarVisible,
  toggleSidebar,
  darkMode,
  toggleDarkMode,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const [pageState, setPageState] = useState("noModal");
  const isLoginModalOpen = pageState === "loginModal";
  const isSignupModalOpen = pageState === "signupModal";

  const openLoginModal = () => {
    setPageState("loginModal");
  };

  const openSignupModal = () => {
    setPageState("signupModal");
  };

  const closeModals = () => {
    setPageState("noModal");
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
  };

  return (
    <div
      className={`top-0 z-40 flex items-center gap-x-4 border-b-2 border-linesLight dark:border-linesLight bg-white dark:bg-darkBackground px-4 sm:gap-x-6 sm:px-6 lg:px-8 py-6 ${
        sidebarVisible ? "lg:pl-64" : ""
      }`}
    >
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 dark:text-darkText lg:hidden"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      {!sidebarVisible && (
        <div className="flex items-center">
          <img
            className="h-8 w-auto"
            src={darkMode ? darklogo : lightlogo}
            alt="Your Company"
          />
        </div>
      )}
      <div className="flex-1" />
      <div className="flex items-center gap-x-4">
        {isLoggedIn && (
          <div className="relative">
            <div className="w-[164px] h-12 bg-secondaryHover rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-[15px]">+ Add New Task</div>
            </div>
          </div>
        )}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            type="button"
            className="w-[80px] h-12 bg-primary rounded-3xl flex items-center justify-center"
          >
            <LogoutIcon className="text-white h-5 w-5" />
          </button>
        ) : (
          <>
            <button
              onClick={openLoginModal}
              type="button"
              className="w-[80px] h-12 bg-primary rounded-3xl flex items-center justify-center"
            >
              <LoginIcon className="text-white h-5 w-5" />
            </button>
          </>
        )}
      </div>
      {isLoginModalOpen && (
        <LoginModal
          onClose={closeModals}
          openSignupModal={openSignupModal} // Pass openSignupModal to LoginModal
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {isSignupModalOpen && (
        <SignupModal
          onClose={closeModals}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
}

Header.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
