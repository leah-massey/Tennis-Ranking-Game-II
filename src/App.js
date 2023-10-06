import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/login";
import Play from "./pages/play";

function App() {
  return (
    <div className="bg-mineral h-full min-h-screen">
      <Router>
        <header className="App-header">
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Play />} />
            </Routes>
          </Layout>
        </header>
      </Router>
    </div>
  );
}

export default App;
