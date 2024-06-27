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
    <div className="App">
      <Header
        sidebarVisible={sidebarVisible}
        setSidebarOpen={setSidebarVisible}
        darkMode={darkMode}
        isLoggedIn={isLoggedIn}
      />
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isLoggedIn={isLoggedIn}
      />
      <div className={`flex-1 ${sidebarVisible ? 'lg:pl-64' : ''}`}>
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{/* Content */}</div>
        </main>
      </div>
    </div>
  );
}

export default App;
