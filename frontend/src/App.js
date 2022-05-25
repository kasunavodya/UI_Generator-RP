import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
