/*
 *
 * QRCode
 *
 */
import { connect } from "react-redux";
import React from "react";



export default class Group1 extends React.Component {
  componentDidMount() {
    // openApp("group", 1262040 + "");
    // openApp("group", this.props.params.gid);
  }
  render() {
    alert("group1")
    return (
      <div>
        <p>group1!!!</p>
      </div>
    );
  }
}