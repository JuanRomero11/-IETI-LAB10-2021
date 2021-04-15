import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Drawer from "./components/Drawer";
import axios from 'axios';
import NewTask from "./components/NewTask";
import UserProfile from "./components/UserProfile";

const LoginView = () => (
  <Login />
);
const TaskView = () => (
  <NewTask />
);
const DrawerView = () => (
  <Drawer />
);

const ProfileView = () => (
  <UserProfile />
);

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:8080/user')
        .then(response => response.json())
        .then(data => {
            let userList = [];
            data.items.forEach(function (user) {
                userList.push({ user
                })
            });
            this.setState({userList: userList});
        });

        axios.post('http://localhost:8080/user/login',{
            username: 'xyz',
            password: 'password'
        })
            .then(function (response) {
                console.log(response.data);
                localStorage.setItem("token",response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
}

  render() {

    return (
      <Router>
      <div className="App">
       
          <div>

          <Route exact path="/" component={LoginView}/>
          <Route exact path="/NewTask" component={TaskView}/>
          <Route exact path="/UserProfile" component={ProfileView}/>
          <Route exact path="/Login" component={LoginView}/>
          <Route exact path="/Drawer" component={DrawerView}/>
          </div>
      </div>
  </Router>
    );
  }
}
export default App;