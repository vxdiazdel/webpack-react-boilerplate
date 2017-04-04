import React from 'react';
import ReactDOM from 'react-dom';

import './sass/main.scss';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <h1>Webpack React Boilerplate</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
