import React, { useState, useMemo } from "react";
import { format, subDays, addDays } from "date-fns";
import pt from "date-fns/locale/pt";
import api from "../../services/api";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Container, Time } from "./styles";

export default function Dashboard() {
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
        <Time past>
          <strong>08:00</strong>
          <span>Daniel F</span>
        </Time>

        <Time available>
          <strong>09:00</strong>
          <span>Daniel F</span>
        </Time>

        <Time>
          <strong>10:00</strong>
          <span>Daniel F</span>
        </Time>

        <Time>
          <strong>11:00</strong>
          <span>Daniel F</span>
        </Time>
      </ul>
    </Container>
  );
}
