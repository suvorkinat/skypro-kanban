import { useState } from "react";
import * as S from "./Calendar.styled.js";
import { ru } from "date-fns/locale";

export const Calendar = () => {


  const [date, setDate] = useState(new Date)
  const currentDate = date.toLocaleDateString("ru-US")

  let footer = <p>Выберите срок исполнения.</p>;
  if (setDate) {
    // footer = <p>Вы выбрали {format(setDate, "PP", { locale: ru })}.</p>;
    footer = <p>Срок исполнения:{""} {currentDate}.</p>;
  }

  return (
    <S.Calendar>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      {/* <S.CalendarDate locale={ru} mode="single" onSelect = {setDate} selected = {date} /> */}
      <S.CalendarDate
        locale={ru}
        mode="single"
        selected = {date}
        onSelect = {setDate}
        footer={footer}
      />
    </S.Calendar>

  )
}