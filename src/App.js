import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/login";
import Play from "./pages/play";

function App() {
  return (
    <div className="bg-mineral h-full min-h-screen">
      <header className="App-header">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<Play />} />
              <Route path="/play" element={<Play />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
