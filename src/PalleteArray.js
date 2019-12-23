import React, { Component } from 'react';
import PalletePreview from './PalletePreview';
import './PalleteArray.css'

class PalleteArray extends Component {
  render() {
    return(
      <div className="PalleteArray">
        ARRAY
        <PalletePreview />
      </div>
    )
  }
}
export default PalleteArray;
