import React from "react";
import Button from "../../../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <div className="w-6/12 mx-auto bg-gray-300">
        <Button
          name="Book Slot"
          type="button"
          onClick={() => {
            navigate("slots");
          }}
        />
      </div> */}
    </div>
  );
};

export default Dashboard;
