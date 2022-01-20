import './style.scss'
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import i18n from "i18next"
import { initReactI18next, useTranslation } from "react-i18next"

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

const translationEn = require("./language/translationEn.json")
const translationPl = require("./language/translationPl.json")
const translationRu = require("./language/translationRu.json")

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: translationEn},
      pl: {translation: translationPl},
      ru: {translation: translationRu}
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {escapeValue: false}
  })

function App() {

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  const { t } = useTranslation()

  return (
    <Suspense fallback="Loading...">
      <Router>
        <div className="Main">
          <section className="Topbar">
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard" className="Btn">{t("Dashboard")}</Link>
                </li>
                <li>
                  <Link to="/users" className="Btn">{t("Users")}</Link>
                </li>
                <li>
                  <Link to="/nfts" className="Btn">Nfts</Link>
                </li>
                <li>
                  <Link to="/collections" className="Btn">{t("Collections")}</Link>
                </li>
                <li>
                  <select name="language" onChange={handleChangeLanguage}>
                    <option value="en">English</option>
                    <option value="pl">Polski</option>
                    <option value="ru">Pусский</option>
                  </select>
                </li>
              </ul>
            </nav>
          </section>
        <Switch>
          <Route exact path="/collections/create/:id" component={CollectionCreate}/>
          <Route exact path="/nfts/create/:id" component={NftCreate}/>
          <Route exact path="/users/create/" component={UserCreate}/>
          
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
    </Suspense>
  );
}

export default App;
