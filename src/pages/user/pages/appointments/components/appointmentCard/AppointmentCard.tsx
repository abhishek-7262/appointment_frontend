// SlotCard.tsx
import React from "react";
// import { Slot } from "./types";
import Button from "@mui/material/Button";

interface SlotCardProps {
  slot: Slot;
  onBook: (id: string) => void;
}

// types.ts
export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface Slot {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  createdBy: User;
  isBooked: boolean;
}

const AppointmentCard: React.FC<SlotCardProps> = ({ slot, onBook }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 bg-white hover:shadow-lg transition-shadow">
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
