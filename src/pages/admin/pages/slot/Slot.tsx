import React, { useEffect, useState } from "react";
import Heading from "../../../../components/text/Heading";
import Button from "../../../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";
import CustomTable from "../../../../components/table/CustomTable";

const columns = [
  { label: "Date", field: "date" },
  { label: "Time", field: "startTime" },
  { label: "Duration (mins)", field: "duration" },
  { label: "create At", field: "createdAt" },

  {
    label: "Booked",
    field: "isBooked",
    render: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium
          ${
            row.isBooked == true
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }
        `}
      >
        {row.isBooked ? "Yes" : "No"}
      </span>
    ),
  },
];

const Slot: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalDocs, setTotalDocs] = useState(0);

  const getData = async () => {
    try {
      const response = await axiosInstance.post(`/slots/getAll`, {
        //   "startDate": "2025-12-01",
        //   "endDate": "2025-12-05",
        page: 1,
        limit: 2,
      });
      console.log(response.data, " slotss");
      setData(response.data.data);
      setTotalDocs(response.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between p-2">
        <Heading str="Slots"></Heading>
        <Button
          name="New Slot"
          type="button"
          className="bg-fuchsia-800"
          onClick={() => navigate("newSlot")}
        ></Button>
      </div>

      <Heading str="Booked Slots"></Heading>
      <div className="w-full m-2">
        <CustomTable columns={columns} rows={data} keyField="id"></CustomTable>
      </div>
    </div>
  );
};

export default Slot;
