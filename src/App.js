import React from "react";

function App() {
  return (
    <div className="container text-center custom-middle">
      <div className="row">
        <div className="col mr-1 bg-danger text-white">MC</div>
        <div className="col mr-1 bg-danger text-white">MR</div>
        <div className="col mr-1 bg-danger text-white">M-</div>
        <div className="col mr-1 bg-danger text-white">M+</div>
      </div>
      <div className="row mt-3">
        <div className="col mr-1 bg-warning text-white">+/-</div>
        <div className="col">7</div>
        <div className="col">8</div>
        <div className="col">9</div>
      </div>
      <div className="row mt-3">
        <div className="col mr-1 bg-warning text-white">%</div>
        <div className="col">4</div>
        <div className="col">5</div>
        <div className="col">6</div>
      </div>
      <div className="row mt-3">
        <div className="col mr-1 bg-danger text-white">C</div>
        <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
      </div>
      <div className="row mt-3">
        <div className="col mr-1 bg-danger text-white">AC</div>
        <div className="col">0</div>
        <div className="col">00</div>
        <div className="col">・</div>
      </div>
    </div>
  );
}

export default App;
