import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App h-screen flex flex-col">
      <Header
        sidebarVisible={sidebarVisible}
        setSidebarOpen={setSidebarVisible}
        darkMode={darkMode}
        isLoggedIn={isLoggedIn}
      />
      <div className="flex flex-1">
        <Sidebar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          isLoggedIn={isLoggedIn}
        />
        <div className={`flex-1 flex flex-col`}>
          <main className="flex-1 bg-gray-200">
            <div className="h-full flex items-center">
              <div className="text-center bg-opacity-50 flex-1">
                content here
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
