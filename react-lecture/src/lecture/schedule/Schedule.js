import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [events, setEvents] = useState([
    {
      title: "이벤트1",
      start: new Date(),
      end: new Date(),
      contents: "자격증 시험",
    },
    {
      title: "이벤트2",
      start: new Date("2024-05-23"),
      end: new Date("2024-05-25"),
    },
  ]);

  const clickEvent = (param) => {
    console.log(param);

    // 날짜 형식 formatting
    if (param) {
      // version 1. date 내장 method 사용
      console.log(param.start.toISOString().split("T")[0]);
      // version 2. moment library 사용
      console.log(moment(param.start).format("YYYY년MM월DD일"));
    }
  };

  // 슬롯(캘린더의 일자별 칸)
  const clickSlot = (param) => {
    console.log(param);
    if (param) {
      setEvents([
        ...events,
        { title: "이벤트3", start: param.start, end: param.end },
      ]);
    }
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={clickEvent}
        onSelectSlot={clickSlot}
        selectable
      />
    </>
  );
};
export default Schedule;
