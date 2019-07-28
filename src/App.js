import React, { Component } from "react";

class App extends Component {
  state = {
    calc_result: ""
  };

  calc = cmd => {
    if (cmd == "=") {
      this.setState({
        calc_result: eval(this.state.calc_result)
      });
    } else if (cmd == "AC") {
      this.setState({
        calc_result: ""
      });
    } else {
      this.setState({
        calc_result: this.state.calc_result + cmd + ""
      });
    }
  };

  render() {
    return (
      <div className="container text-center custom-middle">
        <input type="text" name="text" value={this.state.calc_result} />
        <div className="row">
          <div className="col mr-1 bg-danger text-white">MC</div>
          <div className="col mr-1 bg-danger text-white">MR</div>
          <div className="col mr-1 bg-danger text-white">M-</div>
          <div className="col mr-1 bg-danger text-white">M+</div>
          <div
            className="col mr-1 bg-danger text-white"
            onClick={e => this.calc("*")}
          >
            ×
          </div>
        </div>
        <div className="row mt-3">
          <div className="col mr-1 text-white" />
          <div className="col" onClick={e => this.calc("7")}>
            7
          </div>
          <div className="col" onClick={e => this.calc("8")}>
            8
          </div>
          <div className="col" onClick={e => this.calc("9")}>
            9
          </div>
          <div
            className="col mr-1 bg-danger text-white"
            onClick={e => this.calc("+")}
          >
            ＋
          </div>
        </div>
        <div className="row mt-3">
          <div className="col mr-1 text-white" />
          <div className="col" onClick={e => this.calc("4")}>
            4
          </div>
          <div className="col" onClick={e => this.calc("5")}>
            5
          </div>
          <div className="col" onClick={e => this.calc("6")}>
            6
          </div>
          <div
            className="col mr-1 bg-danger text-white"
            onClick={e => this.calc("/")}
          >
            ÷
          </div>
        </div>
        <div className="row mt-3">
          <div className="col mr-1 bg-danger text-white">C</div>
          <div className="col" onClick={e => this.calc("1")}>
            1
          </div>
          <div className="col" onClick={e => this.calc("2")}>
            2
          </div>
          <div className="col" onClick={e => this.calc("3")}>
            3
          </div>
          <div
            className="col mr-1 bg-danger text-white"
            onClick={e => this.calc("-")}
          >
            -
          </div>
        </div>
        <div className="row mt-3">
          <div
            className="col mr-1 bg-danger text-white"
            onClick={e => this.calc("AC")}
          >
            AC
          </div>
          <div className="col" onClick={e => this.calc("0")}>
            0
          </div>
          <div className="col" onClick={e => this.calc("00")}>
            00
          </div>
          <div className="col" onClick={e => this.calc(".")}>
            ・
          </div>
          <div
            className="col mr-1 bg-danger text-white"
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
