// SlotCard.tsx
import React from "react";
import type { Slot, User } from "../../../../../../main.interface";
import Button from "@mui/material/Button";

interface SlotCardProps {
  slot: Slot;
  onBook: (id: string) => void;
}

const AppointmentCard: React.FC<SlotCardProps> = ({ slot, onBook }) => {
  return (
    <div className="w-7/12 mx-auto border rounded-lg shadow-md p-4 mb-4 bg-white hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold mb-2">Date: {slot.date}</h2>
      <p className="mb-1">
        Time: {slot.startTime} - {slot.endTime}
      </p>
      <p className="mb-1">Duration: {slot.duration} mins</p>
      <p className="mb-2">
        Created by: {slot.createdBy.name} ({slot.createdBy.email})
      </p>
      <Button
        variant="contained"
        color="primary"
        disabled={slot.isBooked}
        onClick={() => onBook(slot._id)}
      >
        {slot.isBooked ? "Booked" : "Book Slot"}
      </Button>
    </div>
  );
};

export default AppointmentCard;
