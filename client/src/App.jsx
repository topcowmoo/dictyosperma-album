import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Define isLoggedIn and setIsLoggedIn
  const [boardEmpty, setBoardEmpty] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App h-screen flex flex-col">
      <Header
        sidebarVisible={sidebarVisible}
        setSidebarOpen={setSidebarVisible}
        darkMode={darkMode}
        isLoggedIn={isLoggedIn} // Pass isLoggedIn to Header
        setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn to Header
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
