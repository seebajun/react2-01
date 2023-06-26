import "bootstrap/dist/css/bootstrap.min.css";
import HeadBar from "./Components/nav/HeadBar.jsx";
import Body from "./Views/body/Body.jsx";
import Formulario from "./Views/forms/Formulario.jsx";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeadBar />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/input" element={<Formulario />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
