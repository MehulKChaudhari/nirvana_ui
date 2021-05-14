import './App.css';
import { Header } from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
