import AllHomePage from "./pages/AllHomePage";
import Exit from "./pages/Exist";
import Footer from "./pages/Footer";
import NoBrain from "./pages/NoBrain";
import NoSleep from "./pages/NoSleep";
import NoSuger from "./pages/NoSuger";
import Social from "./pages/Social";
import About from "./pages/About";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<AllHomePage />} />
      <Route path="/nosleep" element={<NoSleep />} />
      <Route path="/exit" element={<Exit />} />
      <Route path="/nosuger" element={<NoSuger />}/>
      <Route path="/nobrain" element={<NoBrain />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Social />
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
