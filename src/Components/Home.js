import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const {
      Count,
      onChange,
      Increment,
      Decrement,
      IncrementAsync,
      DecrementAsync
    } = this.props;
    return (
      <div>
        <h3>HOME</h3>
        Clicked the Count {""}
        <input type="text" value={Count} onChange={onChange} />
        Times
        <ul>
          <li>
            <button onClick={Increment}>INCREMENT</button>
            {"  "}
            <button onClick={Decrement}>DECREMENT</button>
          </li>

          <li>
            <button onClick={IncrementAsync}>INCREMENTASYNC</button>
            {"  "}
            <button onClick={DecrementAsync}>DECREMENTASYNC</button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { Count: state.count };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e =>
      dispatch({ type: "ON_CHANGE", payload: Number(e.target.value) }),
    Increment: e => {
      dispatch({ type: "INCREMENT_REQ" });
      dispatch({ type: "ON_INCREMENT" });
    },
    Decrement: () => {
      dispatch({ type: "DECREMENT_REQ" });
      dispatch({ type: "ON_DECREMENT" });
    },
    IncrementAsync: () =>
      setTimeout(() => {
        dispatch({ type: "ON_INCREMENT" });
      }, 3000),
    DecrementAsync: () =>
      setTimeout(() => {
        dispatch({ type: "ON_DECREMENT" });
      }, 3000)
  };
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
