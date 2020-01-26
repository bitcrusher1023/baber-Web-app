import React, { useState, useMemo, useEffect } from "react";
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO
} from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import pt from "date-fns/locale/pt";
import api from "../../services/api";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Container, Time } from "./styles";
import rangeAppointments from "../../services/rangeAppointments";

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const formattedDate = useMemo(
    () => format(date, "EEEE ',' d 'de' MMMM - yyyy", { locale: pt }),
    [date]
  );

  const handlePrevDay = () => {
    setDate(subDays(date, 1));
  };
  const handleNextDay = () => {
    setDate(addDays(date, 1));
  };

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get("/schedule", {
        params: { date }
      });

      // Gets users current time zone
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = rangeAppointments.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timeZone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(appointment =>
            isEqual(parseISO(appointment.date), compareDate)
          )
        };
      });

      setSchedule(data);
    }
    loadSchedule();
  }, [date]);

  return (
    <Container>
      <h1>Agendamentos</h1>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} />
        </button>

        <strong>{formattedDate}</strong>

        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} />
        </button>
      </header>

      <ul>
        {schedule &&
          schedule.map(time => (
            <Time
              key={time.time}
              past={time.past}
              available={!time.appointment}
            >
              <strong>{time.time}</strong>
              <span>
                {time.appointment ? time.appointment.user.name : "Em aberto"}
              </span>
            </Time>
          ))}
      </ul>
    </Container>
  );
}
