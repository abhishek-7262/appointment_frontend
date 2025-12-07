export interface Slot {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  createdBy: User;
  isBooked: boolean;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export type MenuItem = {
  text: string;
  icon: React.ReactNode;
  link: string;
};
