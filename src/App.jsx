import Header from "./Components/Templates/Header";
import Footer from "./Components/Templates/Footer";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Blog from './Components/Blog';
import Recipies from './Components/Recipies';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<AboutUs />} />
        <Route path="AboutUs" element={<Contact />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Recipies" element={<Recipies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
