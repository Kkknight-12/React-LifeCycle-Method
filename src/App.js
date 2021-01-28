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
        <div className="App">
          <SeasonDisplay>
            <div>Error: {this.state.errorMessage}</div>
          </SeasonDisplay>
        </div>
      )
    }

    if( !this.state.errorMessage && this.state.lat ){
      return (
        <div className="App">
          <SeasonDisplay>
            <div>Latitude: {this.state.lat}</div>
          </SeasonDisplay>
        </div>
      )
    }

    return (
      <div className="App">
            <SeasonDisplay>
              <div>
                <h3> Loading....</h3>
              </div>
            </SeasonDisplay>
      </div>
    )
  }
}

export default App;
