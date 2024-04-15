import { execPath } from "process";
import { memo, useEffect } from "react";

type Props = {
  counter: number;
};

const Component = memo((props: Props) => {
  useEffect(() => {
    console.log("Component has been rendered!");
  });

  return <h1>{props.counter}</h1>;
});

type DeeperProps = {
  counter: {
    counter: number;
  };
};

const DeeperComponent = memo((props: DeeperProps) => {
  useEffect(() => {
    console.log("DeeperComponent has been rendered!");
  });

  return <h1>{props.counter.counter}</h1>;
});

export { Component, DeeperComponent };
