import React from "react";
import { DataSearch } from "./ui/DataSearch";

const WebComponents: React.FC = () => {
  // Master component rendered
  return (
    <>
      <div className="p-8">
        <DataSearch />
      </div>
    </>
  );
};

export default WebComponents;
