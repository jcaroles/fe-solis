import React, { useState, useEffect } from "react";
import axios from "axios";

import { Data } from "../models/modelData";
import { DataFilterComponent } from "./DataFilterComponent";
import { DataSortComponent } from "./DataSortComponent";

export const DataSearch: React.FC = () => {
  const [dataset, setDataSet] = useState<Data[]>([]);
  const [sortedUsers, setSortedUsers] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/data");
        if (!data) return;
        setDataSet(data);
      } catch (e) {
        console.log("Error occurred", e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="order-1 md:order-2">
          <DataSortComponent
            dataset={dataset}
            setSortedUsers={setSortedUsers}
          />
        </div>
        <div className="w-96 order-2 md:order-1">
          <DataFilterComponent sortedUsers={sortedUsers} />
        </div>
      </div>
    </>
  );
};
