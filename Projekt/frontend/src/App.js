import './style.scss'
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

import UserDetails from './ui/users/UserDetails';

function App() {
  return (
    <Router>
      <div className="Main">
        <section className="Topbar">
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
        </section>
      <Switch>

        <Route path="/users/details/:user_id"><UserDetails/></Route>

        <Route path="/collections"><CollectionList/></Route>
        <Route path="/nfts"><NftList/></Route>
        <Route path="/users"><UserList/></Route>

        <Route path="/dashboard" component={Dashboard}><Dashboard /></Route>
        <Route path="/"><Restart /></Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
