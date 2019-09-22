import axios from "axios";
import React from "react";
import "./App.css";

class App extends React.Component {
  public state = {
    key1: "",
    key2: "",
  };

  public handleClick = async () => {
    try {
      const response = await axios.get("http://localhost:4567/");
      const data = response.data;
      this.setState({ key1: data.key1, key2: data.key2 });
    } catch (e) {
      alert(e);
    }
  }

  public render() {
    return (
      <div className="App">
        <button style={{ width: 200, height: 35 }} onClick={this.handleClick}>
          Sinatra呼び出し
        </button>
        <p>{this.state.key1}</p>
        <p>{this.state.key2}</p>
      </div>
    );
  }
}

export default App;
