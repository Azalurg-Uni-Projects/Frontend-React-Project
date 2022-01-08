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
import NftList from './ui/nfts/NftList';
import CollectionList from './ui/collections/CollectionList';

function App() {
  return (
    <Router>
      <div className="Main">
        <nav>
          <ul>
            <li>
              <Link to="/" className="Btn Delete">Restart</Link>
            </li>
            <li>
              <Link to="/dashboard" className="Btn">Dashboard</Link>
            </li>
            <li>
              <Link to="/users" className="Btn">Users</Link>
            </li>
            <li>
              <Link to="/nfts" className="Btn">Nfts</Link>
            </li>
            <li>
              <Link to="/collections" className="Btn">Collections</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route path="/collections"><CollectionList/></Route>
        <Route path="/nfts"><NftList/></Route>
        <Route path="/users"><UserList/></Route>

        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/"><Restart /></Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
