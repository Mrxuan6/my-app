// 'use strict';
import React from 'react';
import Swipeable from 'react-swipeable';
import "./index.css"

const IMG_1 = `https://unsplash.it/342/249`;
const IMG_2 = `https://unsplash.it/342/250`;
const IMG_3 = `https://unsplash.it/342/251`;
const IMG_4 = `https://unsplash.it/342/252`;
const IMG_5 = `https://unsplash.it/342/253`;
const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];
const IMG_WIDTH = "342px";
const IMG_HEIGHT = "249px";

const RIGHT = '-1';
const LEFT = '+1';

const buttonStyles = {
  height: IMG_HEIGHT,
  color: "#eeeeee",
  fontSize: "2em",
};

export default class SimpleCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { imageIdx: 0 };
  }

  onSwiped(direction) {
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = this.state.imageIdx + Number(change);
    let newIdx;
    if (adjustedIdx >= IMAGES.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = IMAGES.length - 1
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ imageIdx: newIdx });
  }

  render() {
    const { imageIdx = 0 } = this.state;
    const imageStyles = {
      width: IMG_WIDTH,
      height: IMG_HEIGHT,
      backgroundImage: `url(${IMAGES[imageIdx]})`
    };
    return (
      <div className="swipeContainer">
        <div>Image: {imageIdx + 1}</div>
        <Swipeable 
          className="swipe"
          trackMouse
          style={{ touchAction: 'none' }}
          preventDefaultTouchmoveEvent
          onSwipedLeft={()=>this.onSwiped(LEFT)}
          onSwipedRight={()=>this.onSwiped(RIGHT)}
        >
          <div style={imageStyles} >
            <button
              onClick={()=>this.onSwiped(RIGHT)}
              className="hollow float-left"
              style={buttonStyles}>⇦</button>
            <button
              onClick={()=>this.onSwiped(LEFT)}
              className="hollow float-right"
              style={buttonStyles}>⇨</button>
          </div>
        </Swipeable>
      </div>
    )
  }
}
            
// ReactDOM.render(<SimpleCarousel/>, document.getElementById("mainApp"));

function preload(...images) {
  return images.reduce((acc, img)=>{
    let newImage = new Image();
    newImage.src = img;
    acc.push(newImage);
    return acc;
  }, []);
}
preload.apply(null, IMAGES);
