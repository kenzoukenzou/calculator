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
    } else if (cmd === "MR") {
    } else if (cmd === "MC") {
      this.setState({
        memory: 0
      });
    }
  };

  render() {
    return (
      <div className="container text-center custom-middle">
        <div className="row mb-3">
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
          <div
            className="col mr-1 btn btn-outline-success"
            onClick={e => this.memory("MC")}
          >
            MC
          </div>
          <div className="col mr-1 btn btn-outline-success">MR</div>
          <div
            className="col mr-1 btn btn-outline-success"
            onClick={e => this.memory("M-")}
          >
            M-
          </div>
          <div
            className="col mr-1 btn btn-outline-success"
            onClick={e => this.memory("M+")}
          >
            M+
          </div>
          <div
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("*")}
          >
            ×
          </div>
        </div>
        <div className="row mt-3">
          <div className="col mr-1 text-white" />
          <div className="btn btn-light col mr-1" onClick={e => this.calc("7")}>
            7
          </div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc("8")}>
            8
          </div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc("9")}>
            9
          </div>
          <div
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("+")}
          >
            ＋
          </div>
        </div>
        <div className="row mt-3">
          <div className="col mr-1 text-white" />
          <div className="btn btn-light col mr-1" onClick={e => this.calc("4")}>
            4
          </div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc("5")}>
            5
          </div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc("6")}>
            6
          </div>
          <div
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("/")}
          >
            ÷
          </div>
        </div>
        <div className="row mt-3">
          <div className="col mr-1 btn btn-success">C</div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc("1")}>
            1
          </div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc("2")}>
            2
          </div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc("3")}>
            3
          </div>
          <div
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("-")}
          >
            -
          </div>
        </div>
        <div className="row mt-3">
          <div
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("AC")}
          >
            AC
          </div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc("0")}>
            0
          </div>
          <div
            className="btn btn-light col mr-1"
            onClick={e => this.calc("00")}
          >
            00
          </div>
          <div className="btn btn-light col mr-1" onClick={e => this.calc(".")}>
            ・
          </div>
          <div
            className="col mr-1 btn btn-success"
            onClick={e => this.calc("=")}
          >
            =
          </div>
        </div>
      </div>
    );
  }
}

export default App;
