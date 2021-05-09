import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Dashboard from './Dashboard';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact> <Home  /> </Route>
        <Route path='/login' exact> <Login  /> </Route>
        <Route path='/signup' exact> <SignUp  /> </Route>
        <Route path='/dashboard' exact> <Header  /> <Dashboard  /> </Route>
        
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;


// #1D1E1F
// #141313