import './App.css';
import React from "react";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
          <Route key="technology" exact path="/"> <News showNews={8} apiKey="f75b868ade34455796f828256664044e" category="" country="in" /> </Route>
          <Route key="technology" exact path="/technology"> <News showNews={8} apiKey="f75b868ade34455796f828256664044e" category="technology" country="in" /> </Route>
          <Route key="business" exact path="/business"> <News showNews={8} apiKey="f75b868ade34455796f828256664044e" category="business" country="in" /> </Route>
          <Route key="entertainment" exact path="/entertainment"> <News showNews={8} apiKey="f75b868ade34455796f828256664044e" category="entertainment" country="in" /> </Route>
          <Route key="general" exact path="/general"> <News showNews={8} apiKey="f75b868ade34455796f828256664044e" category="general" country="in" /> </Route>
          <Route key="health" exact path="/health"> <News showNews={8} apiKey="f75b868ade34455796f828256664044e" category="health" country="in" /> </Route>
          <Route key="science" exact path="/science"> <News showNews={8} apiKey="f75b868ade34455796f828256664044e" category="science" country="in" /> </Route>
          <Route key="sports" exact path="/sports"> <News showNews={8} apiKey="f75b868ade34455796f828256664044e" category="sports" country="in" /> </Route>
        </Switch>
      <Footer/>

     
    </Router>
    </>
  );
}

export default App;
