import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import './PaletteList.css';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return(
      <div className="PaletteList">
        <div className="PaletteList-sidebar">
          <h1>React Colors</h1>
          {palettes.map(palette => (
            <p>
              <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            </p>
          ))}
        </div>
        <div className="PaletteList-Array">
          {palettes.map(palette => (
              <MiniPalette palette={palette}/>
          ))}
        </div>
      </div>
    )
  }
}
export default PaletteList;
