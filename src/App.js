// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
    <div>
      <Wrapper>
        <NavBar />
        <Switch>
            <Route exact path= "/" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </Wrapper>
    </div>
    </Router>
  );
}

export default App;
