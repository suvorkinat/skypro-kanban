
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { routesPath } from "../../../lib/routesPath";
import * as S from "./PopBrowse.styled.js"
import { useUser } from "../../../hooks/useUser.jsx";
import { useTask } from "../../../hooks/useTask.jsx";
import { CardName } from "../../Card/Card.styled.js";
import { topicColor } from "../../../lib/topic.js";
import { Calendar } from "../../Calendar/Calendar.jsx";


export const PopBrowse = () => {
  const { cardId } = useParams();
  const { user } = useUser();
  const { cards } = useTask();
  let openedCard = cards.find((card) => card._id === cardId);

  const [selectedDate] = useState(openedCard?.date);

  if (!openedCard) {
    return <Navigate to={routesPath.MAIN} />;
  }

  return (
    <S.PopBrouwseStyled id="popBrowse">
      <S.PopBrouwseContainer>
        <S.PopBrouwseBlock>
          <S.PopBrouwseContent>
            <S.PopBrouwseTopBlock>
              <S.PopBrouwseTitle>Название задачи: {openedCard.title}</S.PopBrouwseTitle>
              <S.PopBroweColor $themeColor={topicColor[openedCard.topic]}>
                <CardName $themeColor={topicColor[openedCard.topic]}>
                  {openedCard.topic}
                </CardName>
              </S.PopBroweColor>
            </S.PopBrouwseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPsubTtlP>Статус: {openedCard.status}</S.StatusPsubTtlP>
            </S.PopBrowseStatus>
            <S.PopBrouwseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.FormBrowseTitle htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseTitle>
                  <S.FormBrowseArea
                    readOnly=""
                    defaultValue={openedCard.description}
                    disabled={true}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar />
            </S.PopBrouwseWrap>
            <S.PopBrowseButtonBrowse>
              <Link to={routesPath.MAIN}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </Link>
            </S.PopBrowseButtonBrowse>
          </S.PopBrouwseContent>
        </S.PopBrouwseBlock>
      </S.PopBrouwseContainer>
    </S.PopBrouwseStyled>
  );
};
