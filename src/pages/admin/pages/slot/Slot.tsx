import React from "react";
import AppointmentSlotForm from "./components/AppointmentSlotForm";
import Heading from "../../../../components/text/Heading";
import Button from "../../../../components/buttons/Button";

const Slot: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between p-2">
        <Heading str="Slots"></Heading>
        <Button
          name="New Slot"
          type="button"
          className="bg-fuchsia-800"
        ></Button>
      </div>

      <div>
        <AppointmentSlotForm />
      </div>
    </div>
  );
};

export default Slot;
