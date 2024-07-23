import React from "react";

//1. Passing simple props
//7. Making messageCount optional, we dont pass the messageCount prop so we make it optional.
// we also descructure it and gives it a default value, so if we dont pass it and specify it , it takes the default

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name} You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
