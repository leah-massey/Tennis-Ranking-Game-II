import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/login";
import Play from "./pages/play";

function App() {
  return (
    <div className="bg-mineral h-full min-h-screen">
      <header className="App-header">
        <Layout>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Play />} />
            </Routes>
          </Router>
        </Layout>
      </header>
    </div>
  );
}

export default App;
