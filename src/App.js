import React, { Component } from "react";

class App extends Component {
  state = {
    calc_result: "",
    display_result: 0,
    memory: 0
  };

  // 四則演算
  calc = cmd => {
    if (cmd === "=") {
      this.setState({
        calc_result: eval(this.state.calc_result)
      });
    } else if (cmd === "AC") {
      this.setState({
        calc_result: ""
      });
    } else {
      this.setState({
        calc_result: this.state.calc_result + cmd + ""
      });
    }
  };

  // メモリー機能
  memory = cmd => {
    if (cmd === "M+") {
      this.setState({
        memory: this.state.memory + eval(this.state.calc_result),
        calc_result: "",
        display_result: eval(this.state.calc_result)
      });
    } else if (cmd === "M-") {
      this.setState({
        memory: this.state.memory - eval(this.state.calc_result),
        calc_result: "",
        display_result: eval(this.state.calc_result)
      });
    } else if (cmd === "MC") {
      this.setState({
        memory: 0
      });
    }
  };

  render() {
    return (
      <div className="container text-center custom-middle">
        <div className="row result_field">
          <div className="col font-weight-bold">
            メモリ: {this.state.memory}
          </div>
          <div className="col font-weight-bold">
            計算結果: {this.state.display_result}
          </div>
        </div>
        <input
          type="text"
          name="text"
          className="form-control mb-2"
          value={this.state.calc_result}
        />
        <div className="row">
          <button
            className="col mr-1 btn btn-outline-success"
            onClick={e => this.memory("MC")}
          >
            MC
          </button>
          <button
            className="col mr-1 btn btn-outline-success"
            onClick={e => this.memory("M-")}
          >
            M-
          </button>
          <button
            className="col mr-1 btn btn-outline-success"
            onClick={e => this.memory("M+")}
          >
            M+
          </button>
          <button
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("*")}
          >
            ×
          </button>
        </div>
        <div className="row mt-1">
          <button
            type="button"
            className="btn btn-light col mr-1"
            onClick={e => this.calc("7")}
          >
            7
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("8")}
          >
            8
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("9")}
          >
            9
          </button>
          <button
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("+")}
          >
            ＋
          </button>
        </div>
        <div className="row mt-1">
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("4")}
          >
            4
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("5")}
          >
            5
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("6")}
          >
            6
          </button>
          <button
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("/")}
          >
            ÷
          </button>
        </div>
        <div className="row mt-1">
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("1")}
          >
            1
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("2")}
          >
            2
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("3")}
          >
            3
          </button>
          <button
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("-")}
          >
            -
          </button>
        </div>
        <div className="row mt-1">
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("0")}
          >
            0
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc("00")}
          >
            00
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.calc(".")}
          >
            ・
          </button>
          <button
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("=")}
          >
            =
          </button>
        </div>
        <div className="row mt-1">
          <button className="col mr-1 btn btn-success">C</button>
          <button
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("AC")}
          >
            AC
          </button>
        </div>
      </div>
    );
  }
}

export default App;
