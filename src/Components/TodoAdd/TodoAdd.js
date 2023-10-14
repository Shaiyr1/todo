import React from 'react'
import './todoAdd.scss'

function TodoAdd({ todoName, setTodoName, todoArr, setTodoArr, status, setStatus }) {
    const createTodo = (name) => {
        setTodoName(name)

    }
    const addTodoArr = (name) => {
        if (name.length !== 0) {
            setTodoArr([...todoArr, {
                name: name,
                isActive: true,
                isCompleted: false,
                isDeleted: false,
                isChange: false,
                isImportant: false,
                id: Math.round(Math.random() * 100)
            }])
            setTodoName('')
        } else {
            // alert("Сен еч нерсе жазбадын!!")

        }


    }

    const changeReset = () => {
        setStatus('reset')
        setTodoName('')

    }
    return (
        <div className='todoAdd'>
            <div className="container">
                <input
                    placeholder={status === "complite" && status === 'important' ? "Вы не можете добавить" : 'Введите...'}
                    className='todoAdd__input' type="text" onChange={(e) => {
                        createTodo(e.target.value)
                    }}
                    value={todoName}
                    disabled={status === "complite"}
                />
                <button className='todoAdd__btn' onClick={() => {
                    addTodoArr(todoName)
                }}>Добавить</button>
                <button className='todoAdd__btn' onClick={() => {
                    changeReset()
                }}>Корзина</button>
            </div>

        </div>
    )
}

export default TodoAdd
