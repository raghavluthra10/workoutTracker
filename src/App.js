import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Header from './Header';
import Cardio from './Cardio';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact> <Home  /> </Route>
        <Route path='/login' exact> <Login  /> </Route>
        <Route path='/cardio' exact>  <Cardio  /> </Route>
        <Route path='/dashboard' exact> <Dashboard  /> </Route>
        
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;


// #1D1E1F
// #141313