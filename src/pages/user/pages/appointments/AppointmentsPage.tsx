import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosInstance";

const AppointmentsPage: React.FC = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axiosInstance.post(`/slots/getAll`, {
        startDate: "2025-12-01",
        endDate: "2025-12-05",
        page: 1,
        limit: 10,
      });
      console.log(response.data.data, "allApp");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>AppointmentsPage</div>;
};

export default AppointmentsPage;
