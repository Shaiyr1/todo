import React from 'react'
import './todoHeader.scss'

function TodoHeader() {
  const data = new Date();
  let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Декабрь"];
  let day = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятьница", "Суббота", "Воскресенье"];

  return (
    <div className='header'>
      <div className="container">
        <h1 className='header__title'>Список дел</h1>
        <div className="header__data">
          <p className='header__data_day'>День: {data.getDate() - 1} | Время: {data.getHours()}:{data.getMinutes()} | {day[data.getDay() - 1]}</p>
          <p className='header__data_months'>Месяц: {months[data.getMonth()]}</p>
          <p className='header__data_year'>Год: {data.getFullYear()}</p>
        </div>
      </div>


    </div>
  )
}

export default TodoHeader
