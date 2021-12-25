import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Restart from './ui/restart.js';
import Dashboard from './ui/dashboard.js'
import UserList from './ui/users/UserList';
import ProductList from './ui/products/ProductList';


function App() {
  return (
    <Router>
      <div className="Main">
        <nav>
          <ul>
            <li>
              <Link to="/" className="bntLink delete">Restart</Link>
            </li>
            <li>
              <Link to="/dashboard" className="bntLink">Dashboard</Link>
            </li>
            <li>
              <Link to="/users" className="bntLink">Users</Link>
            </li>
            <li>
              <Link to="/products" className="bntLink">Products</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route path="/products"><ProductList/></Route>
        <Route path="/users"><UserList/></Route>

        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/"><Restart /></Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
