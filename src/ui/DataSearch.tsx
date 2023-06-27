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
  console.log("dataSET", dataset);
  return (
    <div>
      <DataSortComponent dataset={dataset} setSortedUsers={setSortedUsers} />
      <DataFilterComponent sortedUsers={sortedUsers} />
    </div>
  );
};
