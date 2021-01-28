import SeasonDisplay from './SeasonDisplay';
import { Component } from 'react';

// must extend subclass -> extends React.Component
// must define render that return JSX
class App extends Component{
    constructor(props) {
      super(props);

      // state must be assigned with name state
      // can't assgin state by any other name
      this.state = { lat: null, errorMessage: '' };

      // this will run when we create instance
      window.navigator.geolocation.getCurrentPosition(
      ( position ) => { 
        // only place we are calling setState!!!
        // any time you change your setState will cause component  to re-render()
        // this call-back will take some time to run, run after fetching position.
        this.setState( { lat: position.coords.latitude });
      },
      ( err ) => this.setState( { errorMessage: err.message } )
    )
  }

  // render method inside the component is called frequently
  // react will re-render the component anytime you update the state object
  // render will run second time to update the postion on screen
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
                <h1> Loading....</h1>
              </div>
            </SeasonDisplay>
      </div>
    )
  }
}

export default App;
