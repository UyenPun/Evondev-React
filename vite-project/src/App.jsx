import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div>
      <Button>Primary</Button>
      <Button className='button--secondary'>Secondary</Button>
    </div>
  );
}

export default App;
