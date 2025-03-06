import Container from "./Components/Container";
import contextData from "./context/context";

function App() {
  const user = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  };
  const color = "gray";
  return (
    <contextData.Provider value={{ color, user }}>
      <Container />
    </contextData.Provider>
  );
}

export default App;
