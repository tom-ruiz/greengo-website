import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/global.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ActionsPage from "./components/ActionsPage";
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
                <HomePage />
                <ActionsPage />
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
