import React, { Component } from "react";

class App extends Component {
  state = {
    formula: "",
    display_result: 0,
    memory: 0,
    calc_component: "", //入力中の数値を一時的に保管
    calc_component_array: []
  };

  // 数値入力
  adnum = num => {
    this.setState({
      formula: this.state.formula + num + "",
      calc_component: this.state.calc_component + num + ""
    });
  };

  // 四則演算(×/+/÷/-/=)
  calc = cmd => {
    if (cmd === "=") {
      this.setState({
        formula: eval(this.state.formula),
        calc_component: ""
      });
    } else {
      if (this.state.calc_component === "") {
        this.setState({
          calc_component_array: this.state.calc_component_array.concat(cmd)
        });
      }

      const cmd_and_num = [this.state.calc_component, cmd];
      this.setState({
        calc_component_array: this.state.calc_component_array.concat(
          cmd_and_num
        ),
        formula: this.state.formula + cmd + "",
        calc_component: ""
      });
    }
  };

  // クリア機能(C/AC)
  clear = cmd => {
    if (cmd === "AC") {
      this.setState({
        formula: ""
      });
    } else if (cmd === "C") {
      if (this.state.calc_component === "") {
        this.state.calc_component_array.pop();
        this.setState({
          formula: this.state.formula.slice(0, -1),
          calc_component_array: this.state.calc_component_array
        });
      } else {
        this.setState({
          calc_component: "",
          formula: this.state.calc_component_array.join("")
        });
      }
    }
  };

  // メモリー機能(M+/M-/MC)
  memory = cmd => {
    if (cmd === "M+") {
      if (this.state.formula == "") {
        return;
      }
      this.setState({
        memory: this.state.memory + eval(this.state.formula),
        formula: "",
        display_result: eval(this.state.formula),
        calc_component_array: [],
        calc_component: ""
      });
    } else if (cmd === "M-") {
      if (this.state.formula == "") {
        return;
      }
      this.setState({
        memory: this.state.memory - eval(this.state.formula),
        formula: "",
        display_result: eval(this.state.formula),
        calc_component_array: [],
        calc_component: ""
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
          value={this.state.formula}
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
            onClick={e => this.adnum("7")}
          >
            7
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.adnum("8")}
          >
            8
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.adnum("9")}
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
            onClick={e => this.adnum("4")}
          >
            4
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.adnum("5")}
          >
            5
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.adnum("6")}
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
            onClick={e => this.adnum("1")}
          >
            1
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.adnum("2")}
          >
            2
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.adnum("3")}
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
            onClick={e => this.adnum("0")}
          >
            0
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.adnum("00")}
          >
            00
          </button>
          <button
            className="btn btn-light col mr-1"
            onClick={e => this.adnum(".")}
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
          <button
            className="col mr-1 btn btn-success"
            onClick={e => this.clear("C")}
          >
            C
          </button>
          <button
            className="col mr-1 btn btn-success"
            onClick={e => this.clear("AC")}
          >
            AC
          </button>
        </div>
      </div>
    );
  }
}

export default App;
