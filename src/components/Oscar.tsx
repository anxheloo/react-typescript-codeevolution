import React from "react";

//6. Passing a component as a children inside Oscar

/*
WAY - 1
type OscarProps = {
  children: React.ReactNode;
};

const Oscar = ({ children }: OscarProps) => {
  return <div>{children}</div>;
};

*/

/*
 WAY - 2
const Oscar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

*/

//  WAY - 3
type OscarProps = {
  children: React.ReactNode;
};

const Oscar: React.FC<OscarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Oscar;
