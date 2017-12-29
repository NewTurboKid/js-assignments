import React, { Component } from 'react';
import './Photo.css';
class Photo extends Component {
    render() {
      return (
        <div className="Photo">
        <div className="img">
            <img src = "./images/image.jpg" width="280" height="320" alt ="Nikita"></img>
        </div>
        </div>
      );
    }
  }
  
  export default Photo;