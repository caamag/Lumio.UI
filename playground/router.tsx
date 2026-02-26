import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/header";

//pages
import Home from "./pages/home/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
