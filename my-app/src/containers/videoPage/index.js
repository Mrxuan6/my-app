
import { connect } from "react-redux";
import React from "react";
import "./index.css";



export default class Video extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
     <div>
       <div>
       <img src="http://fodm.net/pic/uploadimg/2019-4/2019440424118257.jpg" alt="鬼灭之刃"></img>
       </div>
       <div>
       <a className="jumpButton" href="https://pan.jiningwanjun.com/v/Yi5NTKPF&b=b&w=660&h=500" target="_blank">第一集</a>
       </div>
     </div>
    );
  }
}