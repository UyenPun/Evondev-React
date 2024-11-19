import "./App.css";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2 secondary></Card2>
      </CardList>
    </>
  );
}

export default App;
