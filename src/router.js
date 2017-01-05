import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';


// 同城直送
import Send from "./routes/send";

import Card from "./routes/card";

import FlexExample from "./routes/flex";

import New from "./routes/new";

import OldAUI from "./routes/aui";

 import List from "./routes/list";

import Around from "./routes/around";

import MyInput from "./routes/myinput";

import MobileDemo from "./routes/myMobile";

import InfAddress from "./routes/infAddress";


export default function({ history }) {
  return (
    <Router history={history}>
            <Route path="/" component={IndexPage} />
            <Route path="/send" component= {Send} />
            <Route path="/card" component = {Card} />
            <Route path= "/flex" component = {FlexExample} />
            <Route path= "/new"  component = {New} />
            <Route path="/oldAUI" component={OldAUI} />
            <Route path="/list" component={List} />
            <Route path = "/around" component= {Around} />
            <Route  path="/inputIn" component={MyInput}/>
            <Route path="/mobileDemo" component={MobileDemo} />
            <Route path="/inf" component = {InfAddress} />
    </Router>
  );
};
