import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../constants/theming";
import { useBackend } from "../hooks";
import { KColumn } from "./KColumn";
import { KHours } from "./KHours";
import { monthStrings } from "../constants";

const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const constructClasses = (classes) => {
  let keys = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return Object.fromEntries(
    keys.map((key) => [
      key,
      classes.filter((item) => item.hour === key)[0] ?? null,
    ]),
  );
};

export const KCalendar = () => {
  const { class: classes } = useBackend();

  const [monthDays, setMonthDays] = useState([]);
  const [classesOfMonth, setClassesOfMonth] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());

  const updateMonths = () => {
    setClassesOfMonth([]);
    classes
      .byMonth({ month: month + 1 })
      .then((response) => setClassesOfMonth(response));
  };

  useEffect(
    () => setMonthDays(getDaysInMonth(new Date().getFullYear(), month)),
    [month],
  );
  useEffect(updateMonths, [month]);
  useEffect(updateMonths, []);

  return (
    <div>
      <div className={"flex flex-row items-center mb-20 justify-center"}>
        <button onClick={() => (month > 0 ? setMonth(month - 1) : {})}>
          <FontAwesomeIcon
            icon={faCaretLeft}
            color={Colors.barberry}
            className={"h-14 w-14"}
          />
        </button>
        <text className={"text-barberry text-8xl font-koulen"}>
          {monthStrings[month]} {new Date().getFullYear()}
        </text>
        <button onClick={() => (month < 11 ? setMonth(month + 1) : {})}>
          <FontAwesomeIcon
            icon={faCaretRight}
            color={Colors.barberry}
            className={"h-14 w-14"}
          />
        </button>
      </div>

      <div className={"flex flex-row overflow-scroll"}>
        <KHours />
        {monthDays.map((day) => {
          let columnDay = {
            date: new Date(day),
            hours: constructClasses(
              classesOfMonth.filter((item) => item.day === day.getDate()),
            ),
          };
          return <KColumn day={columnDay} />;
        })}
      </div>
    </div>
  );
};
