import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PalleteArray from './PalleteArray';
import './PalleteList.css';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return(
      <div className="PalleteList">
        <div className="PalleteList-sidebar">
          <h1>React Colors</h1>
          {palettes.map(palette => (
            <p>
              <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            </p>
          ))}
        </div>

        <PalleteArray/>
      </div>
    )
  }
}
export default PaletteList;
