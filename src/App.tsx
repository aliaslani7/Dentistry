import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/Home";
import Header from "./components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
