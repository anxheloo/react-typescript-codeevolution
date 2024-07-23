import React from "react";

//3. Passing Array of Objects as a prop

type PersonListProps = {
  list: {
    first: string;
    last: string;
  }[];
};

const PersonList = ({ list }: PersonListProps) => {
  return (
    <div>
      {list.map((item) => (
        <li key={item.first.concat(item.last)}>
          {item.first} {item.last}
        </li>
      ))}
    </div>
  );
};

export default PersonList;
