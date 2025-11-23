import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home/Home";
import Header from "./components/header/Header";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
