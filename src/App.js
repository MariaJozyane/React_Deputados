import React, { Component } from 'react';

import Hearder from './components/Hearder/index';
import Search from './components/Search/index';

class App extends Component
{


  render()
  {
    return(
      <div className="App">
        <Hearder />
        <Search />
      </div>
    );
  }
}

export default App;
