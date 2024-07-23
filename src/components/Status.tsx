import React from "react";

// 4.We can specify to accept predefined strings;
// so if we pass the message prop other than these specified strings it throws us an error

type StatusProps = {
  message: "loading" | "success" | "error";
};

const Status = ({ message }: StatusProps) => {
  let msg;

  if (message === "loading") {
    msg = "Loading...";
  } else if (message === "success") {
    msg = "Data fetched successfully!";
  } else if (message === "error") {
    msg = "Error fetching data";
  }

  return <div>Status - {msg}</div>;
};

export default Status;
