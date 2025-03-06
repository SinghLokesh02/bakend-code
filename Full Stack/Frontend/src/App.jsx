import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("/api/user").then((response) => {
      setUserData(response.data);
    });
  }, []);
  return (
    <>
      <h1>User Data</h1>
      <h1>{userData.length}</h1>
      <ul>
        {userData.map((user,index) => (
          <li key={index}>{`${user.name} - ${user.age}`}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
