import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/global.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage";
import Navbar from "./components/Navbar";
import HomeController from  "./components/HomeController";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={(props) => (
              <div>
                <Navbar />
                <HomeController />
                <ScrollToTop />
              </div>
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
