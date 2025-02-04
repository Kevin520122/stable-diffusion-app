import React, {Component} from 'react';
import './index.css';
import axios from 'axios';

class App extends Component {
  handleSubmit(e){
    e.preventDefault();
    const prompt = e.target.searchQuery.value;
   
    console.log(prompt);
    console.log(process.env.NODE_ENV);

    document.querySelector('#overlay').style.display = 'block';

    const api = process.env.NODE_ENV === 'development' ? '/test/stabled' : 'https://z94hdbw4bg.execute-api.us-west-2.amazonaws.com/test/stabled';

    const data = { data: prompt };

    axios({
      method: 'POST',
      data: JSON.stringify(data),
      headers: { 
        'Content-Type': 'application/json'
      },
      url: api
    })
      .then((response) => {
        console.log(response);
        //Render the image
        const el = document.querySelector('#myImage');
        el.setAttribute('src', response.data.body);
        //After rendering the image, hide the overlay
        setTimeout(() => {
          document.querySelector('#overlay').style.display = 'none';
          const elem = document.getElementById('searchQuery');
          elem.value = '';
          elem.focus();
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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