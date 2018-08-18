import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    img: [],
    url: "",
    loading: true
  };
  componentDidMount() {
    const APP_ID =
      "b81824007a16b43e9eb7a1344d78513e03ffa9d7691c27c86668f6ae5c1890dd";

    fetch("https://api.unsplash.com/photos/random/?client_id=" + APP_ID)
      .then(res => res.json())
      .then(data => {
        this.setState({
          img: data,
          url: data.urls.full,
          loading: false
        });
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }
  render() {
    return (
      <div className="main-content">
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <img src={this.state.url} key={this.state.img.id} />
        )}
      </div>
    );
  }
}

export default App;
