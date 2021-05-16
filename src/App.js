import "./App.css";
import { Header } from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
// import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="main">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
