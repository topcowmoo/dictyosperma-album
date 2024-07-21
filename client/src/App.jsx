import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Board from "./components/Board";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Auth from "./utils/auth";
import { GET_CURRENT_USER } from "./utils/queries";
import { UserProvider } from "./utils/UserContext";

function App() {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    if (data && data.me) {
      setUser(data.me);
    }
  }, [data]);

  if (loading) console.log(loading);
  if (error) console.log(error);

  return (
    <div className="App h-screen flex flex-col">
      <UserProvider>
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
                userId={"66986381d09acfe6f7a8da39"}
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
                userId={user ? user._id : null}
              />
            </div>
          )}
          <Board
            boardEmpty={boardEmpty}
            setBoardEmpty={setBoardEmpty}
            isLoggedIn={isLoggedIn}
          />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
