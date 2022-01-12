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
import NftDetails from './ui/nfts/NftDetails';
import CollectionDetails from './ui/collections/CollectionDetails';


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
        <Route path="/collections/details/:collection_id" component={CollectionDetails}/>
        <Route path="/nfts/details/:nft_id" component={NftDetails}/>
        <Route path="/users/details/:user_id" component={UserDetails}/>

        <Route path="/collections" component={CollectionList}/>
        <Route path="/nfts" component={NftList}/>
        <Route path="/users" component={UserList}/>

        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/" component={Restart}/>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
