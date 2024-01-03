import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import AboutMe from "./screens/AboutMe";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutme" Component={AboutMe} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
