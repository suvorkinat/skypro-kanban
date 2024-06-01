const userHost = "https://wedev-api.sky.pro/api/user";
const host = "https://wedev-api.sky.pro/api/kanban";

//Получить список задач
export const getCards = (token) => {
    return fetch(host, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response)=>{
      if (!response.status === 401) {
        throw new Error("Ошибка авторизации");
      }
      if (response.status === 500) {
        throw new Error("Ошибка сервера");
      }
      if (!response.ok) {
        throw new Error("Что то пошло не так");
      }
      return response.json();
    });
  }

  //Добавить задачу в список
export async function postTodo({token, task}) {
    const response = await fetch(host, {
      headers: {
        Authorization:  `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({task})
    });
    if (!response.status === 200) {
      throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
  }

  //change task 
  export async function changeTodo({ token, id, taskData }) {
    const response = await fetch(basaHost + `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify(taskData)
    });
  
  
    if (!response.status === 201) {
        throw new Error("Ошибка");
    }
  
    const data = await response.json();
    return data;
  }
  

  //delete task 
  export async function deleteTodo({ taskData, id, token }) {
    const response = await fetch(basaHost + `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
            taskData,
        })
    });
    if (!response.status === 201) {
      throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}

export async function getUsersList({ token }) {
  const response = await fetch(userHost, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });


  if (!response.status === 201) {
      throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}
  

  //РЕГИСТРАЦИЯ
export const register = ({ name, login, password }) => {
    return fetch(userHost, {
      method: "POST",
      body: JSON.stringify({
        name,
        login,
        password,
      }),
    }).then((response) => {
      if (response.status === 400) {
        throw new Error("Такой пользователь уже существует");
      }
      if (response.status === 500) {
        throw new Error("Ошибка сервера");
      }
      if (!response.ok) {
        throw new Error("Что то пошло не так");
      }
      return response.json();
    });
  }
  
  //АВТОРИЗАЦИЯ
  export const loginAuth = ({ login, password }) => {
    return fetch(userHost + "/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    }).then((response) => {
      if (response.status === 400) {
        throw new Error("Неверный логин или пароль");
      }
      if (response.status === 500) {
        throw new Error("Ошибка сервера");
      }
      if (!response.ok) {
        throw new Error("Что то пошло не так");
      }
      return response.json();
    });
  }
  