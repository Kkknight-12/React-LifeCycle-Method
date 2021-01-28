import SeasonDisplay from './SeasonDisplay';
import { Component } from 'react';

class App extends Component {

  // we can initialize state without constructor 
  // babel take care of the stuff and adjust or code to suit browser.
  state = { lat: null, errorMessage: '' };

  // official React Documentation prefer not loading data inside constructor function
  // if you keep you data loading code inside componentDidMount your code will look clean and easy to follow
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( { lat: position.coords.latitude }),
      err => this.setState( { errorMessage: err.message } )
    )
  }

  render(){
    if( this.state.errorMessage && !this.state.lat ){
      return (
        <h1>Error: { this.state.errorMessage }</h1>
      )
    }

    if( !this.state.errorMessage && this.state.lat ){
      return (
        <div className="App">
          {/* sending state as prop */}
          <SeasonDisplay lat={ this.state.lat } >
          </SeasonDisplay>
        </div>
      )
    }

    return (
      <div className="App">
        <div>
          <h3> Loading....</h3>
        </div>
      </div>
    )
  }
}

export default App;
