import "./App.css";
import CardList from "./components/card/CardList";
import CardTailWind from "./components/card/CardTailWind";

function App() {
  return (
    <>
      <CardList>
        <CardTailWind
          primary={true}
          fontSize='text-2xl'></CardTailWind>
        {/* <CardTailWind></CardTailWind> */}
      </CardList>
    </>
  );
}

export default App;
