import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import darklogo from "../assets/darklogo.png";
import lightlogo from "../assets/lightlogo.png";
import iconLightTheme from "../assets/icon-light-theme.svg";
import iconDarkTheme from "../assets/icon-dark-theme.svg";
import iconHideSidebar from "../assets/icon-hide-sidebar.svg";
import iconShowSidebar from "../assets/icon-show-sidebar.svg";
import iconBoard from "../assets/icon-board.svg";
import AddBoardModal from "./AddBoardModal"; // Assuming you have this component
import PromptModal from "./promptModal"; // Assuming you have this component
import { ADD_BOARD } from "../utils/mutations";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Sidebar({
  sidebarVisible,
  setSidebarVisible,
  darkMode,
  toggleDarkMode,
  isLoggedIn,
  userId,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageState, setPageState] = useState("noModal");
  const [addBoard] = useMutation(ADD_BOARD);

  const isPromptOpen = pageState === "promptModal";
  const isNewBoardOpen = pageState === "newBoardModal";

  const openPrompt = () => {
    setPageState("promptModal");
  };

  const openNewBoardModal = () => {
    setPageState("newBoardModal");
  };

  const closeModals = () => {
    setPageState("noModal");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="flex">
        {sidebarVisible && (
          <Dialog
            className="relative z-50 lg:hidden"
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <div className="fixed inset-0 bg-gray-900/80" />
            <div className="fixed inset-0 flex">
              <DialogPanel className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-darkBackground transition duration-300 ease-in-out px-4">
                <div className="flex justify-between p-5">
                  <a href="#">
                    <img
                      className="h-8 w-auto"
                      src={darkMode ? darklogo : lightlogo}
                      alt="Your Company"
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-darkText"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <nav className="flex-1 px-4 pb-4 space-y-1">
                  {/* Add navigation items here if needed */}
                </nav>
                <div className="px-4 pb-4 flex flex-col items-start gap-2">
                  <div
                    className={`w-full h-12 relative cursor-pointer ${
                      darkMode ? "bg-darkDropdown" : "bg-linesLight"
                    }`}
                    onClick={toggleDarkMode}
                  >
                    <div className="w-full h-12 left-0 top-0 absolute rounded-md" />
                    <div className="w-10 h-5 left-[calc(50%-20px)] top-[calc(50%-10px)] absolute">
                      <div className="w-10 h-5 left-0 top-0 absolute bg-primary rounded-xl" />
                      <div
                        className={`w-3.5 h-3.5 left-[3px] top-[3px] absolute bg-white rounded-full transition-transform duration-300 ${
                          darkMode ? "transform translate-x-[18px]" : ""
                        }`}
                      />
                    </div>
                    <img
                      className="w-[15px] h-[15px] left-[85%] top-[calc(50%-7.5px)] absolute"
                      src={iconDarkTheme}
                      alt="dark mode icon"
                    />
                    <img
                      className="w-[18.33px] h-[18.33px] left-[15%] top-[calc(50%-9.165px)] absolute"
                      src={iconLightTheme}
                      alt="light mode icon"
                    />
                  </div>
                  <div
                    className="w-full h-12 relative cursor-pointer flex items-center"
                    onClick={() => setSidebarVisible(!sidebarVisible)}
                  >
                    <div className="flex items-center justify-start w-full">
                      <img
                        className="w-[18px] h-4 mr-2"
                        src={sidebarVisible ? iconHideSidebar : iconShowSidebar}
                        alt="icon"
                      />
                      <div className="text-slate-400 text-[15px]">
                        {sidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}

        {sidebarVisible && (
          <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:border-r-2 lg:border-linesLight lg:bg-white lg:dark:bg-darkBackground lg:pb-4 lg:px-4 z-50">
            <div className="flex items-center justify-between p-5">
              <a href="#">
                <img
                  className="h-8 w-auto"
                  src={darkMode ? darklogo : lightlogo}
                  alt="Your Company"
                />
              </a>
            </div>
            <div className="px-4 pb-4"></div>
            <nav className="flex-1 px-4 pb-4 space-y-1">
              <div className="text-slate-400 text-xs tracking-[2.40px]">
                ALL BOARDS
              </div>
              <div
                className="text-gray-700 dark:text-darkText block rounded-md p-2 text-base font-medium cursor-pointer"
                onClick={isLoggedIn ? openNewBoardModal : openPrompt}
              >
                <div className="flex items-center">
                  <img
                    className="w-[18px] h-4 mr-2 text-primary"
                    src={iconBoard}
                    alt="board icon"
                  />
                  <div className="text-primary text-[15px]">
                    + Create New Board
                  </div>
                </div>
              </div>
              {isPromptOpen && <PromptModal onModalClose={closeModals} />}
              {isNewBoardOpen && (
                <AddBoardModal
                  isOpen={isNewBoardOpen}
                  onClose={closeModals}
                  userId={"66986381d09acfe6f7a8da39"}
                  onAddBoard={addBoard}
                />
              )}
              {/* Map users' existing boards here */}
              {/* {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-gray-700 dark:text-darkText block rounded-md p-2 text-base font-medium"
                >
                  {item.name}
                </a>
              ))} */}
            </nav>
            <div className="px-4 pb-4 flex flex-col items-start gap-2">
              <div
                className={`w-full h-12 relative cursor-pointer ${
                  darkMode ? "bg-darkDropdown" : "bg-linesLight"
                }`}
                onClick={toggleDarkMode}
              >
                <div className="w-full h-12 left-0 top-0 absolute rounded-md" />
                <div className="w-10 h-5 left-[calc(50%-20px)] top-[calc(50%-10px)] absolute">
                  <div className="w-10 h-5 left-0 top-0 absolute bg-primary rounded-xl" />
                  <div
                    className={`w-3.5 h-3.5 left-[3px] top-[3px] absolute bg-white rounded-full transition-transform duration-300 ${
                      darkMode ? "transform translate-x-[18px]" : ""
                    }`}
                  />
                </div>
                <img
                  className="w-[15px] h-[15px] left-[85%] top-[calc(50%-7.5px)] absolute"
                  src={iconDarkTheme}
                  alt="dark mode icon"
                />
                <img
                  className="w-[18.33px] h-[18.33px] left-[15%] top-[calc(50%-9.165px)] absolute"
                  src={iconLightTheme}
                  alt="light mode icon"
                />
              </div>
              <div
                className="w-full h-12 relative cursor-pointer flex items-center"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <div className="flex items-center justify-start w-full">
                  <img
                    className="w-[18px] h-4 mr-2"
                    src={sidebarVisible ? iconHideSidebar : iconShowSidebar}
                    alt="icon"
                  />
                  <div className="text-slate-400 text-[15px]">
                    {sidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!sidebarVisible && (
          <div className="fixed bottom-4">
            <div
              className="w-14 h-12 relative cursor-pointer"
              onClick={() => setSidebarVisible(!sidebarVisible)}
            >
              <div className="w-14 h-12 left-0 top-0 absolute bg-primary rounded-tr-[100px] rounded-br-[100px]" />
              <img
                className="w-4 h-[10.22px] left-[18px] top-[19px] absolute"
                src={iconShowSidebar}
                alt="Show sidebar icon"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Sidebar.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired,
  setSidebarVisible: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
};
