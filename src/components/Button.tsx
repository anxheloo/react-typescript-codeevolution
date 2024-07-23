import React from "react";

type ButtonProps = {
  //   handleClick: () => void; This way is used when our function doesnt takes any parameter or do something.
  //  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;  Here we also pass an event object to our function
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; //Here we also pass id parameter
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
};

export default Button;
