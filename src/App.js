import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Sprite from "./components/commons/Sprite/Sprite";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Sprite />
    </BrowserRouter>
  );
}

export default App;
