import React, { Component } from 'react';
import Palette from "./Palette";
import { Route, Switch } from 'react-router-dom';
import seedColors from "./seedColors";
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers'

class App extends Component {
  findPalette(id) {
    // matches palette id to the palette from seedColors.js
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/" 
          render={ () => <PaletteList palettes={seedColors}/> } />
        <Route
          exact
          path="/palette/:id"
          render={ routeProps => (
            <Palette
              palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}
        />
        </Switch>
      );
    }
  }

  {/* <div className="App">
  <Palette palette={ generatePalette(seedColors[4]) } />
</div> */}
export default App;
