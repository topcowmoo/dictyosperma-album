import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Board from "./components/Board";
import { useState } from "react";
import Auth from './utils/auth';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
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
