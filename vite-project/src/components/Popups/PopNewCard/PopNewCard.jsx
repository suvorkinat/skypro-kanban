import { routesPath } from "../../../lib/routesPath";
import {Calendar} from "../../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { TaskContext } from "../../../context/taskContext";
import * as S from "./PopNewCard.styled.js";
import { postTodo } from "../../../Api";

export const PopNewCard = () => {

  const {user} = useContext(UserContext)
  const { setCards } = useContext(TaskContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const [date] = useState(new Date)

  const [inputValue, setInputValue] = useState({
    title: '',
    topic: '',
    status: '',
    description:'',
  })


   const OnAddNewCard = () => {
    setError('')
    const title = !inputValue.title ? 'Новая задача' : inputValue.title
    const topic = !inputValue.topic ? 'Research' : inputValue.topic
    const status = !inputValue.status ? 'Без статуса' : inputValue.status
    const newCard = {
      description: inputValue.description,
      title,
      topic,
      status,
      date,
    }

    if (!inputValue.description) {
      return setError('Заполните описание')
    }
    postTodo({
      task:newCard,
      token: user.token
    }).then((responce)=>{
      console.log(responce)
      setCards(responce.tasks)
      navigate(routesPath.MAIN)
    }).catch((err)=>{
      setError(err.message)
    })
  }

  const onChangeInput = (e) => {
    const {value, name} = e.target
    setInputValue({...inputValue, [name]: value})
  }


  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose>
            <Link to={routesPath.MAIN}>&#10006;</Link>
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm action="#">
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                  <S.FormNewInput
                        onChange={onChangeInput}
                        value={inputValue.title}
                        type="text"
                        name="title"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        autoFocus=""
                      />
                    </S.FormNewBlock>
                    <S.FormNewBlock>
                      <S.Subttl htmlFor="textArea">
                        Описание задачи
                      </S.Subttl>
                      <S.FormNewArea
                        onChange={onChangeInput}
                        name="description"
                        id="textArea"
                        placeholder="Введите описание задачи..."
                        defaultValue={""}
                      />
                    </S.FormNewBlock>
                  </S.PopNewCardForm>
                  <Calendar />
                </S.PopNewCardWrap>
                <S.PopNewCardCategories>
                  <p>Категория</p>
                  <S.PopNewCardCategoriesTheme>

                    <S.InputRadio
                      type="radio"
                      id="radio1"
                      name="topic"
                      value="Web Design"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel1 htmlFor="radio1">Web Design</S.RadioToolbarLabel1>

                    <S.InputRadio
                      type="radio"
                      id="radio2"
                      name="topic"
                      value="Research"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel2 htmlFor="radio2">Research</S.RadioToolbarLabel2>

                    <S.InputRadio
                      type="radio"
                      id="radio3"
                      name="topic"
                      value="Copywriting"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel3 htmlFor="radio3">Copywriting</S.RadioToolbarLabel3>

                  </S.PopNewCardCategoriesTheme>
                </S.PopNewCardCategories>
                {error && error}
                <button onClick={OnAddNewCard} className="form-new__create _hover01" id="btnCreate">
                  Создать задачу
                </button>
              </S.PopNewCardContent>
            </S.PopNewCardBlock>
          </S.PopNewCardContainer>
        </S.PopNewCard>              
)}

export default PopNewCard;
