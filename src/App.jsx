import { CustomButton } from "./components/ui/CustomButton";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
