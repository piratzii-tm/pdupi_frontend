export const KColumn = ({ day }) => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const isCurrentDay = new Date(day.date).getDate() === new Date().getDate();

  return (
    <div>
      <div
        className={
          "bg-white w-52 h-12 flex border-x border-b border-gray justify-end p-2"
        }
      >
        <text className={"text-gray font-mohave text-xl mb-5"}>
          <text
            className={`font-bold ${
              isCurrentDay ? "bg-barberry rounded-full py-1 px-2" : ""
            }`}
          >
            {day.date.getDate()}
          </text>{" "}
          {daysOfWeek[day.date.getDay()]}
        </text>
      </div>
      {Object.keys(day.hours).map((hour, index) => {
        let classOfHour = day.hours[`${hour}`];

        let isFull =
          classOfHour &&
          classOfHour.class.occupied_slots === classOfHour.class.max_slots;

        let defaultStyle =
          "bg-yellow-200 w-48 flex flex-col p-4 border-l-4 border-yellow-400";

        let occupiedStyle =
          "bg-red-300 w-48 flex flex-col p-4 border-l-4 border-red-500";

        let defaultText = "text-yellow-400 font-koulen text-2xl";

        let occupiedText = "text-red-500 font-koulen text-2xl";

        return (
          <div
            className={
              "bg-white w-52 h-40 flex p-4 border-x border-b border-gray justify-evenly"
            }
          >
            {classOfHour && (
              <button
                className={isFull ? occupiedStyle : defaultStyle}
                onClick={() => {
                  //TODO open modal for client
                }}
              >
                <text className={isFull ? occupiedText : defaultText}>
                  {classOfHour.class.class_name.toUpperCase()}
                </text>
                <text className={"text-gray font-mohave text-xl"}>
                  {classOfHour.class.instructor_name}
                </text>
                <text className={"text-gray font-mohave text-xl"}>
                  {classOfHour.class.occupied_slots}/
                  {classOfHour.class.max_slots}
                </text>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
