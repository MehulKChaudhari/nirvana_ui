import "./App.css";
import { Header } from "./components/header/Header";
import LandingPage from "./components/landingPage/LandingPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Documentation } from "./components/documenation/Documentation";
import Alert from "./content/alert/Alert";

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
              <Route path="/docs" element={<Documentation />}>
                <Route path="/docs/:alert" component={<Alert/>} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
