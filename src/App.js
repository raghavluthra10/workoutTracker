import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact> <Home  /> </Route>
        <Route path='/login' exact> <Login  /> </Route>
        <Route path='/signup' exact> <SignUp  /> </Route>
        <Route path='/dashboard' exact> <Dashboard  /> </Route>
        
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
