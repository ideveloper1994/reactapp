import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import User from './component/layout/user';
import AdminLogin from './component/layout/adminLogin';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={AdminLogin}/>
            <Route path="/user/" component={User} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
