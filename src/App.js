import React, {Component} from 'react';
import './index.css';


class App extends Component {
  render(){
    return(
      <div className="container">
        <div id="overlay">
          <div id="overlayText">Loading your image please wait..</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h1>Stable Diffusion App</h1>
          <input 
            autoFocus={true}
            type="text"
            placeholder="Enter your text"
            name="searchQuery"
            id="searchQuery"
          />
          <div>
            <input type="submit" value="Submit"/>
          </div>
          <div>
            <br></br>
            <img
              id="myImage"
              alt="Your Image will appear here"
              className="imageContainer"
            />
          </div>
        </form>
        
      </div>
    )
  }
}
export default App;