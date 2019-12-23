import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MiniPalette.css';

class MiniPalette extends Component {
  render() {
    let { palette } = this.props;
    console.log(palette)
    return(
      <div className="MiniPalette">
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        {/* <hr /> */}
        <div className="MiniPalette-Array">

          {palette.colors.map(color => (
            <div className="MiniPalette-color" id={color.paletteName} style={{ backgroundColor: color.color }}>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default MiniPalette;
