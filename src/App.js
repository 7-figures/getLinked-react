
import { BrowserRouter as Router,Link,
  Route,Routes,Switch} from "react-router-dom";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import Registration from "./Component/Registration";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
    
     <Routes> 
   
          <Route path='/' exact Component={Main} />
          <Route exact path='/Registration' Component={Registration} />
          <Route  exact path='/Contact'  Component={Contact}/>
      
      
        </Routes>

     
        <Footer />

  
    </div>
  );
}

export default App;
