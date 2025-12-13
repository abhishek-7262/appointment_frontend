import React from "react";
import AppointmentSlotForm from "../AppointmentSlotForm";
import Heading from "../../../../../../components/text/Heading";

const NewSlot: React.FC = () => {
  return (
    <div>
      <Heading str="New Slot"></Heading>
      <AppointmentSlotForm></AppointmentSlotForm>
    </div>
  );
};

export default NewSlot;
