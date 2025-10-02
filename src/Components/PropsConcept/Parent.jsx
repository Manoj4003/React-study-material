import React from "react";

const Parent = (props) => {
  const { name } = props;   // receiving "name"
  const text = `This is a ${name} car`;

  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default Parent;
