import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./Components/Navbar1";
import About1 from "./Components/About1";
import Users1 from "./Components/Users1";
import axios from "axios";
import Search1 from "./Components/Search1";
import UserDetail1 from "./Components/UserDetail1";

function App() {
  const [users, setUsers] = useState([]);
  const [showClear, setShowClear] = useState(false);
  const [user, setUser] = useState({});

  const searchName = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsers(res.data.items);
    setShowClear(res.data.items.length > 0);
  };

  const clearUsers = () => {
    setUsers([]);
    setShowClear(false);
  };

  const getDetails = async (login) => {
    const res = await axios.get(`https://api.github.com/users/${login}`);
    setUser(res.data);
  };

  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container">
              <Search1
                searchName={searchName}
                showClear={showClear}
                clearUsers={clearUsers}
              />
              <Users1 users={users} />
            </div>
          }
        />
        <Route
          path="/user/:login"
          element={
            <div className="container">
              <UserDetail1 getDetails={getDetails} user={user} />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="container">
              <About1 />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
