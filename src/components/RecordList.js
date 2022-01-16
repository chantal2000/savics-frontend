import React from "react";
import { Heading } from "@chakra-ui/react";
import "./css/record-list.css";
import axios from "axios";

function RecordList() {
  const [records, setRecords] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://savics-backend.herokuapp.com/api/1.0/emr/list")
      .then((res) => {
        setRecords(res.data.records);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginTop: "1em" }}>
      <Heading className="list-heading">List of medical records</Heading>

      {records.map((record) => (
        <div key={record._id} className="record-wrapper">
          {record.firstName} {record.lastName}, ({record.gender}) {record.age} -{" "}
          {record.city} ({record.country})
        </div>
      ))}
    </div>
  );
}

export default RecordList;
