import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import './Login.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        localStorage.setItem('username', 'juan.romero@correox.com');
        localStorage.setItem('password', 'password');
    }
    componentDidMount() {

        axios.post('http://localhost:8080/user/login', {
            username: 'xyz',
            password: 'password'
        })
            .then(function (response) {
                console.log(response.data);
                localStorage.setItem("token",response.data);
                localStorage.setItem('email', 'juan.romero@correox.com');
                localStorage.setItem('password','password');
                localStorage.setItem('isLoggedIn','false');
            })
            .catch(function (error) {
                console.log(error);
            });
}
    validateData(event) {
        let username = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if (localStorage.getItem("username") === username && localStorage.getItem("password") === password) {
            localStorage.setItem('isLogginIn', 'true');
        }else{
            localStorage.setItem('isLogginIn', 'false');
        }

    }
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar" >
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Task Planner</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">username</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>

                            <div>
                                <Link to="/Drawer">
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit"
                                        onClick={() => this.validateData()}>
                                        LOGIN
                                </Button>
                                </Link>
                            </div>
                            <div className="icon">
                                <Link to="/UserProfile" alignItems="center">
                                    <Button
                                        color="primary"
                                        fullWidth
                                    >
                                        Create Account
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}