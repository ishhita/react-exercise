import Counter from "./components/Counter/Counter";
import Twittercharactercounter from "./components/TwitterCharacterCounter/TwitterCharacterCounter";
import PasswordMatching from "./components/PasswordMatching/PasswordMatching";
import DisableButton from "./components/DisableButton/DisableButton";
import Age from "./components/Age/Age";
import Alphanumeric from "./components/Alphanumeric/Alphanumeric";
import ShowPassword from "./components/ShowPassword/ShowPassword";
import Toast from "./components/Toast/Toast";
import AddToCart from "./components/AddToCart/AddToCart";
import SwitchTabs from "./components/SwitchTabs/SwitchTabs";
import Todos from "./components/Todos/Todos";
import DarkMode, { mode } from "./components/DarkMode/DarkMode";
import DesignTool from "./components/DesignTool/DesignTool";
import LikeList from "./components/LikeList/LikeList";
import Footer from "./components/Footer/Footer";

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/Counter">Counter</Link>
            </li>
            <li>
              <Link to="/Twittercharactercounter">Twittercharactercounter</Link>
            </li>
            <li>
              <Link to="/PasswordMatching">Password Matching</Link>
            </li>
            <li>
              <Link to="/DisableButton">DisableButton</Link>
            </li>
            <li>
              <Link to="/Age">Age</Link>
            </li>
            <li>
              <Link to="/Alphanumeric">Alphanumeric</Link>
            </li>
            <li>
              <Link to="/ShowPassword">ShowPassword</Link>
            </li>
            <li>
              <Link to="/Toast">Toast</Link>
            </li>
            <li>
              <Link to="/AddToCart">AddToCart</Link>
            </li>
            <li>
              <Link to="/SwitchTabs">SwitchTabs</Link>
            </li>
            <li>
              <Link to="/Todos">Todos</Link>
            </li>
            <li>
              <Link to="/DarkMode">Dark Mode</Link>
            </li>
            <li>
              <Link to="/DesignTool">DesignTool</Link>
            </li>
            <li>
              <Link to="/LikeList">LikeList</Link>
            </li>
          </ul>
        </nav>
        <br />
        <br />
        <br />
        <br />
        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Counter">
            <Counter />
          </Route>
          <Route path="/Twittercharactercounter">
            <Twittercharactercounter />
          </Route>
          <Route path="/PasswordMatching">
            <PasswordMatching />
          </Route>
          <Route path="/DisableButton">
            <DisableButton />
          </Route>
          <Route path="/Age">
            <Age />
          </Route>
          <Route path="/Alphanumeric">
            <Alphanumeric />
          </Route>
          <Route path="/ShowPassword">
            <ShowPassword />
          </Route>
          <Route path="/Toast">
            <Toast />
          </Route>
          <Route path="/AddToCart">
            <AddToCart />
          </Route>
          <Route path="/SwitchTabs">
            <SwitchTabs />
          </Route>
          <Route path="/Todos">
            <Todos />
          </Route>
          <Route path="/DarkMode">
            <DarkMode />
          </Route>
          <Route path="/DesignTool">
            <DesignTool />
          </Route>
          <Route path="/LikeList">
            <LikeList />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
