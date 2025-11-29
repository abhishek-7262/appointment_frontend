import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosInstance";
import AppointmentCard from "./components/appointmentCard/AppointmentCard";

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

  const handleBook = (id: string) => {
    setData((prev) =>
      prev?.map((slot) =>
        slot._id === id ? { ...slot, isBooked: true } : slot
      )
    );
    alert("Slot booked successfully!");
  };

  return (
    <div>
      <p>Available Appointment Slots </p>

      <div>
        {data?.map((slot) => {
          return (
            <AppointmentCard
              key={slot._id}
              slot={slot}
              onBook={handleBook}
            ></AppointmentCard>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentsPage;
