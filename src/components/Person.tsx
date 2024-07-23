import React from "react";

//2. Passing Object as a prop

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
