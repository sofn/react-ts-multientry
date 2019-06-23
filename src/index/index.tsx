import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import {Provider} from 'mobx-react'

import 'antd/dist/antd.css';
import "./index.css"

import AppStore from "./components/stores/AppStore"
import Header from "./components/header/Header";
import Aaa from "./components/test/Aaa";
import Bbb from "./components/test/Bbb";

const store = new AppStore();


class App extends Component<any, any> {
    public componentDidMount() {
        store.fetchUserInfo();
    }

    render() {
        return (
            <Provider className={"app"} store={store}>
                <Router>
                    <Header/>
                    <div className={"app-content"}>
                        <Switch>
                            <Route path="/aaa" render={() => <Aaa/>}/>
                            <Route path="/bbb" render={() => <Bbb/>}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Router>
        <Route path="/" component={App}/>
    </Router>, document.getElementById('root'));
