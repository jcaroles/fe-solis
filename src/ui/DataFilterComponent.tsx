import React, { useState } from "react";
import { FixedSizeList } from "react-window";
import { Data } from "../models/modelData";
import { AggregationComponent } from "./AggregationComponent";

const Row: React.FC<{
  index: number;
  style: React.CSSProperties;
  data: Data[];
}> = ({ index, style, data }) => {
  const user = data[index];
  return (
    <div style={style} className="w-80 pb-1" key={user.UserId}>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">UserID: {user.UserId}</h2>
        <h2 className="text-xl font-semibold mb-2">
          Full name: {user.firstname} {user.lastname}
        </h2>
        <h2 className="text-l font-semibold mb-2">Username: {user.Username}</h2>
        <p className="text-gray-600">Email: {user.Email}</p>
        <p className="text-gray-600">Phone Number: {user.PhoneNumber}</p>
      </div>
    </div>
  );
};

export interface DataFilterProps {
  sortedUsers: Data[];
}
export const DataFilterComponent: React.FC<DataFilterProps> = ({
  sortedUsers,
}) => {
  const [inputValue, setInputvalue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputvalue(event.target.value);
  };

  const filteredUsers = sortedUsers?.filter((userData: Data) =>
    userData.Username.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log("DATAINPUTVALUE", inputValue);

  return (
    <>
      <AggregationComponent filteredUsers={filteredUsers} />
      <div className="font-semibold pb-4">Search User</div>
      <label className="relative block">
        <div className="sr-only">Search</div>
      </label>
      <div className="w-96">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="mb-8 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for user..."
          name="search"
        />
      </div>
      <FixedSizeList
        height={1000} // Height container
        width={1000} // Width container
        itemSize={200} // Height of each card
        itemCount={filteredUsers.length} // Total number of items
        itemData={filteredUsers} // Array to be displayed
      >
        {Row}
      </FixedSizeList>
    </>
  );
};
