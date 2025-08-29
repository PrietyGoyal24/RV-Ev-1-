import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PollDetailPage from "./pages/PollDetailPage";
import CreatePollPage from "./pages/CreatePollPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import './index.css'

export default function App() {
  const { isAuthenticated, login } = useContext(AuthContext);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/create">Create Poll</Link> |{" "}
        {!isAuthenticated && <button onClick={login}>Login</button>}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/poll/:id" element={<PollDetailPage />} />
        <Route path="/create" element={isAuthenticated ? <CreatePollPage /> : <h2>Login Required</h2>} />
      </Routes>
    </div>
  );
}