import React from 'react';
import ReactDOM from 'react-dom';

import './sass/main.scss';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
