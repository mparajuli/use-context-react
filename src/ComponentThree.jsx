import { useContext } from "react";
import { UserContext } from "./ComponentOne";

function ComponentThree() {
  const user = useContext(UserContext);
  return (
    <div className="component-container">
      <h1>ComponentThree</h1>
      <span>Bye {user}</span>
    </div>
  );
}

export default ComponentThree;
