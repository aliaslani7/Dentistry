import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/Home";
import Header from "./components/header/Header";
import DashboardPannel from "./pages/dashboardPannel/DashboardPannel";
import AboutPage from "./pages/aboutPage/AboutPage";
import BlogMain from "./pages/blog/blogMainPage/BlogPostMain";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";
import BlogIndex from "./pages/blog/blogMainPage/BlogIndex";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Box className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPannel />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:id" element={<BlogMain />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
