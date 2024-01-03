import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import AboutMe from "./screens/AboutMe";
import Projects from "./screens/Projects";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutme" Component={AboutMe} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
