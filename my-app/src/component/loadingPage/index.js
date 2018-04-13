/*
 *
 * QRCode
 *
 */

import React from "react";
import "./index.css";


export default class LoadingPage extends React.Component {
  componentDidMount() {
    // openApp("group", 1262040 + "");
    // openApp("group", this.props.params.gid);
  }
  render() {
    alert(666)
    return (
      <div className="ContainerWrapper">
          <duv className="LoadingBox">
          <img style={{display:"block",height:"1.52rem"}} src="http://upstatic.qiecdn.com/common/douyu/loading.gif?v540" />
          <p style={{fontSize:"0.21rem"}}>页面跳转中...</p>
        </duv>
      </div>
    );
  }
}
