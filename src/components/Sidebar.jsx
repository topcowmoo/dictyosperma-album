import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  MdVisibilityOff as VisibilityOffIcon,
  MdVisibility as VisibilityIcon,
  MdLogin as LoginIcon,
  MdDarkMode as MoonIcon,
  MdLightMode as SunIcon,
} from "react-icons/md";
import dark from "../assets/dark.png";
import light from "../assets/light.png";

const navigation = [
  { name: "ALL BOARDS", href: "#" },
  { name: "+ Create New Board", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

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
              <DialogPanel className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-800 transition duration-300 ease-in-out">
                <div className="flex justify-between p-5">
                  <a href="#">
                    <img
                      className="h-8 w-auto"
                      src={darkMode ? dark : light}
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
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="px-4 pb-4">
                  <div className="text-gray-800 dark:text-gray-200 text-lg font-normal mb-4"></div>
                </div>
                <nav className="flex-1 px-4 pb-4 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400",
                        "block rounded-md p-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="px-4 pb-4 flex flex-col items-start gap-2 w-full">
                  <button
                    type="button"
                    className="flex items-center justify-start p-2 text-gray-700 dark:text-gray-200 bg-primary dark:bg-primary hover:bg-primary dark:hover:bg-primary rounded-l-lg w-full"
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
                    className="flex items-center justify-start p-2 text-gray-700 dark:text-gray-200 bg-primary dark:bg-primary hover:bg-primary dark:hover:bg-primary rounded-l-lg w-full"
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

        {sidebarVisible && (
          <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:bg-white lg:dark:bg-gray-800 lg:pb-4">
            <div className="flex items-center justify-between p-5">
              <a href="#">
                <img
                  className="h-8 w-auto"
                  src={darkMode ? dark : light}
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
                    "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400",
                    "block rounded-md p-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="px-4 pb-4 flex flex-col items-start gap-2 w-full">
              <button
                type="button"
                className="flex items-center justify-start p-2 text-gray-700 dark:text-gray-200 bg-primary dark:bg-primary hover:bg-primary dark:hover:bg-primary rounded-l-lg"
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
                className="flex items-center justify-start p-2 text-gray-700 dark:text-gray-200 bg-primary dark:bg-primary hover:bg-primary dark:hover:bg-primary rounded-l-lg"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <VisibilityOffIcon className="h-6 w-6" />
                <span className="ml-2"></span>
              </button>
            </div>
          </div>
        )}

        <div className={`flex-1 ${sidebarVisible ? "lg:pl-72" : ""}`}>
          <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            {!sidebarVisible && (
              <div className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src={darkMode ? dark : light}
                  alt="Your Company"
                />
              </div>
            )}
            <div className="flex-1" />
            <div className="flex items-center gap-x-4">
              <button
                type="button"
                className="rounded-l-lg bg-primary dark:bg-primary px-4 py-2.5 text-sm font-normal text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                + Add New Task
              </button>
              <button
                type="button"
                className="rounded-r-lg bg-primary dark:bg-primary px-4 py-2.5 text-sm font-normal text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-white dark:hover:bg-white flex items-center justify-center"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <LoginIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Content */}</div>
          </main>
        </div>

        {!sidebarVisible && (
          <div className="fixed bottom-4 left-4">
            <div className="group">
              <button
                type="button"
                className="rounded-l-lg p-2 text-gray-700 dark:text-gray-200 bg-primary dark:bg-primary group-hover:dark:bg-white"
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
