import React from "react";

//5. Here we add text between Heading as a children a setting it up

type HeadingProps = {
  children: string;
};

const Heading = ({ children }: HeadingProps) => {
  return <div>{children}</div>;
};

export default Heading;
