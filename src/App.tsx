
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage"


const App = () => (
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/:id" element={<BlogPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter> 
);

export default App;
