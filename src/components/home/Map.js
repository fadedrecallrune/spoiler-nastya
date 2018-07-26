import React, { Component } from "react";
import "./Home.css";

class Map extends Component {
  state = {
    clicked: false
  };

  handleClick = e =>
    this.setState({
      clicked: true
    });

  render() {
    return (
      <div>
        {this.state.clicked ? (
          <div className="map-container">
            <iframe
              className="map2"
              title="map"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACaHaFmTNfvMA7eLAYBrLm1SOJt0FtVfA
&zoom=13&language=ru&q=Соломенская 33"
              allowfullscreen/>
          </div>
        ) : (
          <div className="map-container-black">
            <iframe
              className="map"
              title="map"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACaHaFmTNfvMA7eLAYBrLm1SOJt0FtVfA
    &zoom=13&language=ru&q=Соломенская 33"
              allowfullscreen
            />

            <div className="map-overlay">
              <h1>НАЙТИ НАС НА КАРТЕ</h1>
              <a onClick={this.handleClick} className="button-map">
              <i style={{textDecorationColor:'white'}} class="far fa-2x fa-map"></i>
              </a>

            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Map;
