// Import necessary hooks and components from React and other libraries
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react"; // Components for modal dialog
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Icons from Heroicons
import {
  MdVisibilityOff as VisibilityOffIcon,
  MdVisibility as VisibilityIcon,
  MdLogin as LoginIcon,
  MdDarkMode as MoonIcon,
  MdLightMode as SunIcon,
} from "react-icons/md"; // Icons from Material Design Icons
import darklogo from "../assets/darklogo.png"; // Dark mode logo
import lightlogo from "../assets/lightlogo.png"; // Light mode logo

// Navigation links for the sidebar
const navigation = [
  { name: "ALL BOARDS", href: "#" },
  { name: "+ Create New Board", href: "#" },
];

// Utility function to combine class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for controlling the sidebar dialog
  const [sidebarVisible, setSidebarVisible] = useState(true); // State for controlling sidebar visibility
  const [darkMode, setDarkMode] = useState(false); // State for toggling dark mode

  // Effect to add/remove dark mode class to the document
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
        {/* Sidebar for mobile devices */}
        {sidebarVisible && (
          <Dialog
            className="relative z-50 lg:hidden"
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <div className="fixed inset-0 bg-gray-900/80" />
            <div className="fixed inset-0 flex">
              <DialogPanel className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-darkBackground transition duration-300 ease-in-out">
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
                <div className="px-4 pb-4">
                  <div className="text-gray-800 dark:text-darkText text-lg font-normal mb-4"></div>
                </div>
                <nav className="flex-1 px-4 pb-4 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "text-gray-700 dark:text-darkText hover:bg-primary dark:hover:bg-darkPrimary hover:text-white dark:hover:text-indigo-400",
                        "block rounded-md p-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="px-4 pb-4 flex flex-col items-start gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-start p-2 text-gray-700 dark:text-darkText bg-primary dark:bg-darkPrimary hover:bg-primary dark:hover:bg-darkPrimary rounded-l-lg"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {darkMode ? (
                      <SunIcon className="h-6 w-6" />
                    ) : (
                      <MoonIcon className="h-6 w-6" />
                    )}
                    <span className="ml-2"></span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-start p-2 text-gray-700 dark:text-darkText bg-primary dark:bg-darkPrimary hover:bg-primary dark:hover:bg-darkPrimary rounded-l-lg"
                    onClick={() => setSidebarVisible(!sidebarVisible)}
                  >
                    <VisibilityOffIcon className="h-6 w-6" />
                    <span className="ml-2"></span>
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}

        {/* Sidebar for desktop devices */}
        {sidebarVisible && (
          <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:border-r-1 lg:border-neutral-200 lg:bg-white lg:dark:bg-darkBackground lg:pb-4">
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
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "text-gray-700 dark:text-darkText hover:bg-primary dark:hover:bg-darkPrimary hover:text-white dark:hover:text-indigo-400",
                    "block rounded-md p-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="px-4 pb-4 flex flex-col items-start gap-2">
              <button
                type="button"
                className="inline-flex items-center justify-start p-2 text-gray-700 dark:text-darkText bg-primary dark:bg-darkPrimary hover:bg-primary dark:hover:bg-darkPrimary rounded-l-lg"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
                <span className="ml-2"></span>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-start p-2 text-gray-700 dark:text-darkText bg-primary dark:bg-darkPrimary hover:bg-primary dark:hover:bg-darkPrimary rounded-l-lg"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <VisibilityOffIcon className="h-6 w-6" />
                <span className="ml-2"></span>
              </button>
            </div>
          </div>
        )}

        {/* Main content area */}
        <div className={`flex-1 ${sidebarVisible ? "lg:pl-64" : ""}`}>
          <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b-1 border-neutral-200 dark:border-darkPrimary bg-white dark:bg-darkBackground px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 dark:text-darkText lg:hidden"
              onClick={() => setSidebarOpen(true)}
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
              <button
                type="button"
                className="rounded-l-lg bg-primary dark:bg-darkPrimary px-4 py-2.5 text-sm font-normal text-gray-900 dark:text-darkText shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-darkPrimary hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                + Add New Task
              </button>
              <button
                type="button"
                className="rounded-r-lg bg-primary dark:bg-darkPrimary px-4 py-2.5 text-sm font-normal text-gray-900 dark:text-darkText shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-darkPrimary hover:bg-white dark:hover:bg-darkPrimary flex items-center justify-center"
                // onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <LoginIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Content */}</div>
          </main>
        </div>

        {/* Button to open sidebar when it's closed */}
        {!sidebarVisible && (
          <div className="fixed bottom-4 left-4">
            <div className="group">
              <button
                type="button"
                className="rounded-l-lg p-2 text-gray-700 dark:text-darkText bg-primary dark:bg-darkPrimary"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <VisibilityIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
