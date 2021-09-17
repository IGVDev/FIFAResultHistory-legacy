import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const Standings = () => {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    axios
      .get("http://localhost:3001/standings")
      .then((matches) => setData({ data: matches.data }));
  }, []);

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Points",
      selector: "points",
      sortable: true,
      right: true,
    },
    {
      name: "P",
      selector: "gamesPlayed",
      sortable: true,
      right: true,
    },
    {
      name: "W",
      selector: "gamesWon",
      sortable: true,
      right: true,
    },
    {
      name: "D",
      selector: "gamesTied",
      sortable: true,
      right: true,
    },
    {
      name: "L",
      selector: "gamesLost",
      sortable: true,
      right: true,
    },
    {
      name: "%",
      selector: "winpercent",
      sortable: true,
      right: true,
    },
    {
      name: "GF",
      selector: "goalsFor",
      sortable: true,
      right: true,
    },
    {
      name: "GA",
      selector: "goalsAgainst",
      sortable: true,
      right: true,
    },
    {
      name: "GD",
      selector: "goalDif",
      sortable: true,
      right: true,
    },
  ];
  const matches = data;
  return (
    <DataTable
      title="Standings"
      columns={columns}
      data={matches}
      theme="dark"
    />
  );
};

export default Standings;
