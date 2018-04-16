/*
 *
 * QRCode
 *
 */
import { connect } from "react-redux";
import React from "react";



export default class Item1 extends React.Component {
  componentDidMount() {
    // openApp("group", 1262040 + "");
    // openApp("group", this.props.params.gid);
  }
  render() {
    alert("Item1")
    return (
      <div>
        <p>Item1!!!</p>
      </div>
    );
  }
}