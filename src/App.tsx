import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import Billing from "./pages/Billing/Billing";
import Content from "./pages/Content/Content";
import Dashboard from "./pages/Dashboard/Dashboard";
import Event from "./pages/Events/Event";
import Job from "./pages/Jobs/Job";
import MachinePage from "./pages/MachinePage";
import Market from "./pages/Markets/Market";
import Operator from "./pages/Operators/Operator";
import Products from "./pages/Products/Products";
import Report from "./pages/Reports/Report";
import Transaction from "./pages/Transaction/Transaction";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/content" element={<Content />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event" element={<Event />} />
        <Route path="/job" element={<Job />} />
        <Route path="/machine" element={<MachinePage />} />
        <Route path="/market" element={<Market />} />
        <Route path="/operator" element={<Operator />} />
        <Route path="/products" element={<Products />} />
        <Route path="/report" element={<Report />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/" element={<MachinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
