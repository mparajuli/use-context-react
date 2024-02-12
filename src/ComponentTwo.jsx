import ComponentThree from "./ComponentThree";
import { useContext } from "react";
import { UserContext } from "./ComponentOne";

function ComponentTwo() {
  const user = useContext(UserContext);
  return (
    <div className="component-container">
      <h1>ComponentTwo</h1>
      <span>Hello again {user}</span>
      <ComponentThree />
    </div>
  );
}

export default ComponentTwo;
