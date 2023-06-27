import React from "react";
import { Data } from "../models/modelData";

interface AggregationProps {
  filteredUsers: Data[];
}

export const AggregationComponent: React.FC<AggregationProps> = ({
  filteredUsers,
}) => {
  const totalCount = filteredUsers.length;

  const totalUsernameLength = filteredUsers.reduce(
    (total, user) => total + user.Username.length,
    0
  );

  const averageUsernameLength = Math.floor(
    totalCount > 0 ? totalUsernameLength / filteredUsers.length : 0
  );

  return (
    <div className="pb-4 font-semibold">
      The total count is <span className="font-bold">{totalCount}</span> with
      average username length of{" "}
      <span className="font-bold">{averageUsernameLength}</span>.
    </div>
  );
};
