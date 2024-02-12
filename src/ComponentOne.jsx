import { useState } from "react";
import ComponentTwo from "./ComponentTwo.jsx";
import { createContext } from "react";

export const UserContext = createContext();

function ComponentOne() {
  const [user, setUser] = useState("Guest");

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="container">
      <h1>useContext() demonstration:</h1>
      <div className="component-container">
        <h2>ComponentOne</h2>
        <span>Hey {user}</span>
        <UserContext.Provider value={user}>
          <ComponentTwo />
        </UserContext.Provider>
      </div>
      <label>Enter your name:</label>
      <input
        className="input-container"
        type="text"
        value={user}
        onChange={handleInputChange}
        placeholder="Type your name here..."
      />
    </div>
  );
}

export default ComponentOne;
