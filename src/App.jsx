import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Service from "./pages/service/Service";
import Login from "./pages/login/Login";
import NotFoundPage from "./components/NotFoundPage";
import Company from "./pages/company/Company";
import Career from "./pages/career/Career";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
