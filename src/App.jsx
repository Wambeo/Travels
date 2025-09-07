import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Layout from "./Layout";
import About from "./pages/About";
import Destination from "./pages/Destination";
import Booknow from "./pages/Booknow";
import Nairobi from "./components/Nairobi";
import Kenya from "./components/Kenya";
import Mara from "./components/Mara";
import Uganda from "./components/Uganda";
import Tanzania from "./components/Tanzania";
import Services1 from "./components/Services1";
import Contact from "./pages/Contact";
import SafariArticle from "./components/SafariArticle";
import SafariArticle1 from "./components/SafariArticle1";


function App() {


  return (
    <>
      
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} > 
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/booknow" element={<Booknow />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/1" element={<SafariArticle />} />
             <Route path="/blog/2" element={<SafariArticle1 />} />
            <Route path="/destinations/nairobi" element={<Nairobi />} />
            <Route path="/destinations/mara" element={<Mara />} />
            <Route path="/destinations/kenya" element={<Kenya />} />            
            <Route path="/destinations/uganda" element={<Uganda />} />
            <Route path="/destinations/tanzania" element={<Tanzania />} />
            <Route path="/services/service1" element={<Services1 />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App