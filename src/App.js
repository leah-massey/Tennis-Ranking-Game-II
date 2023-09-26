import "./App.css";
import Header from "./components/header";
import Play from "./pages/play/play";
import Navbar from "./components/Navbar";
import HowToPlayPopup from "./components/howToPlayPopup";

function App() {
  return (
    <div className="app bg-mineral">
      <header className="App-header">
        <Header />
        <Navbar />
        <HowToPlayPopup />
        <Play />
      </header>
    </div>
  );
}

export default App;
