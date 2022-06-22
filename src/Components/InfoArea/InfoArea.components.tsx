// @flow
import * as React from "react";
import * as C from "./InfoArea.style";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { formatCurrentMonth } from "../../Helpers/dataFilter";
import { Resume } from "../Resume/Resume.components";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export function InfoArea({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <AiOutlineArrowLeft />
        </C.MonthArrow>

        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>

        <C.MonthArrow onClick={handleNextMonth}>
          <AiOutlineArrowRight />
        </C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea>
        <Resume title="Receitas" value={income} />
        <Resume title="Despesas" value={expense} />
        <Resume
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
}
