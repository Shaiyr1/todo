import React from 'react'
import './todoFooter.scss'

function TodoFooter({ todoName, setTodoName, todoArr, setTodoArr, status, setStatus }) {
    const changeStatus = (e) => {
        setStatus(e.target.value)
    }

    const deliteComplited = () => {
        setTodoArr(todoArr.filter((item) => !item.isCompleted));
    }

    return (
        <div className='todoFooter'>
            <div className="container">
                <div className="todoFooter__titles">
                    <p>Задачи: {todoArr.length}</p>
                    <p>Выполнено: {todoArr.filter((item) =>
                        item.isCompleted
                    ).length}
                    </p>
                    <p>Важные: {todoArr.filter((item) =>
                        item.isImportant
                    ).length}
                    </p>
                </div>

                <div className="todoFooter__btns">
                    <button value="all" onClick={(e) => {
                        changeStatus(e)
                    }}>All</button>
                    <button value="active" onClick={(e) => {
                        changeStatus(e)
                    }}>Active</button>
                    <button className='active' value="complite" onClick={(e) => {
                        changeStatus(e)
                    }}>Complite</button>
                    <button className='important' value="important" onClick={(e) => {
                        changeStatus(e)
                    }}>Important</button>
                    <button className='delete' value="reset" onClick={() => {
                        deliteComplited()
                    }}>Delite Complite</button>
                </div>
            </div>


        </div>
    )
}

export default TodoFooter
