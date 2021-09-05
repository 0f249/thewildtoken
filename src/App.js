import Navbar from "./components/common/navbar";
import Index from "./components/routes/index/index";
import Token from "./components/routes/tokens/tokens";
import Footer from "./components/common/footer";
import About from "./components/routes/about/about";

import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Contact from "./components/routes/contact/contact";
import Http404 from "./components/routes/http404";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js//bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  const currentPath = useLocation()?.pathname;

  return (
    <main className="flex-shrink-0">
      <Navbar currentPath={currentPath} />

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/tokens" component={Token} />
        <Route path="/404" component={Http404} />
        <Route exact path="/" component={Index} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
