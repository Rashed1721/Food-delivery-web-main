import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogInFrom from './components/LogIn/LogInFrom/LogInFrom';
import PasswordReset from './components/LogIn/PasswordReset/PasswordReset';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/login">
            <LogInFrom></LogInFrom>
          </Route>
          <Route exact path="/passwordreset">
            <PasswordReset></PasswordReset>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
