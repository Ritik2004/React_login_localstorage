import React from "react";
import "../styles.css";
const Home = () => {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1>Welcome {localStorage.getItem("name")}</h1>
      <button onClick={logout} className="logout">
        LogOut
      </button>

      <button onClick={deleteAccount} className="delete">
        Delete
      </button>
    </div>
  );
};

export default Home;
