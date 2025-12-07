import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axiosInstance from "../../../../../api/axiosInstance";
import { useSnackbar } from "notistack";

type Slot = {
  startTime: string;
  endTime: string;
};

type FormValues = {
  date: string;
  duration: number;
  slots: Slot[];
};

const AppointmentSlotForm: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      date: "",
      duration: 30,
      slots: [{ startTime: "", endTime: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "slots",
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Submitted Data:", data);
    try {
      const response = await axiosInstance.post(`/slots`, data);
      console.log(response, " slotsss");

      if (response.status == 201) {
        enqueueSnackbar("Slots created", { variant: "success" });
      }
    } catch (_) {
      //console.log(error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 bg-white shadow rounded space-y-6"
    >
      <h2 className="text-2xl font-semibold">Create Appointment Slots</h2>

      {/* Day Selector */}
      {/* Date Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Date
        </label>
        <input
          type="date"
          {...register("date", { required: "Date is required" })}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
        />
        {errors.date && (
          <p className="text-red-500 text-sm">{errors.date.message}</p>
        )}
      </div>

      {/* Duration */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Slot Duration (minutes)
        </label>
        <input
          type="number"
          {...register("duration", {
            required: "Duration is required",
            min: 5,
          })}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
        />
        {errors.duration && (
          <p className="text-red-500 text-sm">{errors.duration.message}</p>
        )}
      </div>

      {/* Slots */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Time Slots
        </label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-4 mb-3">
            <input
              type="time"
              {...register(`slots.${index}.startTime`, {
                required: "Start time required",
              })}
              className="border border-gray-300 rounded p-2"
            />
            <span>to</span>
            <input
              type="time"
              {...register(`slots.${index}.endTime`, {
                required: "End time required",
              })}
              className="border border-gray-300 rounded p-2"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ startTime: "", endTime: "" })}
          className="mt-2 text-blue-500 hover:underline"
        >
          + Add Slot
        </button>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Slots
        </button>
      </div>
    </form>
  );
};

export default AppointmentSlotForm;
