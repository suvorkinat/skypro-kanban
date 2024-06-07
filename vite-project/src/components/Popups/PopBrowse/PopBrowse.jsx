
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { routesPath } from "../../../lib/routesPath";
import * as S from "./PopBrowse.styled.js"
import { useUser } from "../../../hooks/useUser.jsx";
import { useTask } from "../../../hooks/useTask.jsx";
import { CardName } from "../../Card/Card.styled.js";
import { topicColor } from "../../../lib/topic.js";
import { Calendar } from "../../Calendar/Calendar.jsx";
import { deleteTodo, changeTodo } from "../../../Api.js";

export const PopBrowse = () => {
  const { cardId } = useParams();
  const { user } = useUser();
  const { cards, setCards } = useTask();
  const { navigate } = useNavigate();

  const [isEdited, setIsEdited] = useState(false);
  let openedCard = cards.find((card) => card._id === cardId);

  const [selectedDate] = useState(openedCard?.date);

  const [editCard, setEditCard] = useState({
    title: openedCard?.title,
    description: openedCard?.description,
    topic: openedCard?.topic,
    status: openedCard?.status,
    date: openedCard?.date,
  });
  console.log(editCard);

  const deleteCard = () => {
    deleteTodo({ token: user.token, id: cardId })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(routesPath.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...editCard,
      date: selectedDate,
    };
    console.log(taskData);
    changeTodo({ token: user.token, id: cardId, taskData: taskData })
      .then((newCard) => {
        console.log(newCard)
        setCards(newCard.tasks);
        navigate(routesPath.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setEditCard({
      ...editCard,
      [name]: value,
    });
  };

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
              <S.StatusPsubTtlP>Статус</S.StatusPsubTtlP>
              {!isEdited && <S.StatusThemeLabel_1>{ editCard.status}</S.StatusThemeLabel_1>}
                {isEdited && (
                  <S.StatusThemesDiv>
                    <S.OpenedCardTheme
                      type="radio"
                      checked={editCard.status === "Без статуса"}
                      id="radio1"
                      name="status"
                      value="Без статуса"
                      onChange={onChangeInput}
                    />
                    <S.StatusThemeLabel htmlFor="radio1">Без статуса</S.StatusThemeLabel>

                    <S.OpenedCardTheme
                      type="radio"
                      checked={editCard.status === "Нужно сделать"}
                      id="radio2"
                      name="status"
                      value="Нужно сделать"
                      onChange={onChangeInput}
                    />
                    <S.StatusThemeLabel htmlFor="radio2">Нужно сделать</S.StatusThemeLabel>

                    <S.OpenedCardTheme
                      type="radio"
                      checked={editCard.status === "В работе"}
                      id="radio3"
                      name="status"
                      value="В работе"
                      onChange={onChangeInput}
                    />
                    <S.StatusThemeLabel htmlFor="radio3">В работе</S.StatusThemeLabel>

                    <S.OpenedCardTheme
                      type="radio"
                      checked={editCard.status === "Тестирование"}
                      id="radio4"
                      name="status"
                      value="Тестирование"
                      onChange={onChangeInput}
                    />
                    <S.StatusThemeLabel htmlFor="radio4">Тестирование</S.StatusThemeLabel>

                    <S.OpenedCardTheme
                      type="radio"
                      checked={editCard.status === "Готово"}
                      id="radio5"
                      name="status"
                      value="Готово"
                      onChange={onChangeInput}
                    />
                    <S.StatusThemeLabel htmlFor="radio5">Готово</S.StatusThemeLabel>
                  </S.StatusThemesDiv>
                )}
            </S.PopBrowseStatus>
            <S.PopBrouwseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.FormBrowseTitle htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseTitle>
                  {!isEdited && (
                    <S.FormBrowseArea
                      onChange={onChangeInput}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={openedCard.description}
                      disabled={true}
                    />
                  )}
                  {isEdited && (
                    <S.FormBrowseArea
                      onChange={onChangeInput}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={openedCard.description}
                      disabled={false}
                    />
                  )}
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar />

            </S.PopBrouwseWrap>
            {!isEdited && (<S.PopBrowseButtonBrowse>
              <S.ButtonGroup>
                <S.ButtonChengeDelete
                onClick={() => {
                      setIsEdited(!isEdited);
                    }}>
                  Редактировать задачу
                </S.ButtonChengeDelete>
                <S.ButtonChengeDelete onClick={deleteCard}>
                Удалить задачу
                </S.ButtonChengeDelete>
              </S.ButtonGroup>
              <S.LinkClose to={routesPath.MAIN}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </S.LinkClose>
            </S.PopBrowseButtonBrowse>)}
            {isEdited && (<S.PopBrowseButtonBrowse>
              <S.ButtonGroup>
                <S.ButtonChengeDelete
                  onClick={handleFormSubmit}
                >
                  Сохранить
                </S.ButtonChengeDelete>
                <S.LinkClose to={routesPath.MAIN}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </S.LinkClose>
                <S.ButtonChengeDelete
                  onClick={() => {
                    setIsEdited(!isEdited);
                  }}
                >
                  Отменить
                </S.ButtonChengeDelete>

                <S.ButtonChengeDelete
                  onClick={deleteCard}
                >
                  Удалить задачу
                </S.ButtonChengeDelete>
              </S.ButtonGroup>

            </S.PopBrowseButtonBrowse>)}
          </S.PopBrouwseContent>
        </S.PopBrouwseBlock>
      </S.PopBrouwseContainer>
    </S.PopBrouwseStyled>
  );
}
           
          