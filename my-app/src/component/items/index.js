/*
 *
 * QRCode
 *
 */
import { connect } from "react-redux";
import React from "react";

import SimpleCarousel from 'component/swipable/index.js';
// import Swiper from "react-id-swiper";


export default class Item1 extends React.Component {
  componentDidMount() {
    // openApp("group", 1262040 + "");
    // openApp("group", this.props.params.gid);
  }
  render() {
    alert("Item1")
    return (
     <div>
       <SimpleCarousel/>
     </div>
    );
  }
}