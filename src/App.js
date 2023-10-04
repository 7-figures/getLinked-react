
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
     
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
     
    </div>
  );
}

export default App;
