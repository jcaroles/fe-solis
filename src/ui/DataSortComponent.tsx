import React, { useState, useEffect } from "react";
import { Data } from "../models/modelData";

interface DataSortProps {
  dataset: Data[];
  setSortedUsers: React.Dispatch<React.SetStateAction<Data[]>>;
}

export const DataSortComponent: React.FC<DataSortProps> = ({
  dataset,
  setSortedUsers,
}) => {
  const [sortUserOption, setSortUserOption] = useState<string>("ID Ascending");

  useEffect(() => {
    const sortedDataSet = [...dataset];
    if (sortUserOption === "ID Ascending") {
      sortedDataSet.sort((A, B) => A.UserId - B.UserId);
    } else if (sortUserOption === "ID Descending") {
      sortedDataSet.sort((A, B) => B.UserId - A.UserId);
    } else if (sortUserOption === "Username Ascending") {
      sortedDataSet.sort((A, B) => A.Username.localeCompare(B.Username));
    } else if (sortUserOption === "Username Descending") {
      sortedDataSet.sort((A, B) => B.Username.localeCompare(A.Username));
    }

    setSortedUsers(sortedDataSet);
  }, [dataset, sortUserOption, setSortedUsers]);

  const onHandleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortUserOption(event.target.value);
  };
  console.log("SORT USERZZZZZZZZ", sortUserOption);
  return (
    <div className="pb-4">
      Sort by:
      <div>
        <select
          value={sortUserOption}
          onChange={onHandleSortChange}
          className="mt-3 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        >
          <option value="ID Ascending">ID Ascending</option>
          <option value="ID Descending">ID Descending</option>
          <option value="Username Ascending">Username Ascending</option>
          <option value="Username Descending">Username Descending</option>
        </select>
      </div>
    </div>
  );
};
