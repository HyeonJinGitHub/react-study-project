import React from "react";

type Props = {
  counter: 1;
};

class Component extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = props;
  }

  functionCountUp() {
    console.log(this); // undefined
    this.setState((prev: Props) => ({ counter: prev.counter + 1 }));
  }

  ArrowFunctionCountUp = () => {
    console.log(this); // class Component
    this.setState((prev: Props) => ({ counter: prev.counter + 1 }));
  };

  render() {
    return (
      <div>
        {/* 에러 발생 */}
        <button onClick={this.functionCountUp}>일반 함수</button>
        {/* 정상 동작 */}
        <button onClick={this.ArrowFunctionCountUp}>화살표 함수</button>
      </div>
    );
  }
}

export { Component };
