import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/Home";
import Header from "./components/header/Header";
import DashboardPannel from "./pages/dashboardPannel/DashboardPannel";
import AboutPage from "./pages/aboutPage/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPannel />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
