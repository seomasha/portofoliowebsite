import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import AboutMe from "./screens/AboutMe";
import Projects from "./screens/Projects";
import ThankYou from "./screens/ThankYou";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutme" Component={AboutMe} />
          <Route path="/projects" Component={Projects} />
          <Route path="/thankyou" Component={ThankYou} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
