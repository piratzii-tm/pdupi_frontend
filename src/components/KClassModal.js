import { KButton, KSelect, KTextInput } from "./index";
import { useEffect, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useBackend } from "../hooks";

const KClassModal = ({ setIsOpen }) => {
  const [className, setClassName] = useState();

  const { trainer } = useBackend();
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainerId, setSelectedTrainerId] = useState();

  const [selectedDay, setSelectedDay] = useState();

  const [selectedHour, setSelectedHour] = useState();

  const [capacity, setCapacity] = useState();

  const hours = [
    { value: "8", label: "8:00" },
    { value: "9", label: "9:00" },
    { value: "10", label: "10:00" },
    { value: "11", label: "11:00" },
    { value: "12", label: "12:00" },
    { value: "13", label: "13:00" },
    { value: "14", label: "14:00" },
    { value: "15", label: "15:00" },
    { value: "16", label: "16:00" },
    { value: "17", label: "17:00" },
    { value: "18", label: "18:00" },
    { value: "19", label: "19:00" },
    { value: "20", label: "20:00" },
  ];

  useEffect(() => {
    const getTrainers = async () => {
      const dbTrainers = await trainer.all();
      setTrainers(
        dbTrainers.map((dbTrainer) => {
          return {
            label: `${dbTrainer.first_name} ${dbTrainer.last_name}`,
            value: dbTrainer.id,
          };
        }),
      );
    };
    getTrainers();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-white rounded-[2.3rem] p-16 ">
        <div className="flex flex-col space-y-9 items-center">
          <text className="text-[4rem] font-medium font-mohave text-mineshaft text-center">
            Add Class
          </text>
          <div className="space-y-4">
            <KTextInput
              placeholder="Class name"
              onChange={setClassName}
              fill
              value={className}
            />
            <KSelect
              placeholder="Instructor"
              options={trainers}
              value={selectedTrainerId}
              setValue={setSelectedTrainerId}
            />
            <KSelect
              placeholder="Hour"
              options={hours}
              value={selectedHour}
              setValue={setSelectedHour}
            />
            <DatePicker
              format="DD-MM-YYYY"
              value={selectedDay}
              disablePast
              onChange={(newValue) => setSelectedDay(newValue)}
              slotProps={{
                field: {
                  clearable: true,
                  onClear: () => setSelectedDay(undefined),
                },
              }}
            />
            <KTextInput
              placeholder="Capacity"
              onChange={setCapacity}
              fill
              value={capacity}
            />
          </div>
          <div className="flex space-x-9">
            <KButton
              title="Save"
              onClick={() => {
                console.log("Save");
              }}
            />
            <KButton
              title="Cancel"
              transparent
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default KClassModal;
