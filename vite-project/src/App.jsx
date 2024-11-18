import "./App.css";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#2979ff",
  },
  orange: "#ffa400",
};

function App() {
  // return (
  //   <ThemeProvider theme={theme}>
  //     <GlobalStyles></GlobalStyles>
  //     <CardList>
  //       <Card2 secondary></Card2>
  //     </CardList>
  //   </ThemeProvider>
  // );
return (
    <h1 className="text-3xl font-bold underline text-blue-600">
      Hello world!
    </h1>
  )
}

export default App;
