import React from 'react'
import Todo from '../Todo/Todo'
import TodoFooter from '../TodoFooter/TodoFooter'
import './todoList.scss'

function TodoList({ todoName, setTodoName, todoArr, setTodoArr, status, setStatus }) {


    return (
        <div className='todolist'>
            <div className="container">
                <div className="">
                    {todoArr.filter((item)=> !item.isDeleted).length === 0 && status === 'all'
                    ? <h3>Здесь будут ваши задании</h3>
                    : todoArr.filter((item)=> item.isCompleted && !item.isDeleted).length === 0 && status === 'complite' ? <h3>Здесь будут ваши выполненные задание</h3>
                    : todoArr.filter((item)=> !item.isCompleted && !item.isDeleted).length === 0 && status === 'active' ? <h3>Здесь будут ваши активные задание</h3>
                    : todoArr.filter((item)=> item.isDeleted).length === 0 && status === 'reset' ? <h3>Здесь будут ваши удаленные задание</h3>
                    : todoArr.filter((item)=> item.isImportant).length === 0 && status === 'important' ? <h3>Здесь будут ваши важные задание</h3>    
                :
                    <Todo todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus} />}
                </div>
                <TodoFooter todoName={todoName} setTodoName={setTodoName} todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus} />
            </div>


        </div>
    )
}

export default TodoList
