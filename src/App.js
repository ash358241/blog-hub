import './App.css';
import TopBar from './components/topbar/TopBar.jsx'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single.jsx'
import Write from './pages/write/Write';
import Home from './pages/home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
    <TopBar></TopBar>
    <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">
          {user ? <Home /> :<Login />}
          </Route>
          <Route path="/write">
          {user ? <Write /> : <Register />}
          </Route>
          <Route path="/settings">
          {user ? <Settings /> : <Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route path="/">
            <Home />
          </Route>
    </Switch>
    </Router>
  );
}

export default App;
