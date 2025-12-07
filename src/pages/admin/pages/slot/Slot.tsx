import React from "react";
import AppointmentSlotForm from "./components/AppointmentSlotForm";

const Slot: React.FC = () => {
  return (
    <div className="w-full">
      {/* <p>Create Slots</p> */}

      <div>
        <AppointmentSlotForm />
      </div>
    </div>
  );
};

export default Slot;
