import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      isCloned: false,
      value1: "test",
      value2: "test2"
    };
  }
  toggleEditable = () => {
    const { isEditable } = this.state;
    this.setState({
      isEditable: !isEditable
    });
  };
  render() {
    const { isEditable, isCloned, value1, value2 } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <input
          type="text"
          disabled={isCloned ? true : !isEditable}
          value={value1}
        />
        <input
          type="text"
          disabled={isCloned ? true : !isEditable}
          value={value2}
        />
        <button onClick={this.toggleEditable}>Toggle Editable</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
