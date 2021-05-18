import "./App.css";
import { Header } from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route, Router } from "react-router-dom";
import Documentation from "./Components/Documenation/Documentation";

function App() {
  return (
    <>
      <div className="view">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="App">
          <Header />
          <div className="main">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/docs" element={<Documentation />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
