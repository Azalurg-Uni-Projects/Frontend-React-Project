import './style.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Restart from './ui/home/restart.js';
import Dashboard from './ui/home/dashboard.js';
import Error from './ui/home/error.js' 

import UserList from './ui/users/UserList';
import NftList from './ui/nfts/NftList';
import CollectionList from './ui/collections/CollectionList';

import UserDetails from './ui/users/UserDetails';
import NftDetails from './ui/nfts/NftDetails';
import CollectionDetails from './ui/collections/CollectionDetails';

import UserCreate from './ui/users/UserCreate';
import NftCreate from './ui/nfts/NftCreate';
import CollectionCreate from './ui/collections/CollectionCreate';

import UserEdit from './ui/users/UserEdit';
import NftEdit from './ui/nfts/NftEdit';
import CollectionEdit from './ui/collections/CollectionEdit';


function App() {
  return (
    <Router>
      <div className="Main">
        <section className="Topbar">
          <nav>
            <ul>
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
        <Route exact path="/collections/create" component={CollectionCreate}/>
        <Route exact path="/nfts/create" component={NftCreate}/>
        <Route exact path="/users/create" component={UserCreate}/>
        
        <Route exact path="/collections/edit/:collection_id" component={CollectionEdit}/>
        <Route exact path="/nfts/edit/:nft_id" component={NftEdit}/>
        <Route exact path="/users/edit/:user_id" component={UserEdit}/>

        <Route exact path="/collections/details/:collection_id" component={CollectionDetails}/>
        <Route exact path="/nfts/details/:nft_id" component={NftDetails}/>
        <Route exact path="/users/details/:user_id" component={UserDetails}/>

        <Route exact path="/collections" component={CollectionList}/>
        <Route exact path="/nfts" component={NftList}/>
        <Route exact path="/users" component={UserList}/>

        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={Restart}/>
        <Route component={Error}/>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
