import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TimeAttackPage from "./Components/TimeAttackPage";
import ForzaPage from "./Components/ForzaPage";
import DriftPage from "./Components/DriftPage";
import HomePage from "./Components/HomePage";
import Menu from "./Components/Menu";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
