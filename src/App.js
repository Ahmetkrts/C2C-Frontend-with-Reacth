
import './App.css';
import AdminPage from './admin/AdminPage';
import Home from './frontend/pages/Home';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/adminpage" component={AdminPage} />
          <Redirect to="/" />
        </Switch>

      </Router>
    </div>

  );

}

export default App;
