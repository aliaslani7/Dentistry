import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/Home";
import Header from "./components/header/Header";
import DashboardPannel from "./pages/dashboardPannel/DashboardPannel";
import AboutPage from "./pages/aboutPage/AboutPage";
import BlogMain from "./pages/blog/blogMainPage/BlogMain";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPannel />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog/:id" element={<BlogMain />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
