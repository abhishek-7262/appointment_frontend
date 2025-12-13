import React from "react";
import type { Itext } from "../../main.interface";

const Heading: React.FC<Itext> = ({ str }) => {
  return (
    <div>
      <p className="p-2 text-xl font-semibold text-fuchsia-800">{str}</p>
    </div>
  );
};

export default Heading;
