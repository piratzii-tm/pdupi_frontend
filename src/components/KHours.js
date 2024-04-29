export const KHours = () => {
  let hours = [
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
  ];

  return (
    <div>
      <div
        className={
          "bg-white w-40 h-12 flex border-x border-b border-gray justify-end p-2"
        }
      ></div>
      {hours.map((hour, index) => (
        <div
          className={
            "bg-white w-40 h-40 flex p-4 border-x border-b border-gray justify-end"
          }
        >
          <text className={"text-gray font-mohave text-xl mb-5"}>{hour}</text>
        </div>
      ))}
    </div>
  );
};
