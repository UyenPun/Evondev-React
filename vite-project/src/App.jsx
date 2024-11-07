import "./App.css";

function App() {
  const name = "Uyen";

  const fullName = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
  };

  return (
    <div>
      <p>{name}</p>
      <p>Hello {fullName("Tran", "Uyen")}</p>
    </div>
  );
}

export default App;
