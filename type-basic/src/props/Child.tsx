import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Child;

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
