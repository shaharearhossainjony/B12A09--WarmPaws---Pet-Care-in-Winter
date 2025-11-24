import React from "react";
import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <TailChase size="45" speed="1.50" color='purple' />
    </div>
  );
};

export default Loader;
