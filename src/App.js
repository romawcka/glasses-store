import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {StoreProviver} from "./context-reducer/StoreContext"
import Home from "./pages/Home";
import Basket from "./pages/Basket";

function App() {
  return (
    <StoreProviver>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
      </Router>
    </StoreProviver>
  );
}

export default App;
