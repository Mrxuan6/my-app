/*
 *
 * QRCode
 *
 */
import { connect } from "react-redux";
import React from "react";
import Group1 from 'component/group/index.js';
import {Route,Link,Switch,Redirect,BrowserRouter as Router} from "react-router-dom";



export default class ListPage extends React.Component {
  componentDidMount() {
    // openApp("group", 1262040 + "");
    // openApp("group", this.props.params.gid);
  }
  render() {
    alert(555)
    return (
      <div>
        <Link to={"/cc/ee"}>goup1</Link>
        <p>ListPage!!!</p>
        <Route path={"/cc/ee"}  component={Group1}/>
      </div>
    );
  }
}