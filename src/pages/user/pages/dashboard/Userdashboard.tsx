import { Card } from "./components/Card";
import { CardContent } from "./components/CardContent";
import Button from "../../../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

// Types for bookings
interface BookingEntry {
  date: string;
  time: string;
  status: string;
}

interface DashboardProps {
  userName: string;
  bookedSlots: BookingEntry[];
  bookingHistory: BookingEntry[];
  onBookNewSlot?: () => void;
}

export default function Dashboard({
  userName,
  bookedSlots,
  bookingHistory,
}: //onBookNewSlot,
DashboardProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full p-6 bg-gradient-to-b from-yellow-200 via-orange-200 to-rose-200 text-gray-900">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between p-1 rounded-2xl shadow bg-gradient-to-r from-yellow-300 to-orange-300">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-lg font-medium">{userName}</p>
        </header>

        {/* Booked Slots */}
        <Card className="rounded-2xl bg-blue-50 shadow-xl">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Booked Slots</h2>
              <Button
                name="New Appointment"
                type="button"
                onClick={() => navigate("/user/available-appointments")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow"
              />
            </div>

            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 font-semibold">Date</th>
                  <th className="py-2 font-semibold">Time</th>
                  <th className="py-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookedSlots?.map((item, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-2">{item.date}</td>
                    <td className="py-2 font-medium">{item.time}</td>
                    <td className="py-2 text-blue-700 font-medium">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Booking History */}
        <Card className="rounded-2xl bg-yellow-50 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Booking History</h2>

            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 font-semibold">Date</th>
                  <th className="py-2 font-semibold">Time</th>
                  <th className="py-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingHistory?.map((item, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-2">{item.date}</td>
                    <td className="py-2 font-medium">{item.time}</td>
                    <td
                      className={`py-2 font-medium ${
                        item.status.toLowerCase() === "cancelled"
                          ? "text-red-600"
                          : "text-green-700"
                      }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
