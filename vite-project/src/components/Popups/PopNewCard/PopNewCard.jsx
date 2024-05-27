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

   //Обработка БЭК
   const OnAddNewTask = () => {
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
      newCard,
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
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={routesPath.MAIN}>
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
