/*
 *
 * QRCode
 *
 */
import { connect } from "react-redux";
import React from "react";
import Swiper from "react-id-swiper";


export default class Item1 extends React.Component {
  componentDidMount() {
    // openApp("group", 1262040 + "");
    // openApp("group", this.props.params.gid);
  }
  render() {
    alert("Item1")
    return (
      <Swiper>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
    );
  }
}