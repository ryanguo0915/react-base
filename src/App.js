import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/nav-bar';
import { StaticData } from './constant/data';
import Home from './components/Home';
import Profile from './components/Profile';
import Earthquake from './components/Earthquake'
import "./App.css";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  const {site, profile, data} = StaticData;
  console.log(StaticData)
  return (
    <Router>
      <div>
        <NavBar site={site} firstName={profile.firstName}/>
        <div className="page__wrapper">
          <Switch>
            <Route exact path="/" render={routeProps =><Home data={data} {...routeProps} />}>
            </Route>
            <Route path="/profile" render={routeProps =><Profile profile={profile} {...routeProps} />}>
            </Route>
            <Route path="/earthquake/:slugifiedId" render={routeProps =><Earthquake features={data.features} {...routeProps} />}>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
