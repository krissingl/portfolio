import React from 'react';
import axios from 'axios';
import Main from './main.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundImgUrl: '',
    };
    this.backgroundGen = this.backgroundGen.bind(this);
  }

  componentDidMount() {
    this.backgroundGen();
  }

  backgroundGen() {
    let url;
    axios.get('http://www.splashbase.co/api/v1/images/random')
      .then((response) => {
        url = response.data.url;
        this.setState({ backgroundImgUrl: url });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Main backgroundGen={this.backgroundGen} backgroundImgUrl={this.state.backgroundImgUrl} />
    );
  }
}

export default App;
