import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Sprite from "./components/commons/Sprite/Sprite";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Sprite />
      <ErrorMessage />
    </BrowserRouter>
  );
}

export default App;
