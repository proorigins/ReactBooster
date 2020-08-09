import React from 'react';
import './App.scss';
import {BrowserRouter as Router, withRouter, Route, Link} from 'react-router-dom';
import store from "./store/store";
import {Provider} from "react-redux";

const App = ({}) => {
    return (

        <div className="App">
            <Route path={"/home"} exact={true} render={(props: any) => {
                return (
                    <div>Home</div>
                )
            }}/>
            <Route path={"/Login"} exact={true} render={(props: any) => {
                return (
                    <div>Login</div>
                )
            }}/>

            {/* //links    */}
            <Link to={"/home"}>Home</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    );
};

const AppWithRouter = withRouter(App);

const AppWithProvider = () => (
    <Provider store={store}>
        <Router>
            <AppWithRouter />
        </Router>
    </Provider>
);

export default AppWithProvider;
