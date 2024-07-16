import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [boardEmpty, setBoardEmpty] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="App h-screen flex flex-col">
      <Header
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <div className="flex flex-1">
        {sidebarVisible && (
          <div className="w-64">
            <Sidebar
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isLoggedIn={isLoggedIn}
            />
          </div>
        )}
        {!sidebarVisible && (
          <div>
            <Sidebar
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isLoggedIn={isLoggedIn}
            />
          </div>
        )}
        <Board
          boardEmpty={boardEmpty}
          setBoardEmpty={setBoardEmpty}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
}

export default App;
