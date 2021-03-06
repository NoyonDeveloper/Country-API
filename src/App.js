import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import CountryDetile from './Components/CountryDetile/CountryDetile';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/country/:countryId'>
            <CountryDetile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
