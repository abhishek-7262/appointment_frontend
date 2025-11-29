import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosInstance";
import AppointmentCard from "./components/appointmentCard/AppointmentCard";
import { useSnackbar } from "notistack";

const AppointmentsPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axiosInstance.post(`/slots/getAll`, {
        startDate: "2025-11-01",
        endDate: "2025-12-31",
        page: 1,
        limit: 20,
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

  const handleBook = async (id: string) => {
    try {
      const response = await axiosInstance.post(`/bookings/${id}`);
      console.log(response, "book");
      if (response.status == 201) {
        enqueueSnackbar("Appointment booked", { variant: "success" });
      }
    } catch (error) {}
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
