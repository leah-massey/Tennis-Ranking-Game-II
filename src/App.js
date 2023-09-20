import "./App.css";
import Header from "./components/header";
import Play from "./pages/play/play";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navbar />
        <Play />
      </header>
    </div>
  );
}

export default App;
