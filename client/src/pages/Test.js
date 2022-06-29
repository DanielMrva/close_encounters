import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

export default function Test() {
  const { loading, err, data } = useQuery(QUERY_USER);

  if (loading) return "loading...";
  if (err) return err.message;
  return (
    <div className="create-post">
      <h6>you are currently in</h6>
      <ul>
        {data.users.map((user, index) => {
          return <li key={index}>{user.email}</li>;
        })}
      </ul>
    </div>
  );
}
