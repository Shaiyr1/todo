


import React, { useState } from 'react';
import './todo.scss';

function Todo({ todoArr, setTodoArr, status, setStatus }) {
    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState('');

    const completed = (id) => {
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted,
                    isActive: !item.isActive,
                };
            } else {
                return item;
            }
        }));
    };

    const important = (id) => {
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isImportant: !item.isImportant,
                };
            } else {
                return item;
            }
        }));
    };

    const deleted = (id) => {
        // setTodoArr(todoArr.map((item) => {
        //     if (item.id === id) {
        //         return {
        //             ...item,
        //             isDeleted: true,
        //         };
        //     } else {
        //         return item;
        //     }
        // }));
        setTodoArr(
            todoArr.map((item) => {
                if (item.id === id) {
                    return { ...item, isDeleted: !item.isDeleted };
                } else {
                    return item;
                }
            })
        );
    };

    const deliteToDo = (id) => {
        // setTodoArr(
        //     todoArr.map((item) => {
        //         if (item.id === id) {
        //             return { ...item, isDeleted: !item.isDeleted };
        //         } else {
        //             return item;
        //         }
        //     })
        // );
        setTodoArr(todoArr.filter((item) => {
            return item.id !== id
        }))
    }

    const handleEdit = (id) => {
        setEditingId(id);
        const editedTask = todoArr.find((item) => item.id === id);
        setEditedText(editedTask ? editedTask.name : '');
    };

    const handleSave = (id) => {
        setEditingId(null);
        setTodoArr(todoArr.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    name: editedText,
                };
            } else {
                return item;
            }
        }));
    };



    // const delitedRes = (id) => {
    //     setTodoArr(
    //         todoArr.map((item) => {
    //           if (item.id === id) {
    //             return {...item,isDeleted: !item.isDeleted };
    //           } else {
    //             return item;
    //           }
    //         })
    //       );
    // }

    return (
        <div className='todo'>
            <div className="container">

                <ul className='todo__ul'>
                    {todoArr
                        .filter((item) => {
                            if (status === "active") {
                                return !item.isCompleted && !item.isDeleted;
                            } else if (status === "complite") {
                                return item.isCompleted && !item.isDeleted;
                            } else if (status === "important") {
                                return item.isImportant;
                            } else if (status === "reset") {
                                return item.isDeleted;
                            } else {
                                return !item.isDeleted;
                            }
                        })
                        .map((item) => (
                            <li
                                key={item.id}
                                className={`todo__ul_li ${item.isCompleted ? "active" : ""} ${item.isImportant ? "important" : ""}`}
                            >
                                {editingId === item.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editedText}
                                            onChange={(e) => setEditedText(e.target.value)}
                                        />
                                        <button onClick={() => handleSave(item.id)}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        {item.name.length > 19
                                            ? `${item.name.substr(0, 20)}...`
                                            : item.name}{" "}
                                        <div className="todo__ul_btns">
                                            {status === 'reset'
                                                ? ''
                                                : <button className="todo__ul_btns-btn" onClick={() => handleEdit(item.id)}>Edit</button>

                                            }
                                            {status === 'reset'
                                                ? ''
                                                : <button className="todo__ul_btns-btn" onClick={() => completed(item.id)}>
                                                    Выполнено {item.isCompleted ? "✘" : "✔"}
                                                </button>
                                            }
                                            {status === 'reset'
                                                ? ''
                                                : <button className="todo__ul_btns-btn important" onClick={() => important(item.id)}>Важное</button>
                                            }
                                            {status === 'reset'
                                                ? ''
                                                : <button className='delete' onClick={() => deleted(item.id)}>Удалить</button>

                                            }
                                            {status === 'reset' ?
                                                    <button
                                                        onClick={() => deleted(item.id)}
                                                        type="button"
                                                        className="todo__ul_btns-btn"
                                                    >
                                                        reset
                                                    </button> : ''
                                                }
                                                {status === 'reset' ?
                                                    <button
                                                        onClick={() => deliteToDo(item.id)}
                                                        type="button"
                                                        className="TodoList__func delete"
                                                    >

                                                        delete
                                                    </button>
                                                    : ''
                                                }


                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
